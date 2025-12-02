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
import { ScBox, ScHFlex, ScVFlex } from "./scBox";
import { Icon } from "./icon";

// List 공통 props
type ScListBaseProps<TElement = HTMLElement> =
  React.HTMLAttributes<TElement> &
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
  }

/* ─────────────────────────────
 * ScList
 * ───────────────────────────── */

export interface ScListProps extends ScListBaseProps<HTMLElement>{
  /** 렌더링 태그 (기본: "ul") */
  as?: string | React.ElementType;  
  /** 리스트 타입: 숫자 / 점 / 없음 */
  type?: "num" | "dot" | "none";
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

        // ScListItem에 공통 props(index, listType, fontStyle) 주입
        return React.cloneElement(
          child as React.ReactElement<Partial<ScListItemProps>>,
          {
            index: index + 1,
            listType: childProps.listType ?? type,
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

  // 폰트 스타일 클래스 (ScText와 동일한 맵 공유)
  const candidateKey: FontStyleKey = (fontStyle ?? "md") as FontStyleKey;
  const fontClassName = fontStyleMap[candidateKey] ?? fontStyleMap["md"];

  // prefix (번호 또는 점)
  let marker: React.ReactNode = null;
  if (listType === "num" && index != null) {
    marker = (
      <ScText className={cn("sc-text-basic-05", fontClassName)} value={index} />
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
      {leftIcon && (
        <ScText className={cn("shrink-0", fontClassName)} value={leftIcon} />
      )}

      {/* 본문 영역 */}
      {children}

      {/* 오른쪽 아이콘 */}
      {rightIcon && (
        <ScText className={cn("shrink-0", fontClassName)} value={rightIcon} />
      )}
    </Comp>
  );
};

/* ─────────────────────────────
 * ScDetailList
 * ───────────────────────────── */

export interface DetailItem {
  title: string;
  contentText: string;
  bankNum: string;
}

export interface ScDetailListProps extends ScListBaseProps<HTMLElement>{
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

export const ScDetailList = (rawProps: ScDetailListProps) => {
  const {
    as = "ul",
    dataList,
    divided,
    className,
    style,
    leftIcon,
    rightIcon,
    alignLeft = false,
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
        "flex flex-col gap-3",
        divided &&
          "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)",
        className
      )}
    >
      {dataList?.map((item, idx) => (
        <ScListItem key={idx}>
          {/* 왼쪽 아이콘 */}
          {leftIcon && <>{leftIcon}</>}

          <ScBox g={20} className="grid grid-cols-[100px_1fr] w-full">
            <ScText fontStyle="md" className="sc-text-basic-04">
              {item.title}
            </ScText>
            <ScText
              fontStyle="md"
              className={cn(
                alignLeft ? "text-left" : "text-right",
                "sc-text-basic-02"
              )}
            >
              {item.contentText}
              <br />
              {item.bankNum}
            </ScText>
          </ScBox>

          {/* 오른쪽 아이콘 */}
          {rightIcon && <>{rightIcon}</>}
        </ScListItem>
      ))}
    </ScList>
  );
};

/* ─────────────────────────────
 * ScListTitle
 * ───────────────────────────── */

export interface ScListTitleProps
  extends ScListBaseProps<HTMLDivElement> {
  title: string;
  link?: string;
}

export const ScListTitle = (rawProps: ScListTitleProps) => {
  const { title, className, link, ...rest } = rawProps;

  return (
    <ScHFlex
      {...rest}
      className={cn("justify-between items-center", className)}
    >
      <ScText fontStyle="h4-b" className="sc-text-primary-03">
        {title}
      </ScText>

      <ScText as="a" link={link}>
        <Icon name="Edit" size="lg" className="sc-text-basic-02" />
      </ScText>
    </ScHFlex>
  );
};

/* ─────────────────────────────
 * ScReviewList
 * ───────────────────────────── */
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

export const ScReviewList = (rawProps: ScReviewListProps) => {
  const { title, className, list, divided, split = false, link, ...rest } =
    rawProps;

  return (
    <ScVFlex g={16} {...rest}>
      <ScListTitle title={title} link={link} />
      <ScVFlex
        as="ul"
        className={cn(
          "grid gap-y-4",
          split && "grid-cols-[1fr_1fr] gap-x-4", 
          divided &&
          "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)",
          className
        )}
      >
        {list?.map((item, idx) => (
          <ScListItem key={idx}>
            <ScVFlex g={4} className="w-full">
              <ScText as="p" fontStyle="md" className="sc-text-basic-04">
                {item.label}
              </ScText>
              <ScText as="p" fontStyle="h5" className="sc-text-basic-03">
                {item.detailTxt}
              </ScText>
            </ScVFlex>
          </ScListItem>
        ))}
      </ScVFlex>
    </ScVFlex>
  );
};

/* ─────────────────────────────
 * ScItemlist
 * ───────────────────────────── */
export interface ItemListType {
  type?: 'detail' | 'link' | 'linkTxt'  ;
}

export interface ScItemlistTitleProps
  extends ScListBaseProps<HTMLDivElement>{
  title?: string;
  subTxt?: string;
  content?: string;
  link?: string;
  type?: ItemListType | string; 
  leftIcon?: boolean;
}

export const ScItemlist = (rawProps: ScItemlistTitleProps) => {
  const {className, title, subTxt, content, link, divided, leftIcon, type='link', ...rest } =
    rawProps;

  return (
    <ScHFlex as='li' className={cn(className, 
      type === 'detail' && "mx-5"

    )}>
      <ScText
        as='a' g={ leftIcon === true ? 16 : 8} {...rest}
        className={cn(
          "grid justify-between w-full items-center pt-4 pb-4",
          type === 'detail' ?  'grid-cols-2' : leftIcon === true ? 'grid-cols-[32px_1fr_24px]' : 'grid-cols-[1fr_24px] pl-5 pr-4',
          className
        )}
        link={link}
      >
        {leftIcon && <Icon name="Transfer" size='xl' />}
        <ScVFlex g={4}>
          <ScText fontStyle={link ? 'lg-m' : 'lg'} className={cn( "leading-6" ,type === 'detail' ? 'sc-text-basic-04' : 'sc-text-basic-02')}>
            {title}
          </ScText>
          {type === 'linkTxt' &&  <ScText fontStyle="md" className="sc-text-basic-04">{subTxt}</ScText>}
        </ScVFlex>
        {
          type === 'detail' ?
            <ScText className={cn("text-right sc-text-basic-02")}>
              {content}
            </ScText>
          : <ScText >
              <Icon name="ArronRight" size="lg" className={cn(leftIcon ? 'text-[#1F8845]' : '"sc-text-basic-02"')} />
            </ScText>
        }
      </ScText>
    </ScHFlex>
  );
};

/* ─────────────────────────────
 * ScListType
 * ───────────────────────────── */
export interface ItemList {
  link?: string | undefined;
  label?: string;
  subTxt?: string;
  detailTxt?: string;
}
export interface ScItemlistProps extends ScItemlistTitleProps {
  list?: ItemList[];
  type?: string | ItemListType ;
}

export const ScListType = (rawProps: ScItemlistProps) => {
  const { className, title, content, list, link , divided = true, type = 'link', ...rest } =
    rawProps;

  return (
    <ScVFlex as='ul' mt={4} {...rest} className={cn(divided &&
          "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)")}>
      {list?.map((item, idx) => (
        <ScItemlist
          key={idx}
          type={type}
          title={item.label}
          subTxt={item.subTxt}
          content={item.detailTxt}
          link={item.link}
          divided={divided}
        />  
      ))}
      
    </ScVFlex>
  );
};

/* ─────────────────────────────
 * ScLinkListIcon
 * ───────────────────────────── */

export const ScLinkListIcon = (rawProps: ScItemlistProps) => {
  const { className, title, content, list, link , divided = true, type = 'linkTxt', ...rest } =
    rawProps;

  return (
    <ScVFlex as='ul' mt={4} {...rest} className={cn(
      "[&>*:first-child>*]:pt-0!",
      divided && "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)")}
    >
      {list?.map((item, idx) => (
        <ScItemlist
          py={20}
          key={idx}
          type={type}
          title={item.label}
          subTxt={item.subTxt}
          content={item.detailTxt}
          link={item.link}
          divided={divided}
          leftIcon={true}
        />  
      ))}
      
    </ScVFlex>
  );
};


/* ─────────────────────────────
 * ScListStep
 * ───────────────────────────── */

export interface ScSteplistTitleProps
  extends ScListBaseProps<HTMLDivElement>{
  label?: string;
  subTxt?: string;
  content?: string;
  link?: string;
  rightIcon?: boolean;
  num?: number;
}

export const ScStpeList = (rawProps: ScSteplistTitleProps) => {
  const {className, label, subTxt,  link, num, divided, rightIcon,  ...rest } =
    rawProps;

  return (
    <ScHFlex as='li' className={cn(className)}>
      <ScText
        as='div' g={16} {...rest}
        className={cn(
          "grid justify-between w-full",
          rightIcon === true ? 'grid-cols-[32px_1fr_24px]' : 'grid-cols-[32px_1fr_24px]',
          className
        )}
        link={link}
      >
        <ScBox w={24} h={24} m={4} className="bg-(--color-sc-green-100) relative rounded-4xl">
          <ScBox w={20} h={20} m={2} className="bg-white absolute rounded-4xl flex justify-center item-center">
            <ScText fontStyle="lg-m" className="sc-text-primary-02">{num}</ScText>
          </ScBox>
        </ScBox>
        <ScVFlex g={4} mt={4}>
          <ScText fontStyle="lg-m" className={cn( "leading-6 sc-text-primary-02")}>
            {label}
          </ScText>
          <ScText fontStyle="md" className={cn("text-left sc-text-basic-04")}>
            {subTxt}
          </ScText>
        </ScVFlex>
        {rightIcon && <Icon name="Transfer" size='xl' />}
      </ScText>
    </ScHFlex>
  );
};

export interface stepList {
  link?: string | undefined;
  label?: string;
  subTxt?: string;
}
export interface ScStepListProps extends ScItemlistTitleProps {
  list?: stepList[];
  rightIcon?: boolean;
}

export const ScListStpeType = (rawProps: ScStepListProps) => {
  const { className, title, content, list, rightIcon = false, link, divided = false,  ...rest } =
    rawProps;

  return (
    <ScVFlex as='ul' mt={4} g={16} {...rest} className={cn(divided &&
          "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)")}>
      {list?.map((item, idx) => (
        <ScStpeList
          key={idx}
          num={idx}
          label={item.label}
          subTxt={item.subTxt}
          link={item.link}
          divided={divided}
          rightIcon={rightIcon}
        />  
      ))}
      
    </ScVFlex>
  );
};


