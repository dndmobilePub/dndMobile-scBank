import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

import {
  DynamicSpacingProps,
  DynamicBorderProps,
  DynamicRadiusProps,
  DynamicSizeProps,
  splitSpacingProps,
  splitBorderProps,
  splitRadiusProps,
  splitSizeProps,
  buildDynamicSpacingStyle,
  buildDynamicBorderStyle,
  buildDynamicRadiusStyle,
  buildDynamicSizeStyle,
  fontStyleMap,
  FontStyleKey,
} from "@/lib/variants";

/* ─────────────────────────────
 * Props
 * ───────────────────────────── */

export interface ScTextProps
  extends React.HTMLAttributes<HTMLElement>,
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

/* ─────────────────────────────
 * 컴포넌트
 * ───────────────────────────── */

const ScText = (rawProps: ScTextProps) => {
  const { as = "span", fontStyle, className, asChild, value, children, style, link, ...restProps } = rawProps;

  // 1) spacing / border / radius / size props 분리
  const { spacing, rest: afterSpacing } = splitSpacingProps(restProps);
  const { border, rest: afterBorder } = splitBorderProps(afterSpacing);
  const { radius, rest: afterRadius } = splitRadiusProps(afterBorder);
  const { size, rest } = splitSizeProps(afterRadius);

  // 2) 스타일 객체 생성
  const spacingStyle = buildDynamicSpacingStyle(spacing);
  const borderStyle = buildDynamicBorderStyle(border);
  const radiusStyle = buildDynamicRadiusStyle(radius);
  const sizeStyle = buildDynamicSizeStyle(size);

  // 3) 태그 결정: as가 "h3-b" 같은 경우 → "h3"
  const baseTag = typeof as === "string" ? as.split("-")[0] || "span" : as || "span";

  // asChild가 true면 Slot, 아니면 baseTag를 쓰되, 최종 타입은 React.ElementType으로 고정
  const Comp = (asChild ? Slot : baseTag) as React.ElementType;

  // 4) 폰트 스타일 키 결정
  const candidateKey: FontStyleKey = (fontStyle ??
    (typeof as === "string" ? (as as FontStyleKey) : undefined) ??
    "md") as FontStyleKey;

  const fontClassName = fontStyleMap[candidateKey] ?? fontStyleMap["md"];

  // 5) a 태그일 때만 href 추가
  const linkProps = baseTag === "a" && link ? { href: link } : {};

  return (
    <Comp
      {...rest}
      {...linkProps}
      className={cn(fontClassName, className)}
      style={{
        ...spacingStyle,
        ...borderStyle,
        ...radiusStyle,
        ...sizeStyle,
        ...style,
      }}
    >
      {value}
      {children}
    </Comp>
  );
};

export default ScText;
