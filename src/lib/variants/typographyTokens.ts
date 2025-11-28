/* ─────────────────────────────
 * 폰트 스타일 토큰 맵
 * ───────────────────────────── */

export const fontStyleMap = {
  h1: "text-[2rem] leading-[1.4] tracking-[-0.3] font-bold",
  h2: "text-3xl leading-[1.4] tracking-[-0.3] font-bold",
  "h3-b": "text-2xl leading-[1.4] tracking-[-0.3] font-bold",
  "h3-m": "text-2xl leading-[1.4] tracking-[-0.3] font-medium",
  "h4-b": "text-xl leading-[1.4] tracking-[-0.3] font-bold",
  "h4-m": "text-xl leading-[1.4] tracking-[-0.3] font-medium",
  h4: "text-xl leading-[1.4] tracking-[-0.3] font-normal",
  "h5-b": "text-lg leading-[1.4] tracking-[-0.3] font-bold",
  "h5-m": "text-lg leading-[1.4] tracking-[-0.3] font-medium",
  h5: "text-lg leading-[1.4] tracking-[-0.3] font-normal",
  "lg-b": "text-base leading-[1.4] tracking-[-0.3] font-bold",
  "lg-m": "text-base leading-[1.4] tracking-[-0.3] font-medium",
  lg: "text-base leading-[1.4] tracking-[-0.3] font-normal",
  "md-b": "text-sm leading-[1.4] tracking-[-0.3] font-bold",
  "md-m": "text-sm leading-[1.4] tracking-[-0.3] font-medium",
  md: "text-sm leading-[1.4] tracking-[-0.3] font-normal",
  "sm-b": "text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-bold",
  "sm-m": "text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-medium",
  sm: "text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-normal",
} as const;

export type FontStyleKey = keyof typeof fontStyleMap;