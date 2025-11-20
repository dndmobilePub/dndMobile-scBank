import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const overrideVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap
  rounded-[50] h-[40] px-[12] flex-1 sc-text-basic-06 text-medium font-medium
  transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
  shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`, {
  variants: {
    variant: {
      solid:
        `sc-bg-primary sc-text-white
        hover:sc-bg-primary-hover hover:sc-text-primary
        active:sc-bg-primary-active
        disabled:sc-bg-primary-disabled disabled:sc-text-primary-disabled`,
      secondary: `border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary 
        hover:sc-bd-primary-hover active:sc-bd-primary-hover 
        active:sc-text-primary-active 
        disabled:sc-bd-primary-disabled disabled:sc-text-primary-disabled`,
      scroll: "",
      smallExt: '',
      text: '',      
    },
    size: {
      default: "",
      sm: `flex-0 w-auto h-[32] px-[12] w-fit
        hover:!sc-bd-primary-02 hover:!sc-text-primary 
        active:!sc-bd-primary-02 active:!sc-text-primary  
        disabled:!sc-bd-primary-02 disabled:!sc-text-primary 
      `,
      smE: "",
      
    }
  },

  defaultVariants: {
    variant: "solid",
    size : 'default'
  },
});

/**
 * ScButton: 기존 Button을 래핑하여 새로운 variant만 사용하는 컴포넌트
 */
export interface ScButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof overrideVariants> {
  asChild?: boolean;
}

export const ScButton = React.forwardRef<HTMLButtonElement, ScButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(overrideVariants({ variant, size }), className)}
      />
    );
  }
);

ScButton.displayName = "ScButton";
