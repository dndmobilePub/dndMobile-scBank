"use client";

import React from "react";
import { ScBox } from "../component/ui";
import ScText from "../component/ui/scText";

type CardItem = {
  id: number; // 내부 key용 (유니크면 됨)
  no: number; // ✅ 화면에 보여줄 연속 번호(절대 안 끊김)
  title: string;
  color: string;
  link: string;
};

const CARD_HEIGHT = 418;
const GAP = 20;

const SWIPE_UP = 60;
const SWIPE_DOWN = 35;
const MAX_DRAG = CARD_HEIGHT + GAP;
const CLICK_THRESHOLD = 5;

const PREFETCH_REMAIN = 2;
const BATCH_COUNT = 10;

const PREV_ANIM_MS = 260;

const CARD_LIST: Array<Omit<CardItem, "id" | "no">> = [
  { title: "CARD", link: "#", color: "aqua" },
  { title: "CARD", link: "#", color: "red" },
  { title: "CARD", link: "#", color: "rebeccapurple" },
  { title: "CARD", link: "#", color: "olive" },
  { title: "CARD", link: "#", color: "orange" },
  { title: "CARD", link: "#", color: "blue" },
  { title: "CARD", link: "#", color: "salmon" },
  { title: "CARD", link: "#", color: "gold" },
  { title: "CARD", link: "#", color: "lightseagreen" },
  { title: "CARD", link: "#", color: "mediumpurple" },
];

const COLORS = [
  "aqua",
  "red",
  "rebeccapurple",
  "olive",
  "orange",
  "blue",
  "salmon",
  "gold",
  "lightseagreen",
  "mediumpurple",
];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function getLinkForIndex(index: number) {
  return `https://example.com/card-${index + 1}`;
}

// ✅ 신규 카드 생성: title에는 숫자 넣지 말고(no로만 표기)
function createNewBatch(
  startId: number,
  startNo: number,
  count: number
): CardItem[] {
  return Array.from({ length: count }, (_, i) => {
    const id = startId + i;
    const no = startNo + i;
    return {
      id,
      no,
      title: "CARD",
      color: getRandomColor(),
      link: getLinkForIndex(no - 1),
    };
  });
}

type ReleaseState = null | { dir: "prev"; step: 1 | 2 };

