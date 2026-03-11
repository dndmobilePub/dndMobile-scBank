import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export type ScTabsVariant = "primary" | "segment" | "tertiary";

export interface ScTabsProps extends TabsPrimitive.TabsProps {
  variant?: ScTabsVariant;
  /** 탭 이름 prefix 등으로 쓰고 싶으면 확장 가능 */
  TabName?: string;
}

export interface ScTabsListProps extends TabsPrimitive.TabsListProps {
  variant?: ScTabsVariant;
  cols?: number;
}

export interface ScTabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
  /** 탭 라벨  */
  TabName?: string;
  /** chip / segment 등 스타일 타입 */
  variant?: ScTabsVariant;
}

export interface ScTabsContentProps extends TabsPrimitive.TabsContentProps {
  /** chip / segment 등 스타일 타입 */
  variant?: ScTabsVariant;
}

export interface ScTabProps {
  variant?: ScTabsVariant | string;
  tabList?: React.ReactNode | undefined;
  tabListData?: Array<{ name: string; content: React.ReactNode | string }> | undefined;
  tabContent?: React.ReactNode | undefined;
}
