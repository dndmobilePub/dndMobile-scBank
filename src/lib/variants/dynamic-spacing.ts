// src/lib/variants/dynamic-spacing.ts

export type SpacingProp = number | string | undefined;

// p, px, py, pt, pb, pl, pr + margin + gap 공통 타입
export type DynamicSpacingProps = {
  // padding
  p?: SpacingProp;
  px?: SpacingProp;
  py?: SpacingProp;
  pt?: SpacingProp;
  pb?: SpacingProp;
  pl?: SpacingProp;
  pr?: SpacingProp;

  // margin
  m?: SpacingProp;
  mx?: SpacingProp;
  my?: SpacingProp;
  mt?: SpacingProp;
  mb?: SpacingProp;
  ml?: SpacingProp;
  mr?: SpacingProp;

  // gap
  g?: SpacingProp;
  gX?: SpacingProp;
  gY?: SpacingProp;
};

export type DynamicRadiusProps = {
  r?: SpacingProp;   // border-radius 전체
  rt?: SpacingProp;  // border-top-left & top-right
  rb?: SpacingProp;  // bottom radius
  rl?: SpacingProp;  // left radius
  rr?: SpacingProp;  // right radius
  rtl?: SpacingProp; // top-left
  rtr?: SpacingProp; // top-right
  rbl?: SpacingProp; // bottom-left
  rbr?: SpacingProp; // bottom-right
};

/* 🔹 Border */
export type DynamicBorderProps = {
  border?: SpacingProp;      // "1px solid red" 또는 1 → 1px
  borderWidth?: SpacingProp; // 1, "2px"
  borderStyle?: string;      // "solid" | "dashed" ...
  borderColor?: string;      // "#fff", "red", "var(--...)" 등
};

// 숫자는 px, 문자열은 그대로("2rem" 등)
export const spacingToStyle = (v: SpacingProp) => {
  if (v === undefined) return undefined;
  if (typeof v === "number") return `${v}px`;
  return v;
};

export const buildDynamicRadiusStyle = (props: DynamicRadiusProps) => ({
  borderRadius: spacingToStyle(props.r),
  borderTopLeftRadius: spacingToStyle(props.rtl ?? props.rt),
  borderTopRightRadius: spacingToStyle(props.rtr ?? props.rt),
  borderBottomLeftRadius: spacingToStyle(props.rbl ?? props.rb),
  borderBottomRightRadius: spacingToStyle(props.rbr ?? props.rb),
});


// spacing props → style 객체로 변환
export const buildDynamicSpacingStyle = (props: DynamicSpacingProps) => ({
  // padding
  padding: spacingToStyle(props.p),
  paddingInline: spacingToStyle(props.px),
  paddingBlock: spacingToStyle(props.py),
  paddingTop: spacingToStyle(props.pt),
  paddingBottom: spacingToStyle(props.pb),
  paddingLeft: spacingToStyle(props.pl),
  paddingRight: spacingToStyle(props.pr),

  // margin
  margin: spacingToStyle(props.m),
  marginInline: spacingToStyle(props.mx),
  marginBlock: spacingToStyle(props.my),
  marginTop: spacingToStyle(props.mt),
  marginBottom: spacingToStyle(props.mb),
  marginLeft: spacingToStyle(props.ml),
  marginRight: spacingToStyle(props.mr),

  // gap
  gap: spacingToStyle(props.g),
  columnGap: spacingToStyle(props.gX),
  rowGap: spacingToStyle(props.gY),
});

/* ✅ border → style */
export const buildDynamicBorderStyle = (props: DynamicBorderProps) => {
  const border = spacingToStyle(props.border);
  const borderWidth = spacingToStyle(props.borderWidth);

  return {
    border, // 전체 border shorthand가 있으면 이게 최우선
    borderWidth,
    borderStyle: props.borderStyle,
    borderColor: props.borderColor,
  };
};

// 공통: props에서 spacing 관련만 분리
export const splitSpacingProps = <T extends DynamicSpacingProps>(props: T) => {
  const {
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    g,
    gX,
    gY,
    ...rest
  } = props;

  const spacing: DynamicSpacingProps = {
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    g,
    gX,
    gY,
  };

  return { spacing, rest: rest as Omit<T, keyof DynamicSpacingProps> };
};

export const splitRadiusProps = <T extends DynamicRadiusProps>(props: T) => {
  const {
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    ...rest
  } = props;

  const radiusProps: DynamicRadiusProps = {
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
  };

  return { radius: radiusProps, rest };
};


export const splitBorderProps = <T extends DynamicBorderProps>(props: T) => {
  const { border, borderWidth, borderStyle, borderColor, ...rest } = props;

  const borderProps: DynamicBorderProps = {
    border,
    borderWidth,
    borderStyle,
    borderColor,
  };

  return { border: borderProps, rest: rest as Omit<T, keyof DynamicBorderProps> };
};