export function CardStackDragFollowReact() {
  const [cards, setCards] = React.useState<CardItem[]>(() =>
    CARD_LIST.map((item, idx) => ({
      id: idx,
      no: idx + 1, // ✅ 1~10
      ...item,
    }))
  );

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [dragDelta, setDragDelta] = React.useState(0);
  const [release, setRelease] = React.useState<ReleaseState>(null);

  const draggingRef = React.useRef(false);
  const startYRef = React.useRef(0);
  const movedRef = React.useRef(false);
  const dragDeltaRef = React.useRef(0);

  const activeIndexRef = React.useRef(0);
  const cardsLenRef = React.useRef(0);

  // ✅ id/no 관리(연속 보장)
  const nextIdRef = React.useRef(cards.length);
  const nextNoRef = React.useRef(cards.length + 1);
  const prefetchingRef = React.useRef(false);

  React.useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  React.useEffect(() => {
    cardsLenRef.current = cards.length;
    nextIdRef.current = Math.max(nextIdRef.current, cards.length);
    nextNoRef.current = Math.max(nextNoRef.current, cards.length + 1);
  }, [cards.length]);

  React.useEffect(() => {
    dragDeltaRef.current = dragDelta;
  }, [dragDelta]);

  const ensurePrefetch = React.useCallback(() => {
    const ai = activeIndexRef.current;
    const len = cardsLenRef.current;

    if (prefetchingRef.current) return;

    if (len - 1 - ai <= PREFETCH_REMAIN) {
      prefetchingRef.current = true;

      setCards((prev) => {
        const startId = nextIdRef.current;
        const startNo = nextNoRef.current;

        const batch = createNewBatch(startId, startNo, BATCH_COUNT);

        nextIdRef.current = startId + BATCH_COUNT;
        nextNoRef.current = startNo + BATCH_COUNT;

        return [...prev, ...batch];
      });

      requestAnimationFrame(() => {
        prefetchingRef.current = false;
      });
    }
  }, []);

  const dragStart = (y: number) => {
    setRelease(null);
    draggingRef.current = true;
    setDragging(true);

    startYRef.current = y;
    movedRef.current = false;
    setDragDelta(0);

    ensurePrefetch();
  };

  const dragMove = (y: number) => {
    if (!draggingRef.current) return;

    let delta = y - startYRef.current;

    if (activeIndexRef.current === 0 && delta > 0) {
      setDragDelta(0);
      return;
    }

    delta = Math.max(Math.min(delta, MAX_DRAG), -MAX_DRAG);

    if (Math.abs(delta) > CLICK_THRESHOLD) movedRef.current = true;
    if (delta < 0) ensurePrefetch();

    setDragDelta(delta);
  };

  const goNext = () => {
    setActiveIndex((v) => v + 1);
    setDragDelta(0);
    ensurePrefetch();
  };

  const animatePrev = () => {
    setRelease({ dir: "prev", step: 1 });

    requestAnimationFrame(() => setDragDelta(MAX_DRAG));

    window.setTimeout(() => {
      setRelease({ dir: "prev", step: 2 });
      setActiveIndex((v) => Math.max(v - 1, 0));
      setDragDelta(0);
      window.setTimeout(() => setRelease(null), 30);
    }, PREV_ANIM_MS);
  };

  const goPrev = () => {
    if (activeIndexRef.current > 0) animatePrev();
  };

  const dragEnd = () => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    setDragging(false);

    const delta = dragDeltaRef.current;

    if (!movedRef.current || Math.abs(delta) < CLICK_THRESHOLD) {
      setDragDelta(0);
      return;
    }

    if (delta < -SWIPE_UP) goNext();
    else if (delta > SWIPE_DOWN) goPrev();
    else setDragDelta(0);
  };

  React.useEffect(() => {
    const move = (e: MouseEvent) => dragMove(e.clientY);
    const up = () => dragEnd();

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => {
    const isReleaseDown = release?.dir === "prev" && release.step === 1;
    const isActive = index === activeIndex;

    const delta = dragDelta;

    const down = Math.min(Math.max(delta, 0), MAX_DRAG);
    const up = Math.min(Math.max(-delta, 0), MAX_DRAG);
    const downProgress = down / MAX_DRAG;
    const upProgress = up / MAX_DRAG;

    const phaseStart = SWIPE_UP * 0.5;
    let prevScale = 0.8;
    if (down > phaseStart && activeIndex > 0) {
      const prevProgress = Math.min(
        (down - phaseStart) / (MAX_DRAG - phaseStart),
        1
      );
      prevScale = 0.8 + 0.2 * prevProgress;
    }

    let baseY = 0;
    let extraY = 0;
    let scale = 1;
    let opacity = 1;
    let shadow = false;

    const zIndexBase = 1000;
    let zIndex = zIndexBase - index;
    if (index === activeIndex) zIndex = zIndexBase + 3;
    if (index === activeIndex + 1) zIndex = zIndexBase + 2;
    if (index === activeIndex - 1) zIndex = zIndexBase + 1;

    // 기본 배치
    if (index < activeIndex) {
      const offset = activeIndex - 1 - index;
      scale = Math.max(0.8 - offset * 0.05, 0.6);
      opacity = 0.8;
      if (index < activeIndex - 1) opacity = 0;
    } else if (index === activeIndex) {
      baseY = 0;
      shadow = true;
    } else if (index === activeIndex + 1) {
      baseY = CARD_HEIGHT + GAP;
      shadow = true;
    } else {
      baseY = CARD_HEIGHT * index + GAP * 2;
    }

    // 아래로
    if ((dragging || isReleaseDown) && delta > 0 && activeIndex > 0) {
      if (index === activeIndex) extraY = down;
      if (index === activeIndex + 1) extraY = down + GAP;

      if (index === activeIndex - 1) {
        scale = prevScale;
        shadow = true;
        zIndex = zIndexBase + 2;
      }
    }

    // 위로
    if (dragging && delta < 0) {
      if (index === activeIndex) {
        scale = 1 - (1 - 0.85) * upProgress; // 축소만
        extraY = 0;
        shadow = true;
      }
      if (index === activeIndex + 1) {
        extraY = delta;
        shadow = true;
        zIndex = zIndexBase + 3;
      }
    }

    // opacity 최종 확정
    if ((dragging || isReleaseDown) && delta > 0 && activeIndex > 0) {
      if (activeIndex > 1 && index === activeIndex - 2) opacity = 0;
      if (index === activeIndex - 1) opacity = 0.4 + 0.6 * downProgress;
    }
    if (dragging && delta < 0) {
      if (index === activeIndex) opacity = 1 - 0.4 * upProgress;
      if (index === activeIndex + 1) opacity = 0.6 + 0.4 * upProgress;
    }

    const isReleaseTransition = isReleaseDown;

    return {
      transform: `translate(-50%, ${baseY + extraY}px) scale(${scale})`,
      opacity,
      zIndex,
      boxShadow: shadow ? "0 10px 25px rgba(0,0,0,0.12)" : "none",
      pointerEvents: opacity === 0 ? "none" : "auto",
      userSelect: "none",
      transition: isReleaseTransition
        ? `transform ${PREV_ANIM_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease`
        : dragging
        ? isActive
          ? "none"
          : "transform 120ms ease-out, opacity 120ms ease-out"
        : "transform 0.35s ease, opacity 0.25s ease",
    };
  };

  return (
    <>
      <style>{`
        .card-wrapper {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }
        .card-stack {
          position: relative;
          max-width: 335px;
          height: 100%;
          margin: 0 auto;
          cursor: grab;
          touch-action: none;
          user-select: none;
        }
        .card-stack:active { cursor: grabbing; }
        .card {
          position: absolute;
          left: 50%;
          width: 100%;
          height: ${CARD_HEIGHT}px;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-weight: 600;
          will-change: transform, opacity;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>

      <ScBox className="card-wrapper">
        <ScBox
          className="card-stack"
          onMouseDown={(e) => {
            e.preventDefault();
            dragStart(e.clientY);
          }}
          onTouchStart={(e) => dragStart(e.touches[0].clientY)}
          onTouchMove={(e) => dragMove(e.touches[0].clientY)}
          onTouchEnd={dragEnd}
        >
          {cards.map((c, idx) => {
            const style = getCardStyle(idx);
            return (
              <ScBox
                key={c.id}
                className="card"
                style={{
                  ...style,
                  backgroundColor: c.color,
                }}
                onClickCapture={(e) => {
                  if (movedRef.current) e.preventDefault();
                }}
              >
                {/* ✅ 숫자 1번만 / 연속 보장 */}
                <ScText fontStyle="lg">{`${c.title}_${c.no}`}</ScText>
              </ScBox>
            );
          })}
        </ScBox>
      </ScBox>
    </>
  );
}
