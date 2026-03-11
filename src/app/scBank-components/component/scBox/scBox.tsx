"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

import {
  splitSpacingProps,
  splitBorderProps,
  splitRadiusProps,
  splitSizeProps,
  buildDynamicSpacingStyle,
  buildDynamicBorderStyle,
  buildDynamicRadiusStyle,
  buildDynamicSizeStyle,
} from "@/lib/variants";
import { ScBoxProps, ScFlexProps, scBoxVariants } from "@scBank/scBox";

export const ScBox = React.forwardRef<HTMLDivElement, ScBoxProps>((props, ref) => {
  // 1. Dynamic Props들을 계층적으로 분리
  const { spacing, rest: r1 } = splitSpacingProps(props);
  const { border, rest: r2 } = splitBorderProps(r1);
  const { radius, rest: r3 } = splitRadiusProps(r2);
  const { size, rest } = splitSizeProps(r3);

  const { className, asChild, as, style, variant, ...cvaProps } = rest;

  // 2. 다형성(Polymorphic) 태그 결정
  const Tag = as ?? "div";
  const Comp = asChild ? Slot : Tag;

  // 3. 인라인 스타일 객체 생성
  const combinedStyles = {
    ...buildDynamicSpacingStyle(spacing),
    ...buildDynamicBorderStyle(border),
    ...buildDynamicRadiusStyle(radius),
    ...buildDynamicSizeStyle(size),
    ...style,
  };

  return (
    <Comp
      ref={ref}
      {...cvaProps}
      style={combinedStyles}
      className={cn(
        scBoxVariants({
          variant,
          ...(cvaProps as VariantProps<typeof scBoxVariants>), // any 대신 정확한 Variant 타입 주입
        }),
        className,
      )}
    />
  );
});

ScBox.displayName = "ScBox";

/* ─────────────────────────────
 * 유틸리티 컴포넌트: ScVFlex, ScHFlex
 * ───────────────────────────── */

export const ScVFlex = React.forwardRef<HTMLDivElement, ScFlexProps>((props, ref) => (
  <ScBox ref={ref} variant="VFlex" {...props} />
));
ScVFlex.displayName = "ScVFlex";

export const ScHFlex = React.forwardRef<HTMLDivElement, ScFlexProps>((props, ref) => (
  <ScBox ref={ref} variant="HFlex" {...props} />
));
ScHFlex.displayName = "ScHFlex";
