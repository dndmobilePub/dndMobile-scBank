"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/index";
import { ScText, Icon } from "@scBank/index";
import { overrideVariants, ScButtonProps, ScButtonVariantProps } from "@scBank/scButton";
import {
  splitSpacingProps,
  splitBorderProps,
  splitRadiusProps,
  buildDynamicSpacingStyle,
  buildDynamicBorderStyle,
  buildDynamicRadiusStyle,
} from "@/lib/variants";

/** [Base] ScButton */
export const ScButton = React.forwardRef<HTMLButtonElement, ScButtonProps>(
  (
    { variant, size, asChild = false, isLoading = false, loadingText, children, onClick, className, style, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const { spacing, rest: r1 } = splitSpacingProps(props);
    const { border, rest: r2 } = splitBorderProps(r1);
    const { radius, rest: cvaProps } = splitRadiusProps(r2);

    const dynamicStyles = {
      ...buildDynamicSpacingStyle(spacing),
      ...buildDynamicBorderStyle(border),
      ...buildDynamicRadiusStyle(radius),
      ...style,
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading) return;
      onClick?.(e);
    };

    return (
      <Comp
        ref={ref}
        {...cvaProps}
        style={dynamicStyles}
        onClick={handleClick}
        className={cn(
          overrideVariants({ variant, size, ...cvaProps } as ScButtonVariantProps),
          isLoading && "cursor-wait",
          className,
        )}
      >
        {isLoading ? (loadingText ?? <Spinner />) : children}
      </Comp>
    );
  },
);
ScButton.displayName = "ScButton";

/** [Sub] ScrollProgressButton */
export const ScrollButton: React.FC<Omit<ScButtonProps, "variant" | "size"> & { containerId?: string }> = ({
  children,
  className,
  containerId,
  onClick,
  ...props
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const el = containerId ? document.getElementById(containerId) : document.documentElement;
      if (!el) return;
      const scrollTop = containerId ? (el as HTMLElement).scrollTop : window.scrollY;
      const maxScroll = el.scrollHeight - (containerId ? (el as HTMLElement).clientHeight : window.innerHeight);
      setProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);
    };
    const target = containerId ? document.getElementById(containerId) : window;
    target?.addEventListener("scroll", handleScroll, { passive: true });
    return () => target?.removeEventListener("scroll", handleScroll);
  }, [containerId]);

  const isComplete = progress >= 99;

  return (
    <ScButton
      variant="scroll"
      onClick={(e) => isComplete && onClick?.(e)}
      className={cn("relative", !isComplete && "cursor-not-allowed", className)}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0">
        <span
          className={cn("block h-full transition-all duration-200", isComplete ? "sc-bg-primary" : "sc-bg-primary-02")}
          style={{ width: `${progress}%` }}
        />
      </span>
      <span className={cn("relative z-10 transition-colors", isComplete ? "sc-text-white" : "sc-text-primary")}>
        {children}
      </span>
    </ScButton>
  );
};

/** [Sub] ScTxtBtn */
export const ScTxtBtn: React.FC<Omit<ScButtonProps, "variant" | "size"> & { typeBtn?: "pdf" | "edit" | "all" }> = ({
  children,
  className,
  typeBtn,
  ...props
}) => (
  <ScButton variant="txtBtn" size="sm" className={cn("relative inline-flex items-center", className)} {...props}>
    {typeBtn === "pdf" && <ScText value="PDF 보기" />}
    {typeBtn === "edit" && (
      <>
        <ScText value="편집" />
        <Icon name="Funnel" size="sm" className="sc-icon-primary" />
      </>
    )}
    {typeBtn === "all" && (
      <>
        <ScText value="전체" />
        <Icon name="PencilSimple" size="sm" className="sc-icon-primary" />
      </>
    )}
    {children}
  </ScButton>
);

/** [Sub] ScExtBtn */
export const ScExtBtn: React.FC<
  Omit<ScButtonProps, "variant"> & {
    btnName?: string;
    variant?: "smallExt" | "smallExtSub";
    types?: "primary" | "secondary";
    contText?: string;
  }
> = ({ children, className, btnName, contText, types = "primary", variant = "smallExt", ...props }) => (
  <ScButton variant={variant} className={cn("relative", className)} {...props}>
    {types === "primary" ? (
      <>
        <ScText value={btnName} />
        <Icon name="Placeholder" size="sm" />
      </>
    ) : (
      <ScText value={contText ?? "전체보기"} />
    )}
    {children}
  </ScButton>
);
