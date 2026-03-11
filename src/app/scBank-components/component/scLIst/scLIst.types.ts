import * as React from "react";

import {
  DynamicSpacingProps,
  DynamicBorderProps,
  DynamicRadiusProps,
  DynamicSizeProps,
  FontStyleKey,
} from "@/lib/variants";

// 모든 동적 스타일 속성을 합친 인터페이스 정의
export interface DynamicStyleProps
  extends DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps, DynamicSizeProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  // 특정 태그(div, ul 등)에 국한되지 않고 모든 HTML 속성을 안전하게 허용
  [key: string]: unknown;
}

// List 공통 props
export type ScListBaseProps<TElement = HTMLElement> = React.HTMLAttributes<TElement> &
  DynamicSpacingProps &
  DynamicBorderProps &
  DynamicRadiusProps &
  DynamicSizeProps & {
    /** 아이템 사이 구분선 */
    divided?: boolean;
    /** Slot 사용 여부 */
    asChild?: boolean;
    /** 텍스트 스타일 토큰 (공통 맵 사용) */
    fontStyle?: FontStyleKey;
  };

export interface ScListProps extends ScListBaseProps<HTMLElement> {
  /** 렌더링 태그 (기본: "ul") */
  as?: string | React.ElementType;
  /** 리스트 타입: 숫자 / 점 / 없음 */
  type?: "num" | "dot" | "none";
}

export interface ScListItemProps
  extends
    React.HTMLAttributes<HTMLLIElement>,
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
  // dot 색상
  dotColor?: string;
}

export interface DetailItem {
  title: string;
  contentText: string;
  bankNum: string;
}

export interface ScDetailListProps extends ScListBaseProps<HTMLElement> {
  /** 렌더링 태그 (기본: "ul") */
  as?: string | React.ElementType;
  /** 왼쪽 아이콘 (체크, 경고 등) */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 (chevron 등) */
  rightIcon?: React.ReactNode;
  /** 데이터 리스트 */
  dataList?: DetailItem[];
  /** 오른쪽 텍스트 정렬 방향 (기본: right) */
  alignLeft?: boolean;
}

export interface ScListTitleProps extends ScListBaseProps<HTMLDivElement> {
  title: string;
  link?: string;
}

export interface ReviewList {
  label?: string;
  detailTxt?: string;
  subTxt?: string;
}
export interface ScReviewListProps extends ScListTitleProps {
  list?: ReviewList[];
  /** 2열 분할 여부 */
  split?: boolean;
}

export interface ItemListType {
  type?: "detail" | "link" | "linkTxt";
}

export interface ScItemlistTitleProps extends ScListBaseProps<HTMLDivElement> {
  title?: string;
  subTxt?: string;
  content?: string;
  link?: string;
  type?: ItemListType | string;
  leftIcon?: boolean;
}

export interface ItemList {
  link?: string | undefined;
  label?: string;
  subTxt?: string;
  detailTxt?: string;
}
export interface ScItemlistProps extends ScItemlistTitleProps {
  list?: ItemList[];
  type?: string | ItemListType;
}

export interface ScSteplistTitleProps extends ScListBaseProps<HTMLDivElement> {
  label?: string;
  subTxt?: string;
  content?: string;
  link?: string;
  rightIcon?: boolean;
  num?: number;
}

export interface stepList {
  link?: string | undefined;
  label?: string;
  subTxt?: string;
}
export interface ScStepListProps extends ScItemlistTitleProps {
  list?: stepList[];
  rightIcon?: boolean;
}
