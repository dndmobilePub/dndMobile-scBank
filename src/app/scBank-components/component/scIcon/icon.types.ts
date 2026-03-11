import * as React from "react";
import { iconMap } from "@scBank/scIcon/icons/iconMap";

export type IconName = keyof typeof iconMap;
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
  width?: number | string;
  height?: number | string;
  className?: string;
  "aria-hidden"?: boolean;
}
