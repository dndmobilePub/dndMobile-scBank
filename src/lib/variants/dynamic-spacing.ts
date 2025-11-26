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

export type DynamicSizeProps = {
  w?: SpacingProp;       // width
  h?: SpacingProp;       // height
  minW?: SpacingProp;
  maxW?: SpacingProp;
  minH?: SpacingProp;
  maxH?: SpacingProp;
};

// 숫자는 px, 숫자 문자열도 px, 그 외 문자열은 그대로 사용
export const spacingToStyle = (v: SpacingProp) => {
  if (v === undefined) return undefined;

  if (typeof v === "number") {
    return `${v}px`;
  }

  if (typeof v === "string") {
    const trimmed = v.trim();
    if (!trimmed) return undefined;

    // "40", "12.5" 이런 순수 숫자 문자열은 px 처리
    const num = Number(trimmed);
    if (!Number.isNaN(num)) {
      return `${num}px`;
    }

    // "1rem", "50%", "var(--...)" 이런 건 그대로
    return trimmed;
  }

  return undefined;
};

export const buildDynamicRadiusStyle = (props: DynamicRadiusProps) => ({
  borderRadius: spacingToStyle(props.r),
  borderTopLeftRadius: spacingToStyle(props.rtl ?? props.rt),
  borderTopRightRadius: spacingToStyle(props.rtr ?? props.rt),
  borderBottomLeftRadius: spacingToStyle(props.rbl ?? props.rb),
  borderBottomRightRadius: spacingToStyle(props.rbr ?? props.rb),
});


// spacing props → style 객체로 변환
export const buildDynamicSpacingStyle = (props: DynamicSpacingProps) => {
const p  = spacingToStyle(props.p);
  const px = spacingToStyle(props.px);
  const py = spacingToStyle(props.py);

  const pt = spacingToStyle(props.pt);
  const pb = spacingToStyle(props.pb);
  const pl = spacingToStyle(props.pl);
  const pr = spacingToStyle(props.pr);

  const m  = spacingToStyle(props.m);
  const mx = spacingToStyle(props.mx);
  const my = spacingToStyle(props.my);

  const mt = spacingToStyle(props.mt);
  const mb = spacingToStyle(props.mb);
  const ml = spacingToStyle(props.ml);
  const mr = spacingToStyle(props.mr);

  const g  = spacingToStyle(props.g);
  const gX = spacingToStyle(props.gX);
  const gY = spacingToStyle(props.gY);

  return {
    /** padding (shorthand 제거: 개별 속성만 사용) */
    paddingTop:    pt ?? py ?? p,
    paddingBottom: pb ?? py ?? p,
    paddingLeft:   pl ?? px ?? p,
    paddingRight:  pr ?? px ?? p,

    /** margin (shorthand 제거: 개별 속성만 사용) */
    marginTop:     mt ?? my ?? m,
    marginBottom:  mb ?? my ?? m,
    marginLeft:    ml ?? mx ?? m,
    marginRight:   mr ?? mx ?? m,

    /** gap (shorthand 제거) */
    columnGap: gX ?? g,
    rowGap:    gY ?? g,
  };
};

export const buildDynamicSizeStyle = (props: DynamicSizeProps) => ({
  width: spacingToStyle(props.w),
  height: spacingToStyle(props.h),
  minWidth: spacingToStyle(props.minW),
  maxWidth: spacingToStyle(props.maxW),
  minHeight: spacingToStyle(props.minH),
  maxHeight: spacingToStyle(props.maxH),
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

export const splitSizeProps = <T extends DynamicSizeProps>(props: T) => {
  const { w, h, minW, maxW, minH, maxH, ...rest } = props;

  const sizeProps: DynamicSizeProps = {
    w,
    h,
    minW,
    maxW,
    minH,
    maxH,
  };

  return { size: sizeProps, rest: rest as Omit<T, keyof DynamicSizeProps> };
};


