"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import {
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

import { ScText, ScBox, ScHFlex, ScVFlex, Icon } from "@scBank/index";
import {
  ScListProps,
  ScListItemProps,
  ScDetailListProps,
  ScListTitleProps,
  ScReviewListProps,
  ScItemlistTitleProps,
  ScItemlistProps,
  ScSteplistTitleProps,
  ScStepListProps,
  DynamicStyleProps,
} from "@scBank/scLIst";

/* ─────────────────────────────
 * 공통 스타일 추출 헬퍼
 * ───────────────────────────── */
const useDynamicStyles = (props: DynamicStyleProps) => {
  // 1. 각 유틸리티 함수로 속성 분류
  const { spacing, rest: s1 } = splitSpacingProps(props);
  const { border, rest: s2 } = splitBorderProps(s1);
  const { radius, rest: s3 } = splitRadiusProps(s2);
  const { size, rest } = splitSizeProps(s3);

  // 2. 분류된 속성들을 실제 CSS 객체로 변환하여 병합
  const styles: React.CSSProperties = {
    ...buildDynamicSpacingStyle(spacing),
    ...buildDynamicBorderStyle(border),
    ...buildDynamicRadiusStyle(radius),
    ...buildDynamicSizeStyle(size),
    ...props.style,
  };

  return {
    styles,
    restProps: rest, // 스타일을 제외한 나머지 Props (as, children, id 등)
  };
};

/* ─────────────────────────────
 * 1. ScList & ScListItem (기본)
 * ───────────────────────────── */

export const ScList = ({
  as = "ul",
  type = "none",
  divided,
  asChild,
  className,
  children,
  fontStyle,
  ...props
}: ScListProps) => {
  const { styles, restProps } = useDynamicStyles(props);
  const Comp = (asChild ? Slot : as) as React.ElementType;

  return (
    <Comp
      {...restProps}
      className={cn(
        "flex flex-col",
        divided && "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-(--color-sc-neutral-200)",
        className,
      )}
      style={styles}
    >
      {React.Children.map(children, (child, index) => {
        // 1. 유효한 엘리먼트인지 먼저 확인
        if (!React.isValidElement(child)) return child;

        // 2. cloneElement에 <ScListItemProps>를 명시하여 index, listType 등을 허용하게 함
        return React.cloneElement(child as React.ReactElement<ScListItemProps>, {
          index: index + 1,
          listType: (child.props as ScListItemProps).listType ?? type,
          fontStyle: (child.props as ScListItemProps).fontStyle ?? fontStyle,
        });
      })}
    </Comp>
  );
};

export const ScListItem = ({
  as = "li",
  index, // 👈 추출 (DOM 전달 방지)
  listType = "none", // 👈 추출 (DOM 전달 방지)
  leftIcon,
  rightIcon,
  asChild,
  className,
  children,
  fontStyle = "md",
  dotColor,
  ...restProps
}: ScListItemProps) => {
  const { styles, restProps: finalRestProps } = useDynamicStyles(restProps);
  const Comp = (asChild ? Slot : as) as React.ElementType;
  const fontClassName = fontStyleMap[fontStyle as FontStyleKey] ?? fontStyleMap["md"];

  let marker: React.ReactNode = null;
  if (listType === "num" && index != null) {
    marker = <ScText className={cn("sc-text-basic-05", fontClassName)} value={index} />;
  } else if (listType === "dot") {
    marker = (
      <ScBox
        mt={9}
        className="w-[3px] h-[3px] rounded-full"
        style={{ backgroundColor: dotColor ? `var(${dotColor})` : "var(--color-sc-neutral-400)" }}
      />
    );
  }

  return (
    <Comp
      {...finalRestProps} // 👈 순수한 HTML 속성만 전달됨
      className={cn(
        "flex items-start gap-2 py-3 px-2 rounded-lg transition-colors select-none",
        fontClassName,
        className,
      )}
      style={styles}
    >
      {listType !== "none" && marker}
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <div className="flex-1">{children}</div>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </Comp>
  );
};

/* ─────────────────────────────
 * 2. ScDetailList & ScListTitle
 * ───────────────────────────── */

export const ScDetailList = ({
  dataList,
  divided,
  className,
  leftIcon,
  rightIcon,
  alignLeft = false,
  ...props
}: ScDetailListProps) => (
  <ScList {...props} divided={divided} className={cn("gap-3", className)}>
    {dataList?.map((item, idx) => (
      <ScListItem key={idx} leftIcon={leftIcon} rightIcon={rightIcon}>
        <div className="grid grid-cols-[100px_1fr] w-full gap-5">
          <ScText fontStyle="md" className="sc-text-basic-04">
            {item.title}
          </ScText>
          <ScVFlex className={alignLeft ? "text-left" : "text-right"}>
            <ScText fontStyle="md" className="sc-text-basic-02">
              {item.contentText}
            </ScText>
            {item.bankNum && (
              <ScText fontStyle="sm" className="sc-text-basic-04">
                {item.bankNum}
              </ScText>
            )}
          </ScVFlex>
        </div>
      </ScListItem>
    ))}
  </ScList>
);

