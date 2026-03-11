"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScBadgeProps, ScBadgeMainType, ScBadgeVariant, colorMap } from "@scBank/scBadge";

/* ─────────────────────────────
 * ScBadge 컴포넌트
 * ───────────────────────────── */

export const ScBadge: React.FC<ScBadgeProps> = ({
  children,
  variant = "subtle-green", // 기본값 subtle-green
  className,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center min-w-[54px] px-[8px] py-[3px] rounded-[4px] text-[13px] leading-[18px] font-medium transition-colors whitespace-nowrap";

  const getColorClasses = (variant: ScBadgeVariant) => {
    const [mainType, color] = variant.split("-") as [string, string];

    if (!(mainType in colorMap)) {
      return colorMap.subtle.green;
    }

    const section = colorMap[mainType as ScBadgeMainType];

    if (!(color in section)) {
      return colorMap.subtle.green;
    }

    return section[color as keyof typeof section];
  };

  const colorClasses = getColorClasses(variant);

  const badgeClasses = cn(baseClasses, colorClasses, className);

  return <span className={badgeClasses}> {children} </span>;
};
