import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants as baseVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const overrideVariants = cva(baseVariants(), {
  variants: {
    variant: {
      // Large_H40
      solid: 'sc-bg-primary hover:sc-bg-primary-hover active:sc-bg-primary-active disabled:sc-bg-primary-disabled sc-text-white hover:sc-text-primary disabled:sc-text-primary-disabled',
      ghost: '',
      scroll: "border border-neutral-300 bg-transparent text-neutral-900 hover:neutral-200",
      small: "text-blue-500 underline-offset-4 hover:underline",
      smallExt: '',
      text: '',      
    },
    size: {
      default : 'rounded-[50] h-[40] w-full'
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
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(overrideVariants({ variant }), className)}
      />
    );
  }
);

ScButton.displayName = "ScButton";
