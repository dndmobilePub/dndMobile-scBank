"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Icon } from "@/app/scBank-components/component/ui/icon";
import { ScBtnGroup, ScButton, ScBox, ScVFlex } from "./index";
import ScText from "./scText";


/* ─────────────────────────────
 * 내부: controllable state 훅
 * ───────────────────────────── */

function useControllableState(options: {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (next: boolean) => void;
}) {
  const { value, defaultValue = false, onChange } = options;
  const [internal, setInternal] = React.useState(defaultValue);

  const isControlled = value !== undefined;
  const state = isControlled ? value! : internal;

  const setState = React.useCallback(
    (next: boolean | ((prev: boolean) => boolean)) => {
      const resolved = typeof next === "function" ? (next as any)(state) : next;
      if (!isControlled) {
        setInternal(resolved);
      }
      onChange?.(resolved);
    },
    [isControlled, state, onChange]
  );

  return [state, setState] as const;
}

/* ─────────────────────────────
 * ScBottomSheet Props
 * ───────────────────────────── */

export interface ScBottomSheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  trigger?: React.ReactElement<any>;

  title?: React.ReactNode;
  isTitle?: boolean;
  description?: React.ReactNode;

  children?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;

  disableOverlayClose?: boolean;
  disableEscClose?: boolean;

  /** 닫힐 때 콜백 (ESC/오버레이/닫기 버튼 모두 공통 호출) */
  onClose?: () => void;

  className?: string;
  isBtnDown?: boolean;
}

/* ─────────────────────────────
 * ScBottomSheet
 * ───────────────────────────── */

export const ScBottomSheet: React.FC<ScBottomSheetProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  trigger,
  title,
  isTitle = true,
  description,
  children,
  footer = null,
  content,
  disableOverlayClose,
  disableEscClose,
  onClose,
  isBtnDown = true,
  className,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  /** 공통 닫기 함수 */
  const closeBottomSheet = React.useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [setIsOpen, onClose]);



  // ESC로 닫기
  React.useEffect(() => {
    if (!isOpen || disableEscClose) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBottomSheet();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, disableEscClose, closeBottomSheet]);

  // 🔒 바텀시트 오픈 시 body 스크롤 잠그기
  React.useEffect(() => {
    if (!isMounted) return;
    if (typeof document === "undefined") return;

    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen, isMounted]);

  if (!isMounted) return null;

  const handleOverlayClick = () => {
    if (disableOverlayClose) return;
    closeBottomSheet();
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    trigger?.props?.onClick?.(e);
    setIsOpen(true);
  };

  // footer 비어있는지 체크
  function isFooterEmpty(footer: React.ReactNode) {
    if (footer === null || footer === undefined) return true;
    if (typeof footer === "boolean") return true;         // true/false 는 렌더 안 됨
    if (typeof footer === "string" && footer.trim() === "") return true;
    if (Array.isArray(footer) && footer.length === 0) return true;
    return false;
  }
  const emptyFooter = isFooterEmpty(footer);

  const sheet = (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end pointer-events-none">
      {/* Overlay - 은은한 페이드 인/아웃 */}
      <button
        type="button"
        aria-hidden="true"
        onClick={handleOverlayClick}
        className={cn(
          "absolute inset-0 bg-black/40 transition-all duration-200 ease-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Bottom Sheet Panel - 아래에서 위로 슬라이드 인/아웃 */}
      <ScBox
        as="section"
        aria-modal="true"
        role="dialog"
        className={cn(
          "relative sc-bg-basic-01 rounded-tl-4xl rounded-tr-4xl shadow-lg bg-white",
          "w-full max-h-[80vh]",
          "flex flex-col",
          "transform transition-all duration-200 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full",
          "pointer-events-auto",
          className
        )}
      >
        {/* Header */}
        {isTitle !== false && (
          <ScVFlex gY={8} px={24} className="border-b border-b-sc-neutral-300">
            {(title || description) && (
              <ScBox
                g={8}
                py={16.5}
                pl={isBtnDown ? 32 : undefined}
                className={cn(
                  "grid items-center",
                  isBtnDown && "grid-cols-[1fr_24px]"
                )}
              >
                {title && (
                  <ScText
                    as='h2'
                    className="text-base font-semibold text-center truncate"
                    value={title}
                  />                    
                )}
                {description && (
                  <ScText as='p' className="hidden text-sm sc-text-basic-03" value={description} />
                )}
                {isBtnDown && (
                  <button
                    type="button"
                    onClick={closeBottomSheet}
                    className="rounded-full hover:bg-(--color-sc-neutral-050) w-6"
                    aria-label="닫기"
                  >
                    <Icon name="Close" size="lg" />
                  </button>
                )}
              </ScBox>
            )}
          </ScVFlex>
        )}

        {/* 내용 영역 */}
        <ScBox pt={32} px={15}
          className={cn(
            "flex-1",
              !emptyFooter ? "pb-24" : "pb-8"
          )}
        >
          <ScBox className="overflow-y-auto">{content}</ScBox>
        </ScBox>
        {children}

        {/* Footer 영역 */}
        {!emptyFooter && <>{footer}</>}
      </ScBox>
    </div>
  );

  return (
    <>
      {trigger
        ? React.cloneElement(trigger, {
            onClick: handleTriggerClick,
          })
        : null}
      {createPortal(sheet, document.body)}
    </>
  );
};
