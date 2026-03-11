import * as React from "react";

import {
  DynamicSpacingProps,
  DynamicBorderProps,
  DynamicRadiusProps,
  DynamicSizeProps,
  FontStyleKey,
} from "@/lib/variants";

export interface ScTextProps
  extends
    React.HTMLAttributes<HTMLElement>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps,
    DynamicSizeProps {
  /** 렌더링 태그 (예: "p", "h3-b", 기본 "span") */
  as?: keyof React.JSX.IntrinsicElements | React.ElementType;
  /** 순수 스타일 토큰 (예: "h3-b") */
  fontStyle?: FontStyleKey;
  /** 값-only 사용 시 */
  value?: React.ReactNode;
  /** Slot 사용 여부 */
  asChild?: boolean;
  /** weight는 현재 스타일 토큰에 포함되어 있어서 별도 사용 안 함 */
  weight?: "bold" | "md" | "sm";
  /** a 태그일 때 href로 매핑될 링크 */
  link?: string;
}
