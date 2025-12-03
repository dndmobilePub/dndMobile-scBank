"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/index";
import { cn } from "@/lib/utils";

/* ─────────────────────────────
 * 공통 타입
 * ───────────────────────────── */
/** 디자인 타입 */
type ScTabsVariant = "chip" | "segment";

/* ─────────────────────────────
 * ScTabs
 * ───────────────────────────── */

export interface ScTabsProps extends TabsPrimitive.TabsProps {
  /** 디자인 타입 */
  variant?: ScTabsVariant;
  /** 탭 이름 prefix 등으로 쓰고 싶으면 확장 가능 */
  TabName?: string;
}

export const ScTabs: React.FC<ScTabsProps> = ({ className, variant, ...restProps }) => {
  const variantClass = variant === "chip" ? "" : variant === "segment" ? "" : "";

  return <Tabs {...restProps} className={cn("gap-0", variantClass, className)} />;
};

/* ─────────────────────────────
 * ScTabsList
 * ───────────────────────────── */

export interface ScTabsListProps extends TabsPrimitive.TabsListProps {
  variant?: ScTabsVariant;
}

export const ScTabsList: React.FC<ScTabsListProps> = ({ className, variant, ...restProps }) => {
  const variantClass = variant === "chip" ? "bg-(--color-sc-neutral-100) p-1 rounded-xl" : "";

  return (
    <TabsList
      {...restProps}
      className={cn(
        // 기본 스타일 최대한 초기화
        "flex p-0 m-0 h-auto bg-transparent border-none shadow-none rounded-none",
        "gap-0",
        variantClass,
        className
      )}
    />
  );
};

/* ─────────────────────────────
 * ScTabsTrigger
 * ───────────────────────────── */

export interface ScTabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
  /** 탭 라벨  */
  TabName?: string;
  /** chip / segment 등 스타일 타입 */
  variant?: ScTabsVariant;
  /** 뱃지처럼 갯수 표시하고 싶을 때 */
  count?: number;
}

export const ScTabsTrigger: React.FC<ScTabsTriggerProps> = ({
  TabName,
  variant = "segment",
  count,
  className,
  children,
  ...restProps
}) => {
  const variantClass =
    variant === "chip" ? "rounded-full px-3 py-1" : variant === "segment" ? "flex-1 px-4 py-2" : "px-4 py-2";

  return (
    <TabsTrigger {...restProps} className={cn("text-sm data-[state=active]:font-semibold", variantClass, className)}>
      <span>{TabName ?? children}</span>
      {typeof count === "number" && <span className="ml-1 text-xs opacity-70">{count}</span>}
    </TabsTrigger>
  );
};

/* ─────────────────────────────
 * ScTab (데모용 컴포넌트)
 * ───────────────────────────── */

export interface ScTabProps {
  TabName?: string; // 탭 값 prefix
  variant?: ScTabsVariant | string; // 외부에선 string도 받을 수 있게
}

export const ScTab: React.FC<ScTabProps> = ({ TabName = "tab", variant = "segment" }) => {
  const items = [1, 2, 3, 4, 5];

  // 🔽 string으로 들어와도 "chip" | "segment" 인 경우만 유효하게 사용
  const normalizedType: ScTabsVariant | undefined = variant === "chip" || variant === "segment" ? variant : undefined;

  return (
    <ScTabs defaultValue={`${TabName}_0`} variant={normalizedType}>
      <ScTabsList variant={normalizedType}>
        {items.map((item, idx) => (
          <ScTabsTrigger
            key={`${item}_${idx}`}
            value={`${TabName}_${idx}`} // ★ Trigger value
            variant={normalizedType}
          >
            {item}
          </ScTabsTrigger>
        ))}
      </ScTabsList>

      {/* Trigger value와 동일한 값으로 Content 생성 */}
      {items.map((item, idx) => (
        <TabsContent
          key={`content_${idx}`}
          value={`${TabName}_${idx}`} // ★ 위 Trigger value와 반드시 매칭
          className="mt-4"
        >
          {TabName} {idx} 내용 (item: {item})
        </TabsContent>
      ))}
    </ScTabs>
  );
};
