import * as React from "react";

/** 디자인 타입 */
export type ScBadgeMainType = "subtle" | "bold";

// Subtle 타입의 4가지 색상
export type SubtleColor = "green" | "blue" | "gray" | "red";

// Bold 타입의 6가지 색상
export type BoldColor = "blue" | "red" | "black" | "purple" | "green" | "orange";

// 최종 Variant 타입: 'subtle-gray', 'bold-blue' 등의 문자열 형태
export type ScBadgeVariant = `${ScBadgeMainType}-${SubtleColor | BoldColor}`;

export interface ScBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: ScBadgeVariant;
  className?: string;
}
