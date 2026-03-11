import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps } from "@/lib/variants";
import { scBtnGroupVariants } from "@/app/scBank-components/component/scBtnGroup";

export interface scBtnGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scBtnGroupVariants>,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps {
  asChild?: boolean;
}
