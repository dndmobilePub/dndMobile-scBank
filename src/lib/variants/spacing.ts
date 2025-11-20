// src/lib/variants/spacing.ts

const spacingScale = (prefix: string) => ({
  none: "",
  0: `${prefix}-0`,
  1: `${prefix}-1`,
  2: `${prefix}-2`,
  3: `${prefix}-3`,
  4: `${prefix}-4`,
  5: `${prefix}-5`,
  6: `${prefix}-6`,
  8: `${prefix}-8`,
  10: `${prefix}-10`,
} as const);

const radiusScale = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

export const spacingVariants = {
  // padding
  pToken: spacingScale("p"),
  pxToken: spacingScale("px"),
  pyToken: spacingScale("py"),
  ptToken: spacingScale("pt"),
  pbToken: spacingScale("pb"),
  plToken: spacingScale("pl"),
  prToken: spacingScale("pr"),

  // margin
  mToken: spacingScale("m"),
  mxToken: spacingScale("mx"),
  myToken: spacingScale("my"),
  mtToken: spacingScale("mt"),
  mbToken: spacingScale("mb"),
  mlToken: spacingScale("ml"),
  mrToken: spacingScale("mr"),

  // gap
  gToken: spacingScale("gap"),
  gXToken: spacingScale("gap-x"),
  gYToken: spacingScale("gap-y"),

  // border-radius
  rToken: radiusScale,
} as const;

export const spacingDefaultVariants = {
  // padding
  pToken: "none",
  pxToken: "none",
  pyToken: "none",
  ptToken: "none",
  pbToken: "none",
  plToken: "none",
  prToken: "none",

  // margin
  mToken: "none",
  mxToken: "none",
  myToken: "none",
  mtToken: "none",
  mbToken: "none",
  mlToken: "none",
  mrToken: "none",

  // gap
  gToken: "none",
  gXToken: "none",
  gYToken: "none",

  // border-radius
  rToken: "none",
} as const;
