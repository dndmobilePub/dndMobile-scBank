import { cva, VariantProps } from "class-variance-authority";
import { spacingVariants, spacingDefaultVariants } from "@/lib/variants";

const scButtonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap " +
  "rounded-[50px] h-[40px] px-[12px] flex-1 sc-text-basic-06 text-medium font-medium " +
  "transition-all disabled:pointer-events-none " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 " +
  "shrink-0 [&_svg]:shrink-0 outline-none " +
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ";

export const overrideVariants = cva(scButtonBase, {
  variants: {
    variant: {
      solid:
        "sc-bg-primary sc-text-white " +
        "enabled:hover:sc-bg-primary-hover enabled:hover:sc-text-primary " +
        "enabled:active:sc-bg-primary-active " +
        "disabled:sc-bg-primary-disabled disabled:sc-text-primary-disabled",
      secondary:
        "border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary " +
        "enabled:hover:sc-bd-primary-hover enabled:active:sc-bd-primary-hover " +
        "enabled:active:sc-text-primary-active " +
        "disabled:sc-bd-primary-disabled disabled:sc-text-primary-disabled",
      scroll: "relative overflow-hidden " + "border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary ",
      smallExt:
        "flex-0 h-[32px] px-[12px] w-fit gap-[4px] " +
        "rounded-l-lg rounded-r-sm rounded-br-xl rounded-bl-sm " +
        "border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary ",
      smallExtSub:
        "flex-0 w-auto h-[32px] px-[12px] w-fit rounded-[16px] sc-bg-teritary " +
        "enabled:hover:sc-bg-teritary-hover enabled:active:sc-bg-teritary-active " +
        "disabled:sc-bg-basic-disabled disabled:text-[var(--color-sc-neutral-400)] ",
      txtBtn: "sc-text-primary text-base gap-[4px] bg-transparent h-auto px-0 flex-none ",
      loading: "sc-bg-primary sc-text-white ",
    },
    size: {
      default: "",
      sm:
        "flex-0 w-auto h-[32px] px-[12px] w-fit " +
        "enabled:hover:!sc-bd-primary-02 enabled:hover:!sc-text-primary " +
        "enabled:active:!sc-bd-primary-02 enabled:active:!sc-text-primary " +
        "disabled:!sc-bd-primary-02 disabled:!sc-text-primary ",
      smE: "",
    },
    ...spacingVariants,
  },
  defaultVariants: {
    variant: "solid",
    size: "default",
    ...spacingDefaultVariants,
  },
});

export type ScButtonVariantProps = VariantProps<typeof overrideVariants>;
