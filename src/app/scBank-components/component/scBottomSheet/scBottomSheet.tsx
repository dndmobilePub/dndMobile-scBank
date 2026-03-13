"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Icon } from "@scBank/scIcon";
import { ControllableStateOptions } from "@scBank/types/common";
import { ScBottomSheetProps } from "@scBank/scBottomSheet";
import { ScText, ScBox, ScVFlex } from "@/app/scBank-components/component";

/* ─────────────────────────────
 * 내부 헬퍼 함수
 * ───────────────────────────── */

/** 제어/비제어 상태를 통합 관리하는 훅 */
function useControllableState<T>({ value, defaultValue, onChange }: ControllableStateOptions<T>) {
  const [internal, setInternal] = React.useState<T>(defaultValue as T);
  const isControlled = value !== undefined;
  const state = isControlled ? (value as T) : internal;

  const setState = React.useCallback(
    (next: T | ((prev: T) => T)) => {
      const nextValue = typeof next === "function" ? (next as (prev: T) => T)(state) : next;

      if (!isControlled) {
        setInternal(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, state, onChange],
  );

  return [state, setState] as const;
}

/** Footer 렌더링 여부 체크 */
const isFooterEmpty = (footer: React.ReactNode) => {
  if (footer == null || typeof footer === "boolean") return true;
  if (typeof footer === "string" && footer.trim() === "") return true;
  if (Array.isArray(footer) && footer.length === 0) return true;
  return false;
};

/* ─────────────────────────────
 * ScBottomSheet 컴포넌트
 * ───────────────────────────── */

export const ScBottomSheet = React.forwardRef<HTMLDivElement, ScBottomSheetProps>((props, ref) => {
  const {
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
    topBorder = true,
    disableOverlayClose,
    disableEscClose,
    onClose,
    isBtnDown = true,
    className,
  } = props;

  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // 클라이언트 사이드 마운트 체크
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeBottomSheet = React.useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [setIsOpen, onClose]);

  // ESC 키 이벤트 핸들러
  React.useEffect(() => {
    if (!isOpen || disableEscClose) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBottomSheet();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, disableEscClose, closeBottomSheet]);

  // Body 스크롤 잠금
  React.useEffect(() => {
    if (!isMounted) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, isMounted]);

  if (!isMounted) return null;

  const handleOverlayClick = () => {
    if (!disableOverlayClose) closeBottomSheet();
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    trigger?.props?.onClick?.(e);
    setIsOpen(true);
  };

  const emptyFooter = isFooterEmpty(footer);

  const sheetContent = (
    <div className="fixed h-dvh w-dvw inset-0 z-100 flex flex-col justify-end pointer-events-none">
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={handleOverlayClick}
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-200 ease-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      />

      {/* Panel */}
      <ScBox
        ref={ref}
        as="section"
        aria-modal="true"
        role="dialog"
        className={cn(
          "relative sc-bg-basic-01 rounded-tl-4xl rounded-tr-4xl shadow-lg bg-white",
          "w-full max-h-[80vh] flex flex-col transition-transform duration-200 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full",
          "pointer-events-auto",
          className,
        )}
      >
        {/* Header */}
        {isTitle && (title || description) && (
          <ScVFlex gY={8} px={24} className={topBorder ? "border-b border-b-sc-neutral-300" : ""}>
            <ScBox
              g={8}
              py={16.5}
              pl={isBtnDown ? 32 : undefined}
              className={cn("grid items-center", isBtnDown && "grid-cols-[1fr_24px]")}
            >
              {title && <ScText as="h2" className="text-base font-semibold text-center truncate" value={title} />}
              {description && <ScText as="p" className="hidden text-sm sc-text-basic-03" value={description} />}
              {isBtnDown && (
                <button
                  type="button"
                  onClick={closeBottomSheet}
                  className="rounded-full hover:bg-sc-neutral-50 w-6 h-6 flex items-center justify-center"
                  aria-label="닫기"
                >
                  <Icon name="Close" size="lg" />
                </button>
              )}
            </ScBox>
          </ScVFlex>
        )}

        {/* Content */}
        <ScBox pt={32} px={15} className={cn("flex-1 overflow-hidden flex flex-col", !emptyFooter ? "pb-24" : "pb-8")}>
          <div className="overflow-y-auto">{content}</div>
          {children}
        </ScBox>

        {/* Footer */}
        {!emptyFooter && <div className="mt-auto">{footer}</div>}
      </ScBox>
    </div>
  );

  return (
    <>
      {trigger && React.cloneElement(trigger, { onClick: handleTriggerClick })}
      {createPortal(sheetContent, document.body)}
    </>
  );
});

ScBottomSheet.displayName = "ScBottomSheet";
