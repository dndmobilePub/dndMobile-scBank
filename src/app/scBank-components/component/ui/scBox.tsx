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
  DynamicSizeProps
} from "@/lib/variants";



const scBoxVariants = cva("relative block", {
  variants: {
    variant: {
      default: '', 
      VFlex: 'flex flex-col', 
      HFlex: 'flex flex-row', 
    },
    ...spacingVariants,
  },
  defaultVariants: {
    variant: "default",
    ...spacingDefaultVariants
    
  },
});

export interface ScBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scBoxVariants>,
    DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps, DynamicSizeProps  {
  asChild?: boolean;
}

export const ScBox = React.forwardRef<HTMLDivElement, ScBoxProps>(
  (props, ref) => {
     const Comp = props.asChild ? Slot : "div";

    const { spacing, rest: afterSpacing } = splitSpacingProps(props);
    const { border, rest: afterBorder } = splitBorderProps(afterSpacing);
    const { radius, rest: afterRadius } = splitRadiusProps(afterBorder);
    const { size, rest } = splitSizeProps(afterRadius);
    
    const { className, asChild, style, ...cvaProps } = rest;


    const spacingStyle = buildDynamicSpacingStyle(spacing);
    const borderStyle = buildDynamicBorderStyle(border);
    const radiusStyle = buildDynamicRadiusStyle(radius);
    const sizeStyle = buildDynamicSizeStyle(size);
    
    return (
      <Comp
        ref={ref}
        {...cvaProps}
        style={{ ...spacingStyle, ...borderStyle, ...radiusStyle, ...sizeStyle, ...style }}
        className={cn(scBoxVariants(cvaProps as any), className)}
      />
    );
  }
);

export interface ScFlexProps extends Omit<ScBoxProps, "variant"> {}

export const ScVFlex = React.forwardRef<HTMLDivElement, ScFlexProps>(
  ({ className, ...props }, ref) => {
    return (
      <ScBox
        ref={ref}
        variant="VFlex"
        className={className}
        {...props}
      />
    );
  }
);

export const ScHFlex = React.forwardRef<HTMLDivElement, ScFlexProps>(
  ({ className, ...props }, ref) => {
    return (
      <ScBox
        ref={ref}
        variant="HFlex"
        className={className}
        {...props}
      />
    );
  }
);

