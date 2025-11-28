import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const fontStyleMap = {
  "h1":   "text-[2rem] leading-[1.4] tracking-[-0.3] font-bold",
  "h2":   "text-3xl leading-[1.4] tracking-[-0.3] font-bold",
  "h3-b": "text-2xl leading-[1.4] tracking-[-0.3] font-bold",
  "h3-m": "text-2xl leading-[1.4] tracking-[-0.3] font-medium",
  "h4-b": "text-xl leading-[1.4] tracking-[-0.3] font-bold",
  "h4-m": "text-xl leading-[1.4] tracking-[-0.3] font-medium",
  "h4":   "text-xl leading-[1.4] tracking-[-0.3] font-normal",
  "h5-b": "text-lg leading-[1.4] tracking-[-0.3] font-bold",
  "h5-m": "text-lg leading-[1.4] tracking-[-0.3] font-medium",
  "h5":   "text-lg leading-[1.4] tracking-[-0.3] font-normal",
  "lg-b": "text-base leading-[1.4] tracking-[-0.3] font-bold",
  "lg-m": "text-base leading-[1.4] tracking-[-0.3] font-medium",
  "lg":   "text-base leading-[1.4] tracking-[-0.3] font-normal",
  "md-b": "text-sm leading-[1.4] tracking-[-0.3] font-bold",
  "md-m": "text-sm leading-[1.4] tracking-[-0.3] font-medium",
  "md":   "text-sm leading-[1.4] tracking-[-0.3] font-normal",
  "sm-b": "text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-bold",
  "sm-m": "text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-medium",
  "sm":   "text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-normal",
} as const;

type FontStyleKey = keyof typeof fontStyleMap;

export interface ScTextProps extends React.HTMLAttributes<HTMLElement> {
  /** 태그 + 스타일 토큰 (예: "h3-b", "md", "span") */
  as?: string | React.ElementType;
  /** 순수 스타일 토큰만 지정하고 싶을 때 (예: "h3-b") */
  fontStyle?: FontStyleKey;
  /** 값-only 사용 시 */
  value?: React.ReactNode;
  /** Slot 사용 여부 */
  asChild?: boolean;
  /** weight는 현재 스타일 토큰에 포함되어 있어서 별도 사용 안 함 */
  weight?: "bold" | "md" | "sm";
}

const ScText = ({
  as = "span",
  fontStyle,
  className,
  asChild,
  value,
  children,
  style,
  ...rest
}: ScTextProps) => {
  // 태그 결정: "h3-b" → "h3"
  const baseTag =
    typeof as === "string"
      ? as.split("-")[0] || "span"
      : as || "span";

  const Comp: any = asChild ? Slot : baseTag;

  // 스타일 키 결정: fontStyle 우선, 없으면 fontType 문자열 그대로 사용 시도
  const candidateKey: FontStyleKey =
    (fontStyle ??
      (typeof as === "string" ? (as as FontStyleKey) : undefined) ??
      "md") as FontStyleKey;

  const sizeClassName = fontStyleMap[candidateKey] ?? fontStyleMap["md"];

  return (
    <Comp
      className={cn(sizeClassName, className)}
      style={style}
      {...rest}
    >
      {value}
      {children}
    </Comp>
  );
};

export default ScText;
