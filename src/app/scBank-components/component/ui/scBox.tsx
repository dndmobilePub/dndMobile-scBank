import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants as baseVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const scBoxVariants = cva(baseVariants(), {
  variants: {
    variant: {
      // Large_H40
      default: 'reletive', 
      VFlex: 'flex flex-col', 
      HFlex: 'flex flex-row', 
    },
    
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * ScButton: 기존 Button을 래핑하여 새로운 variant만 사용하는 컴포넌트
 */
export interface ScButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scBoxVariants> {
  asChild?: boolean;
}

export const ScBox = React.forwardRef<HTMLDivElement, ScButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(scBoxVariants({ variant }), className)}
      />
    );
  }
);

ScBox.displayName = "ScBox";
