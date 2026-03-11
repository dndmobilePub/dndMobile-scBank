"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/index";
import { cn } from "@/lib/utils";
import { ScText } from "@scBank/index";
import {
  ScTabsVariant,
  ScTabsProps,
  ScTabsListProps,
  ScTabsTriggerProps,
  ScTabsContentProps,
  ScTabProps,
} from "@scBank/scTab";

/* ─────────────────────────────
 * ScTabs
 * ───────────────────────────── */

export const ScTabs: React.FC<ScTabsProps> = ({ className, ...restProps }) => {
  return <Tabs {...restProps} className={cn("gap-0 p-0", className)} />;
};

/* ─────────────────────────────
 * ScTabsList
 * ───────────────────────────── */

export const ScTabsList: React.FC<ScTabsListProps> = ({ className, cols, variant = "primary", ...restProps }) => {
  return (
    <TabsList
      {...restProps}
      className={cn(
        // 기본 스타일 최대한 초기화
        "flex p-0 m-0 h-auto bg-transparent border-none shadow-none rounded-none",
        "gap-4",
        variant === "segment" && `w-full sc-bg-background-02 p-1 gap-2 rounded-xl grid grid-cols-${cols}`,
        variant === "segment" && "gap-6",
        className,
      )}
    />
  );
};

/* ─────────────────────────────
 * ScTabsTrigger
 * ───────────────────────────── */

export const ScTabsTrigger: React.FC<ScTabsTriggerProps> = ({
  variant = "primary",
  className,
  children,
  ...restProps
}) => {
  return (
    <TabsTrigger
      {...restProps}
      className={cn(
        // 스타일 초기화
        "p-0 m-0 bg-transparent border-none shadow-none rounded-none h-8",
        "data-[state=active]:shadow-none",
        " sc-text-basic-04",
        variant === "primary" &&
          "data-[state=active]:sc-text-primary-03 data-[state=active]:sc-bg-extra-hover rounded-full data-[state=active]:px-4 data-[state=active]:border data-[state=active]:border-[(var(--color-sc-blue-700))] data-[state=active]:border-solid",
        variant === "segment" &&
          "h-9 rounded-xl px-3 py-2 data-[state=active]:shadow-[0px_2px_4px_0px_var(--Coloreffectshadowcast8)]",
        variant === "tertiary" && "",
        className,
      )}
    >
      <ScText fontStyle={variant === "primary" ? "lg" : "md"}>{children}</ScText>
    </TabsTrigger>
  );
};

export const ScTabsContent: React.FC<ScTabsContentProps> = ({ variant = "primary", className, ...restProps }) => {
  const variantClass =
    variant === "primary" ? "rounded-full px-3 py-1" : variant === "segment" ? "flex-1 px-4 py-2" : "px-4 py-2";

  return <TabsContent {...restProps} className={cn(variantClass, className)} />;
};

/* ─────────────────────────────
 * ScTab
 * ───────────────────────────── */

export const ScTab: React.FC<ScTabProps> = ({ variant = "primary", tabContent, tabList, tabListData }) => {
  // 🔽 string으로 들어와도 "chip" | "segment" 인 경우만 유효하게 사용
  const normalizedType: ScTabsVariant | undefined =
    variant === "primary" || variant === "segment" || variant === "tertiary" ? variant : undefined;

  return (
    <ScTabs defaultValue={`${tabListData && tabListData[0].name}`} variant={normalizedType}>
      {tabListData && (
        <>
          <ScTabsList variant={normalizedType} cols={tabListData.length}>
            {tabListData.map((item) => (
              <ScTabsTrigger key={item.name} value={item.name} variant={normalizedType}>
                {item.name}
              </ScTabsTrigger>
            ))}
          </ScTabsList>
          {tabListData?.map((item) => (
            <ScTabsContent
              key={item.name}
              value={item.name} // ★ 위 Trigger value와 반드시 매칭
              variant={normalizedType}
              className="mt-4"
            >
              {item.content}
            </ScTabsContent>
          ))}
        </>
      )}
      {tabList}
      {tabContent}
    </ScTabs>
  );
};
