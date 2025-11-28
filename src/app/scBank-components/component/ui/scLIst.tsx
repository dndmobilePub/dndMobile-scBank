"use client";

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
import ScText from "./scText";
import { ScBox } from "./scBox";

/* ─────────────────────────────
 * ScList
 * ───────────────────────────── */

export interface ScListProps
  extends React.HTMLAttributes<HTMLElement>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps,
    DynamicSizeProps {
  /** 렌더링 태그 (기본: "ul") */
  as?: string | React.ElementType;
  /** 리스트 타입: 숫자 / 점 / 없음 */
  type?: "num" | "dot" | "none";
  /** 아이템 사이 구분선 */
  divided?: boolean;
  /** Slot 사용 여부 */
  asChild?: boolean;
  /** 텍스트 스타일 토큰 (공통 맵 사용) */
  fontStyle?: FontStyleKey;
}

export const ScList = (rawProps: ScListProps) => {
  const {
    as = "ul",
    type = "none",
    divided,
    asChild,
    className,
    style,
    children,
    fontStyle,
    ...restProps
  } = rawProps;

  const { spacing, rest: s1 } = splitSpacingProps(restProps);
  const { border, rest: s2 } = splitBorderProps(s1);
  const { radius, rest: s3 } = splitRadiusProps(s2);
  const { size, rest } = splitSizeProps(s3);

  const spacingStyle = buildDynamicSpacingStyle(spacing);
  const borderStyle = buildDynamicBorderStyle(border);
  const radiusStyle = buildDynamicRadiusStyle(radius);
  const sizeStyle = buildDynamicSizeStyle(size);

  const baseTag = typeof as === "string" ? as : "ul";
  const Comp: any = asChild ? Slot : baseTag;

  return (
    <Comp
      {...rest}
      className={cn(
        "flex flex-col",
        divided &&
          "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)",
        className
      )}
      style={{
        ...spacingStyle,
        ...borderStyle,
        ...radiusStyle,
        ...sizeStyle,
        ...style,
      }}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const childProps = child.props as Partial<ScListItemProps>;

        return React.cloneElement(
          child as React.ReactElement<Partial<ScListItemProps>>,
          {
            index: index + 1,
            listType: type,
            fontStyle: childProps.fontStyle ?? fontStyle,
          }
        );
      })}
    </Comp>
  );
};

/* ─────────────────────────────
 * ScListItem
 * ───────────────────────────── */

export interface ScListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps,
    DynamicSizeProps {
  /** 렌더링 태그 (기본: "li") */
  as?: string | React.ElementType;
  /** ScList 쪽에서 주입되는 index (1부터 시작) */
  index?: number;
  /** ScList 쪽에서 주입되는 타입: num / dot / none */
  listType?: "num" | "dot" | "none";
  /** 왼쪽 아이콘 (체크, 경고 등) */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 (chevron 등) */
  rightIcon?: React.ReactNode;
  /** Slot 사용 여부 */
  asChild?: boolean;
  /** 텍스트 스타일 토큰 */
  fontStyle?: FontStyleKey;
}

export const ScListItem = (rawProps: ScListItemProps) => {
  const {
    as = "li",
    index,
    listType = "none",
    leftIcon,
    rightIcon,
    asChild,
    className,
    style,
    children,
    fontStyle,
    ...restProps
  } = rawProps;

  const { spacing, rest: s1 } = splitSpacingProps(restProps);
  const { border, rest: s2 } = splitBorderProps(s1);
  const { radius, rest: s3 } = splitRadiusProps(s2);
  const { size, rest } = splitSizeProps(s3);

  const spacingStyle = buildDynamicSpacingStyle(spacing);
  const borderStyle = buildDynamicBorderStyle(border);
  const radiusStyle = buildDynamicRadiusStyle(radius);
  const sizeStyle = buildDynamicSizeStyle(size);

  const baseTag = typeof as === "string" ? as : "li";
  const Comp: any = asChild ? Slot : baseTag;

  // 🔤 폰트 스타일 클래스 (ScText와 동일한 맵 공유)
  const candidateKey: FontStyleKey = (fontStyle ?? "md") as FontStyleKey;
  const fontClassName = fontStyleMap[candidateKey] ?? fontStyleMap["md"];

  // prefix (번호 또는 점)
  let marker: React.ReactNode = null;

  if (listType === "num" && index != null) {
    marker = (
      <ScText
        className={cn('sc-text-basic-05',fontClassName)} 
        value={index}
      />
    );
  } else if (listType === "dot") {
    marker = (
      <ScBox
        mt={9}
        className="w-[3px] h-[3px] bg-(--color-sc-neutral-400) rounded-[3px]"
      />
    );
  }

  return (
    <Comp
      {...rest}
      className={cn(
        "flex items-start gap-2 py-3 px-2 rounded-lg transition-colors select-none",
        fontClassName,
        className
      )}
      style={{
        ...spacingStyle,
        ...borderStyle,
        ...radiusStyle,
        ...sizeStyle,
        ...style,
      }}
    >
      {/* 리스트 마커 (번호/점) */}
      {listType !== "none" && marker}

      {/* 왼쪽 아이콘 */}
      {leftIcon && <ScText className={cn("shrink-0", fontClassName)} value={leftIcon} />}

      {/* 본문 영역 */}
      {children}

      {/* 오른쪽 아이콘 */}
      {rightIcon && <ScText className={cn("shrink-0", fontClassName)} value={rightIcon} />}
    </Comp>
  );
};


/* ─────────────────────────────
 * ScDetailList
 * ───────────────────────────── */

export interface ScDetailListProps
  extends React.HTMLAttributes<HTMLLIElement>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps,
    DynamicSizeProps {
  /** 렌더링 태그 (기본: "li") */
  as?: string | React.ElementType;
  /** ScList 쪽에서 주입되는 index (1부터 시작) */
  index?: number;
  /** 왼쪽 아이콘 (체크, 경고 등) */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 (chevron 등) */
  rightIcon?: React.ReactNode;
  /** Slot 사용 여부 */
  asChild?: boolean;
  /** 텍스트 스타일 토큰 */
  fontStyle?: FontStyleKey;
  /** 아이템 사이 구분선 */
  divided?: boolean;
}

export const ScDetailList = (rawProps: ScDetailListProps) => {
  const {
    as = "ul",
    divided,
    asChild,
    className,
    style,
    children,
    fontStyle,
    ...restProps
  } = rawProps;

  const { spacing, rest: s1 } = splitSpacingProps(restProps);
  const { border, rest: s2 } = splitBorderProps(s1);
  const { radius, rest: s3 } = splitRadiusProps(s2);
  const { size, rest } = splitSizeProps(s3);

  const spacingStyle = buildDynamicSpacingStyle(spacing);
  const borderStyle = buildDynamicBorderStyle(border);
  const radiusStyle = buildDynamicRadiusStyle(radius);
  const sizeStyle = buildDynamicSizeStyle(size);

  return (
    <ScList
      as={as}
      {...rest}
      style={{
        ...spacingStyle,
        ...borderStyle,
        ...radiusStyle,
        ...sizeStyle,
        ...style,
      }}
      className={cn(
        "flex flex-col",
        divided &&
          "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)",
        className
      )}
    >
      <ScListItem className={cn("grid grid-cols-[100px_1fr]")}>
        <ScText>타이틀</ScText>
        <ScText className="text-right">내용 <br/> 000-0-000000</ScText>
      </ScListItem>
    </ScList>
  );
};