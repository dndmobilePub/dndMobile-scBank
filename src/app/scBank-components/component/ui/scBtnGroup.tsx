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
} from "@/lib/variants";



const scBtnGroupVariants = cva("relative flex gap-[8px]", {
  variants: {
    type: {
      default: "",
      ratio: `[&>*:first-child]:flex-[1] 
              [&>*:first-child]:min-w-[82px]
              [&>*:first-child]:max-w-[82px]
              [&>*:last-child]:flex-[2]`,
      stack: "flex-col [&>*]:flex-auto",
    },
    ...spacingVariants,
  },
  defaultVariants: {
    type: "default",
    ...spacingDefaultVariants
    
  },
});

export interface scBtnGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scBtnGroupVariants>,
    DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps  {
  asChild?: boolean;
}

export const ScBtnGroup = React.forwardRef<HTMLDivElement, scBtnGroupProps>(
  (props, ref) => {
     const Comp = props.asChild ? Slot : "div";

    const { spacing, rest: afterSpacing } = splitSpacingProps(props);
    const { border, rest: afterBorder } = splitBorderProps(afterSpacing);
    const { radius, rest } = splitRadiusProps(afterBorder);

    const { className, asChild, style, ...cvaProps } = rest;

    const spacingStyle = buildDynamicSpacingStyle(spacing);
    const borderStyle = buildDynamicBorderStyle(border);
    const radiusStyle = buildDynamicRadiusStyle(radius);

    return (
      <Comp
        ref={ref}
        {...cvaProps}
        style={{ ...spacingStyle, ...borderStyle, ...radiusStyle, ...style }}
        className={cn(scBtnGroupVariants(cvaProps as any), className)}
      />
    );
  }
);

