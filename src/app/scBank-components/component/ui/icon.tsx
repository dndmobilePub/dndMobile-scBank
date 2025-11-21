import * as React from "react";
import { cn } from "@/lib/utils";


import { iconMap } from './icons/iconMap';

export type IconName = keyof typeof iconMap;

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<IconSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7",
};

export interface IconProps
  extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
  className?: string;
  "aria-hidden"?: boolean;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = "md", className, ...props }, ref) => {
    const SvgIcon = iconMap[name];

    return (
      <SvgIcon
        ref={ref}
        className={cn(sizeClasses[size], className)}
        aria-hidden={props["aria-hidden"] ?? true}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