export const ScListTitle = ({ title, className, link, ...props }: ScListTitleProps) => (
  <ScHFlex {...props} className={cn("justify-between items-center px-5 py-2", className)}>
    <ScText fontStyle="h4-b" className="sc-text-primary-03">
      {title}
    </ScText>
    {link && (
      <ScText as="a" link={link}>
        <Icon name="Edit" size="lg" className="sc-text-basic-02" />
      </ScText>
    )}
  </ScHFlex>
);

/* ─────────────────────────────
 * 3. ScReviewList & ItemList (링크형)
 * ───────────────────────────── */

export const ScReviewList = ({ title, className, list, divided, split = false, link, ...props }: ScReviewListProps) => (
  <ScVFlex g={16} {...props}>
    {title && <ScListTitle title={title} link={link} />}
    <ScList divided={divided} className={cn("grid gap-y-4", split && "grid-cols-2 gap-x-4", className)}>
      {list?.map((item, idx) => (
        <ScListItem key={idx}>
          <ScVFlex g={4}>
            <ScText fontStyle="md" className="sc-text-basic-04">
              {item.label}
            </ScText>
            <ScText fontStyle="h5" className="sc-text-basic-03">
              {item.detailTxt}
            </ScText>
          </ScVFlex>
        </ScListItem>
      ))}
    </ScList>
  </ScVFlex>
);

export const ScItemlist = ({
  className,
  title,
  subTxt,
  content,
  link,
  leftIcon,
  type = "link",
  ...props
}: ScItemlistTitleProps) => (
  <ScHFlex as="li" className={cn(type === "detail" && "mx-5", className)}>
    <ScText
      as="a"
      link={link}
      className={cn(
        "grid items-center w-full py-4",
        type === "detail"
          ? "grid-cols-2"
          : leftIcon
            ? "grid-cols-[32px_1fr_24px] gap-4"
            : "grid-cols-[1fr_24px] pl-5 pr-4 gap-2",
        className,
      )}
      {...props}
    >
      {leftIcon && <Icon name="Transfer" size="xl" className="sc-icon-primary" />}
      <ScVFlex g={4}>
        <ScText
          fontStyle={link ? "lg-m" : "lg"}
          className={type === "detail" ? "sc-text-basic-04" : "sc-text-basic-02"}
        >
          {title}
        </ScText>
        {type === "linkTxt" && (
          <ScText fontStyle="md" className="sc-text-basic-04">
            {subTxt}
          </ScText>
        )}
      </ScVFlex>
      {type === "detail" ? (
        <ScText className="text-right sc-text-basic-02">{content}</ScText>
      ) : (
        <Icon name="ArronRight" size="lg" className={leftIcon ? "sc-text-primary" : "sc-text-basic-02"} />
      )}
    </ScText>
  </ScHFlex>
);

/* ─────────────────────────────
 * 4. ScListType & ScStepList
 * ───────────────────────────── */

export const ScListType = ({ list, divided = true, type = "link", ...props }: ScItemlistProps) => (
  <ScList divided={divided} mt={4} {...props}>
    {list?.map((item, idx) => (
      <ScItemlist
        key={idx}
        type={type}
        title={item.label}
        subTxt={item.subTxt}
        content={item.detailTxt}
        link={item.link}
      />
    ))}
  </ScList>
);

export const ScLinkListIcon = ({
  list,
  divided = true, // props에서 type을 구조분해 할당으로 추출하여 restProps에 포함되지 않게 합니다.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type: _type,
  ...props
}: ScItemlistProps) => (
  <ScList divided={divided} mt={4} className="[&>li:first-child_a]:pt-0" {...props}>
    {list?.map((item, idx) => (
      <ScItemlist key={idx} type="linkTxt" title={item.label} subTxt={item.subTxt} link={item.link} leftIcon />
    ))}
  </ScList>
);

export const ScStpeList = ({ label, subTxt, link, num, rightIcon, ...props }: ScSteplistTitleProps) => (
  <ScHFlex as="li" {...props}>
    <div className={cn("grid grid-cols-[40px_1fr_auto] items-start w-full gap-4 py-4")}>
      <ScBox w={32} h={32} className="bg-(--color-sc-green-100) rounded-full flex items-center justify-center">
        <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
          <ScText fontStyle="lg-m" className="sc-text-primary-02">
            {num}
          </ScText>
        </div>
      </ScBox>
      <ScVFlex g={4}>
        <ScText fontStyle="lg-m" className="sc-text-primary-02">
          {label}
        </ScText>
        <ScText fontStyle="md" className="sc-text-basic-04">
          {subTxt}
        </ScText>
      </ScVFlex>
      {rightIcon && <Icon name="Transfer" size="xl" />}
    </div>
  </ScHFlex>
);

export const ScListStpeType = ({
  list,
  rightIcon = false,
  divided = false, // props에서 type을 구조분해 할당으로 추출하여 restProps에 포함되지 않게 합니다.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type: _type,
  ...props
}: ScStepListProps) => (
  <ScList divided={divided} g={16} mt={4} {...props}>
    {list?.map((item, idx) => (
      <ScStpeList
        key={idx}
        num={idx + 1}
        label={item.label}
        subTxt={item.subTxt}
        link={item.link}
        rightIcon={rightIcon}
      />
    ))}
  </ScList>
);
