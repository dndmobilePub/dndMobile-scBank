"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import ScText from "./scText";

/* ─────────────────────────────
 * 공통 타입
 * ───────────────────────────── */
/** 디자인 타입 */
type ScBadgeMainType = "subtle" | "bold";

// Subtle 타입의 4가지 색상
type SubtleColor = "green" | "blue" | "gray" | "red";

// Bold 타입의 6가지 색상
type BoldColor = "blue" | "red" | "black" | "purple" | "green" | "orange";

// 최종 Variant 타입: 'subtle-gray', 'bold-blue' 등의 문자열 형태
type ScBadgeVariant = `${ScBadgeMainType}-${SubtleColor | BoldColor}`;

const colorMap = {
  subtle: {
    green: "bg-[#E8F3EC] text-[#1F8845]",
    blue: "bg-[#F7FBFF] text-[#0473EA]",
    gray: "bg-[#F8F8F8] text-[#666666]",
    red: "bg-[#FAE5E8] text-[#D0021B]",
  },
  bold: {
    blue: "bg-[#0B56A8] text-white rounded-full",
    red: "bg-[#D0021B] text-white rounded-full",
    black: "bg-[#212121] text-white rounded-full",
    purple: "bg-[#8B0FED] text-white rounded-full",
    green: "bg-[#38D200] text-white rounded-full",
    orange: "bg-[#F0810D] text-white rounded-full",
  },
};

/* ─────────────────────────────
 * ScBadge 컴포넌트
 * ───────────────────────────── */

export interface ScBadgeProps {
  children: React.ReactNode;
  variant?: ScBadgeVariant;
  className?: string;
}

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

  return <span className={badgeClasses}>{children}</span>;
};
