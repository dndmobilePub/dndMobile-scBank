import { cva } from "class-variance-authority";
import { spacingVariants, spacingDefaultVariants } from "@/lib/variants";

export const scBoxVariants = cva("relative block", {
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
