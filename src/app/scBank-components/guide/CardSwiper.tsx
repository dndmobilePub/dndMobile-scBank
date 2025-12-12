"use client";

import React from "react";

type CardItem = {
  id: number;
  title: string;
  color: string;
  link: string;
};

const CARD_HEIGHT = 418;
const GAP = 20;

const SWIPE_UP = 60; // 위로(다음 카드)
const SWIPE_DOWN = 35; // 아래로(이전 카드) - 더 쉽게
const MAX_DRAG = CARD_HEIGHT + GAP;
const CLICK_THRESHOLD = 5;

const PREFETCH_REMAIN = 2;
const BATCH_COUNT = 10;

// 내릴 때 자동 애니메이션 시간(부드럽게)
const PREV_ANIM_MS = 260;

const CARD_LIst = [
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

// function createBatch(startId: number, count: number): CardItem[] {
//   return Array.from({ length: count }, (_, i) => {
//     const id = startId + i;
//     return {
//       id,
//       title: `Card ${id + 1}`,
//       color: getRandomColor(),
//       link: getLinkForIndex(id),
//     };
//   });
// }

function createBatch(startId: number, count: number): CardItem[] {
  return Array.from({ length: count }, (_, i) => {
    const id = startId + i;
    return {
      id,
      title: `Card ${id + 1}`,
      color: getRandomColor(),
      link: getLinkForIndex(id),
    };
  });
}

type ReleaseState = null | { dir: "prev"; step: 1 | 2 };

export function CardStackDragFollowReact() {
  const [cards, setCards] = React.useState<CardItem[]>(() =>
    createBatch(0, BATCH_COUNT)
  );
  const [activeIndex, setActiveIndex] = React.useState(0);

  // UI용 state
  const [dragging, setDragging] = React.useState(false);
  const [dragDelta, setDragDelta] = React.useState(0);
  const [release, setRelease] = React.useState<ReleaseState>(null);

  // 즉시 판정용 ref (클릭/드래그 충돌 해결)
  const draggingRef = React.useRef(false);

  const startYRef = React.useRef(0);
  const movedRef = React.useRef(false);
  const dragDeltaRef = React.useRef(0);

  const activeIndexRef = React.useRef(0);
  const cardsLenRef = React.useRef(0);

  React.useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  React.useEffect(() => {
    cardsLenRef.current = cards.length;
  }, [cards.length]);

  React.useEffect(() => {
    dragDeltaRef.current = dragDelta;
  }, [dragDelta]);

  const ensurePrefetch = React.useCallback(() => {
    const ai = activeIndexRef.current;
    const len = cardsLenRef.current;
    if (len - 1 - ai <= PREFETCH_REMAIN) {
      setCards((prev) => [...prev, ...createBatch(prev.length, BATCH_COUNT)]);
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

    // 첫 카드일 때 아래로(이전) 금지
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

    // 1프레임 뒤에 MAX_DRAG 적용 -> transition 먹게
    requestAnimationFrame(() => {
      setDragDelta(MAX_DRAG);
    });

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

  // 전역 mouse 추적
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

    const clampedDown = Math.min(delta > 0 ? delta : 0, MAX_DRAG);

    // 위로 드래그 진행도
    const up = Math.min(Math.max(-delta, 0), MAX_DRAG);
    const upProgress = up / MAX_DRAG; // 0~1

    // 아래로 드래그 진행도
    const downProgress = clampedDown / MAX_DRAG; // 0~1

    // 아래로 드래그 시: 이전 카드 커지는 진행도
    const phaseStart = SWIPE_UP * 0.5;

    let prevScale = 0.8;
    if (clampedDown > phaseStart && activeIndex > 0) {
      const prevProgress = Math.min(
        (clampedDown - phaseStart) / (MAX_DRAG - phaseStart),
        1
      );
      prevScale = 0.8 + 0.2 * prevProgress; // 0.8 -> 1.0
    }

    let baseY = 0;
    let scale = 1;
    let opacity = 1;
    let extraY = 0;
    let shadow = false;

    const zIndexBase = 1000;
    let zIndex = zIndexBase - index;
    if (index === activeIndex) zIndex = zIndexBase + 3;
    if (index === activeIndex + 1) zIndex = zIndexBase + 2;
    if (index === activeIndex - 1) zIndex = zIndexBase + 1;

    // 기본 배치
    if (index < activeIndex) {
      const isOffset = activeIndex - 1 - index;
      const shrinkStep = 0.05;
      const minScale = 0.6;

      scale = Math.max(0.8 - isOffset * shrinkStep, minScale);
      opacity = 0.8;
      shadow = false;

      if (index < activeIndex - 2) opacity = 0;
    } else if (index === activeIndex) {
      baseY = 0;
      scale = 1;
      opacity = 1;
      shadow = true;
    } else if (index === activeIndex + 1) {
      baseY = CARD_HEIGHT + GAP;
      scale = 1;
      opacity = 1;
      shadow = true;
    } else {
      baseY = CARD_HEIGHT * index + GAP * 2;
      scale = 1;
      opacity = 1;
      shadow = false;
    }

    // ✅ 투명도 효과는 "마지막에 확정 적용" (덮어쓰기 방지)
    if ((dragging || isReleaseDown) && delta > 0 && activeIndex > 0) {
      // 2번째 이전 카드는 완전 숨김 (존재할 때만)
      if (activeIndex > 1 && index === activeIndex - 2) {
        opacity = 0;
      }

      // prev는 점점 진해짐
      if (index === activeIndex - 1) {
        opacity = 0.4 + 0.6 * downProgress;
      }

      // (원하면) active도 같이 흐려지게
      // if (index === activeIndex) opacity = 1 - 0.5 * downProgress;
    }

    // ✅ 위로 드래그 중일 때: active "축소만"(위로 이동 없음) + next 올라옴
    if (dragging && delta < 0) {
      if (index === activeIndex) {
        const minScale = 0.85;
        scale = 1 - (1 - minScale) * upProgress;
        extraY = 0; // ✅ active는 올라가지 않게(축소만)
        shadow = true;
      }

      if (index === activeIndex + 1) {
        extraY = delta; // next가 그대로 따라 올라오게
        shadow = true;

        zIndex = zIndexBase + 3;
      }

      if (upProgress > 0.55 && index === activeIndex) {
        zIndex = zIndexBase + 2;
      }
    }

    // ✅ 투명도 효과는 "마지막에 확정 적용" (덮어쓰기 방지)
    if ((dragging || isReleaseDown) && delta > 0 && activeIndex > 0) {
      if (index === activeIndex - 2) opacity = 0;
      if (index === activeIndex - 1) opacity = 0.4 + 0.6 * downProgress;
    }

    if (dragging && delta < 0) {
      if (index === activeIndex) opacity = 1 - 0.4 * upProgress; // 1 -> 0.6
    }

    return {
      transform: `translate(-50%, ${baseY + extraY}px) scale(${scale})`,
      opacity,
      zIndex,
      boxShadow: shadow ? "0 10px 25px rgba(0,0,0,0.12)" : "none",
      pointerEvents: opacity === 0 ? "none" : "auto",
      userSelect: "none",

      // 드래그 중에도 효과 보이게:
      // - active는 즉시 따라오게(transition 없음)
      // - 나머지는 살짝 스무딩
      transition: isReleaseDown
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
        .card-stack:active {
          cursor: grabbing;
        }
        .card {
          position: absolute;
          left: 50%;
          width: 100%;
          border-radius: 16px;
          display: flex;
          // align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 600;
          background: white;
          will-change: transform, opacity;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>

      <div className="card-wrapper">
        <div
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
              <div
                key={c.id}
                className="card"
                style={{
                  ...style,
                  height: CARD_HEIGHT,
                  backgroundColor: c.color,
                }}
                onClickCapture={(e) => {
                  if (movedRef.current) e.preventDefault();
                }}
                // onClick={() => {
                //   if (!movedRef.current) window.open(c.link, "_blank");
                // }}
              >
                <div>{c.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
