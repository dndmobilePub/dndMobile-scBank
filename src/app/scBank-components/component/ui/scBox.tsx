import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

import {
  spacingVariants,
  spacingDefaultVariants,
  DynamicSpacingProps,
  DynamicBorderProps,
  DynamicRadiusProps,
  splitSpacingProps,
  splitBorderProps,
  splitRadiusProps,
  buildDynamicSpacingStyle,
  buildDynamicBorderStyle,
  buildDynamicRadiusStyle,
  splitSizeProps,
  buildDynamicSizeStyle,
  DynamicSizeProps,
} from "@/lib/variants";

const scBoxVariants = cva("relative block", {
  variants: {
    variant: {
      default: "",
      VFlex: "flex flex-col",
      HFlex: "flex flex-row",
    },
    ...spacingVariants,
  },
  defaultVariants: {
    variant: "default",
    ...spacingDefaultVariants,
  },
});

export interface ScBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scBoxVariants>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps,
    DynamicSizeProps {
  asChild?: boolean;
  as?: keyof React.JSX.IntrinsicElements | React.ElementType;
}

// eslint-disable-next-line react/display-name
export const ScBox = React.forwardRef<HTMLDivElement, ScBoxProps>((props, ref) => {
  // spacing / border / radius / size props 분리
  const { spacing, rest: afterSpacing } = splitSpacingProps(props);
  const { border, rest: afterBorder } = splitBorderProps(afterSpacing);
  const { radius, rest: afterRadius } = splitRadiusProps(afterBorder);
  const { size, rest } = splitSizeProps(afterRadius);

  const { className, asChild, as, style, ...cvaProps } = rest;

  const Tag = as ?? "div";
  const Comp = asChild ? Slot : Tag;

  // 스타일 빌드 (gap 포함)
  const spacingStyle = buildDynamicSpacingStyle(spacing);
  const borderStyle = buildDynamicBorderStyle(border);
  const radiusStyle = buildDynamicRadiusStyle(radius);
  const sizeStyle = buildDynamicSizeStyle(size);
  return (
    <Comp
      ref={ref}
      {...cvaProps}
      style={{
        ...spacingStyle, // padding / margin / gap / columnGap / rowGap
        ...borderStyle,
        ...radiusStyle,
        ...sizeStyle,
        ...style, // 외부 style이 최종 override
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={cn(scBoxVariants(cvaProps as any), className)}
    />
  );
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ScFlexProps extends Omit<ScBoxProps, "variant"> {}

// eslint-disable-next-line react/display-name
export const ScVFlex = React.forwardRef<HTMLDivElement, ScFlexProps>(({ className, ...props }, ref) => {
  return <ScBox ref={ref} variant="VFlex" className={className} {...props} />;
});
// eslint-disable-next-line react/display-name
export const ScHFlex = React.forwardRef<HTMLDivElement, ScFlexProps>(({ className, ...props }, ref) => {
  return <ScBox ref={ref} variant="HFlex" className={className} {...props} />;
});
