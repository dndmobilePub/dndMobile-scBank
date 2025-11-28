"use client";

import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/index"
import { Icon } from "@/app/scBank-components/component/ui/icon";

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
import ScText from "./scText";

const scButtonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap " +
  "rounded-[50px] h-[40px] px-[12px] flex-1 sc-text-basic-06 text-medium font-medium " +
  "transition-all disabled:pointer-events-none " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 " +
  "shrink-0 [&_svg]:shrink-0 outline-none " +
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ";

const overrideVariants = cva(scButtonBase, {
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
      scroll:
        "relative overflow-hidden " +
        "border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary ",
      smallExt:
        "flex-0 h-[32px] px-[12px] w-fit gap-[4px] " +
        "rounded-l-lg rounded-r-sm rounded-br-xl rounded-bl-sm " +
        "border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary ",
      smallExtSub:
        "flex-0 w-auto h-[32px] px-[12px] w-fit rounded-[16px] sc-bg-teritary " +
        "enabled:hover:sc-bg-teritary-hover enabled:active:sc-bg-teritary-active " +
        "disabled:sc-bg-basic-disabled disabled:text-[var(--color-sc-neutral-400)] ",
      txtBtn: "sc-text-primary text-base gap-[4px] bg-transparent h-auto px-0 flex-none ",
      loading : "sc-bg-primary sc-text-white "
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
    ...spacingDefaultVariants
  },
});

/* ─────────────────────────────
 * ScButton
 * ───────────────────────────── */

export interface ScButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof overrideVariants>,
  DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: React.ReactNode;
}

export const ScButton = React.forwardRef<HTMLButtonElement, ScButtonProps>(
  ({ 
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingText,
      children,
      onClick,
      ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const { spacing, rest: afterSpacing } = splitSpacingProps(props);
    const { border, rest: afterBorder } = splitBorderProps(afterSpacing);
    const { radius, rest } = splitRadiusProps(afterBorder);

    const { className, style, ...cvaProps } = rest;

    const spacingStyle = buildDynamicSpacingStyle(spacing);
    const borderStyle = buildDynamicBorderStyle(border);
    const radiusStyle = buildDynamicRadiusStyle(radius);

    // 로딩 중이면 onClick 자체를 막는다
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (isLoading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    return (
      <Comp
        ref={ref}
        {...props}
        {...cvaProps}
        style={{ ...spacingStyle, ...borderStyle, ...radiusStyle, ...style }}
        onClick={handleClick}

        className={cn(
          overrideVariants({ ...(cvaProps as any), variant, size }),
          isLoading && "cursor-wait",
          className
        )}
      >
        {isLoading ? loadingText ?? <Spinner /> : children}
      </Comp>
    );
  }
);


/* ─────────────────────────────
 * ScrollButton
 * ───────────────────────────── */

interface ScrollProgressButtonProps
  extends Omit<ScButtonProps, "variant" | "size"> {
  /** 스크롤 기준이 될 컨테이너 id (없으면 window 기준) */
  containerId?: string;
}

export const ScrollButton: React.FC<ScrollProgressButtonProps> = ({
  children,
  className,
  containerId,
  onClick,
  ...props
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const containerEl = containerId
      ? (document.getElementById(containerId) as HTMLElement | null)
      : null;

    const target: HTMLElement | Window = containerEl ?? window;

    const handleScroll = () => {
      if (containerEl) {
        const scrollTop = containerEl.scrollTop;
        const maxScroll =
          containerEl.scrollHeight - containerEl.clientHeight;
        const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        setProgress(ratio);
      } else {
        const scrollTop =
          window.scrollY || document.documentElement.scrollTop;
        const maxScroll =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        setProgress(ratio);
      }
    };

    handleScroll();
    target.addEventListener("scroll", handleScroll, { passive: true } as any);
    return () => {
      target.removeEventListener("scroll", handleScroll as any);
    };
  }, [containerId]);

  const isComplete = progress >= 99;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!isComplete) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return (
    <ScButton
      variant="scroll"
      onClick={handleClick}
      aria-disabled={!isComplete}
      {...props}
      className={cn(
        "relative",
        !isComplete && "cursor-not-allowed",
        className
      )}
    >
      {/* 게이지 레이어 */}
      <span className="pointer-events-none absolute inset-0">
        <span
          className={cn(
            "block h-full transition-[width,background-color] duration-200 ease-out",
            isComplete ? "sc-bg-primary" : "sc-bg-primary-02"
          )}
          style={{ width: `${progress}%` }}
        />
      </span>

      {/* 내용 */}
      <span
        className={cn(
          "relative z-10 transition-colors",
          isComplete ? "sc-text-basic-06" : "sc-text-primary"
        )}
      >
        {children}
      </span>
    </ScButton>
  );
};

/* ─────────────────────────────
 * ScTxtBtn
 * ───────────────────────────── */

interface TextButtonProps
  extends Omit<ScButtonProps, "variant" | "size"> {
  typeBtn?: "pdf" | "edit" | "all";
}

export const ScTxtBtn: React.FC<TextButtonProps> = ({
  children,
  className,
  typeBtn,
  ...props
}) => {
  return (
    <ScButton
      variant="txtBtn"
      size="sm"
      {...props}
      className={cn("relative inline-flex items-center", className)}
    >
      {typeBtn === "pdf" &&  <ScText value='PDF 보기'/>}

      {typeBtn === "edit" && (
        <>
          <ScText value='편집'/>
          <Icon name="Funnel" size="sm" className="sc-icon-primary" />
        </>
      )}

      {typeBtn === "all" && (
        <>
          <ScText value='전체'/>
          <Icon name="PencilSimple" size="sm" className="sc-icon-primary" />
        </>
      )}

      {children}
    </ScButton>
  );
};

/* ─────────────────────────────
 * ScExtBtn
 * ───────────────────────────── */

interface ScExtButtonProps
  extends Omit<ScButtonProps, "variant"> {
  btnName?: string;
  variant?: "smallExt" | "smallExtSub";
  types?: "primary" | "secondary";
}

export const ScExtBtn: React.FC<ScExtButtonProps> = ({
  children,
  className,
  btnName,
  types = "primary",
  variant = "smallExt",
  ...props
}) => {
  const stateClasses =
    "hover:sc-bd-primary-hover hover:sc-bg-extra hover:sc-icon-primary-hover " +
    "active:sc-text-primary-active active:sc-bg-extra-hover active:sc-icon-primary-active " +
    "disabled:sc-text-primary-disabled disabled:sc-bd-state-disabled-04 disabled:sc-icon-primary-disabled";

  return (
    <ScButton
      variant={variant}
      {...props}
      className={cn("relative", stateClasses, className)}
    >
      {types === "primary" && (
        <>
          <span>{btnName}</span>
          <Icon name="Placeholder" size="sm" />
        </>
      )}
      {types === "secondary" && <span>전체보기</span>}
      {children}
    </ScButton>
  );
};
