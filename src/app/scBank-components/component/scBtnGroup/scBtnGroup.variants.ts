import { cva } from "class-variance-authority";
import { spacingVariants, spacingDefaultVariants } from "@/lib/variants";

export const scBtnGroupVariants = cva("relative flex gap-[8px]", {
  variants: {
    type: {
      default: "",
      ratio: `
        [&>*:first-child]:flex-[1]
        [&>*:first-child]:min-w-[82px]
        [&>*:first-child]:max-w-[82px]
        [&>*:last-child]:flex-[2]
      `,
      stack: "flex-col [&>*]:flex-auto",
    },
    ...spacingVariants,
  },
  defaultVariants: {
    type: "default",
    ...spacingDefaultVariants,
  },
});
