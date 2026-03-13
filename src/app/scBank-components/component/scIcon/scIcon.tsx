import * as React from "react";
import { cn } from "@/lib/utils";
import { iconMap } from "./icons/iconMap";
import { IconProps, IconSize } from "@scBank/scIcon/index";

const sizeClasses: Record<IconSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7",
};

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = "md", width, height, className, ...props }, ref) => {
    const SvgIcon = iconMap[name];

    // 🛡️ 1. 방어 코드: 해당 이름의 아이콘이 없으면 아무것도 렌더링하지 않거나 경고를 띄웁니다.
    if (!SvgIcon) {
      console.warn(`[Icon] "${name}" 이 iconMap에 존재하지 않습니다.`);
      return null;
    }

    const resolveSize = (v?: number | string) => (typeof v === "number" ? `${v}px` : v);

    const hasCustomSize = width != null || height != null;

    return (
      <SvgIcon
        ref={ref}
        width={resolveSize(width)}
        height={resolveSize(height)}
        className={cn(
          // 🔑 width/height가 있으면 sizeClasses 절대 적용 X
          !hasCustomSize && sizeClasses[size],
          className,
        )}
        aria-hidden={props["aria-hidden"] ?? true}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";
