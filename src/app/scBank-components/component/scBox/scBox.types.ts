import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps, DynamicSizeProps } from "@/lib/variants";
import { scBoxVariants } from "@/app/scBank-components/component/scBox";

export interface ScBoxProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scBoxVariants>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps,
    DynamicSizeProps {
  /** Radix UI의 Slot을 사용할지 여부 */
  asChild?: boolean;
  /** 렌더링할 HTML 태그 또는 컴포넌트 */
  as?: keyof React.JSX.IntrinsicElements | React.ElementType;
}

/** Flex 전용 Props (variant를 생략한 버전) */
export type ScFlexProps = Omit<ScBoxProps, "variant">;
