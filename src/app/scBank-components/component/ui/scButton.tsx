"use client";
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

import { Icon } from "@/app/scBank-components/component/ui/icon";

const overrideVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap
  rounded-[50px] h-[40px] px-[12px] flex-1 sc-text-basic-06 text-medium font-medium
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
      scroll: `
        relative overflow-hidden
        border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary
      `,
      smallExt: `flex-0 h-[32px] px-[12px] w-fit gap-[4px]
        rounded-l-lg rounded-r-sm rounded-br-xl rounded-bl-sm 
        border-[1px] bg-transparent sc-bd-primary-02 sc-text-primary
      `,
      smallExtSub: `flex-0 w-auto h-[32px] px-[12px] w-fit rounded-[16px] sc-bg-teritary
        hover:sc-bg-teritary-hover active:sc-bg-teritary-active
        disabled:sc-bg-basic-disabled disabled:text-[var(--color-sc-neutral-400)]
      `,
      txtBtn: 'sc-text-primary text-base gap-[4px]',      
    },
    size: {
      default: "",
      sm: `flex-0 w-auto h-[32px] px-[12px] w-fit
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
interface ScrollProgressButtonProps
  extends Omit<ScButtonProps, "variant" | "size"> {
  /** 스크롤 기준이 될 컨테이너 id (없으면 window 기준) */
  containerId?: string;
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

    // 스크롤 대상 (컨테이너 또는 윈도우)
    const target: HTMLElement | Window = containerEl ?? window;

    const handleScroll = () => {
      if (containerEl) {
        // 🔹 특정 컨테이너 기준 스크롤 비율
        const scrollTop = containerEl.scrollTop;
        const maxScroll =
          containerEl.scrollHeight - containerEl.clientHeight;
        const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        setProgress(ratio);
      } else {
        // 🔹 전체 문서 기준 스크롤 비율
        const scrollTop =
          window.scrollY || document.documentElement.scrollTop;
        const maxScroll =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        setProgress(ratio);
      }
    };

    // 초기값 계산
    handleScroll();

    target.addEventListener("scroll", handleScroll, { passive: true } as any);
    return () => {
      target.removeEventListener("scroll", handleScroll as any);
    };
  }, [containerId]);

  const isComplete = progress >= 99;

  // 🔹 100% 이전에는 onClick 막기
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
      {/* 🔹 뒤에서 차오르는 게이지 레이어 */}
      <span className="pointer-events-none absolute inset-0">
        <span
          className={cn(
            "block h-full transition-[width,background-color] duration-200 ease-out",
            isComplete
              ? "sc-bg-primary"
              : "sc-bg-primary-02"
          )}
          style={{ width: `${progress}%` }}
        />
      </span>

      {/* 🔹 실제 버튼 내용 */}
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


interface TextButtonProps
  extends Omit<ScButtonProps, "variant" | "size"> {
  typeBtn? : "pdf" | "edit" | "all" | undefined,
}


export const ScTxtBtn: React.FC<TextButtonProps> = ({
  children,
  className,
  typeBtn,
  onClick,
  ...props
}) => {

  
  return (
    <ScButton
      variant="txtBtn"
      size='sm'
      {...props}
      className={cn("relative", className
      )}
    >
      {typeBtn === 'pdf' && <span>PDF 보기</span>} 
      {typeBtn === 'edit' && <><span>편집</span> <Icon name="Funnel" size="sm" className="sc-icon-primary" /></>} 
      {typeBtn === 'all' && <><span>전체</span> <Icon name="PencilSimple" size="sm"  className="sc-icon-primary"/></>} 
    </ScButton>
  );
};

interface ScExtButtonProps
  extends Omit<ScButtonProps, "variant"> { 
  btnName?: string,
  variant?: 'smallExt' | 'smallExtSub' 
  types?: "primary" | "secondary" | undefined,
}

export const ScExtBtn: React.FC<ScExtButtonProps> = ({
  children,
  className,
  btnName,
  onClick,
  types = 'primary',
  ...props
}) => {

  const extStyle = `hover:sc-bd-primary-hover hover:sc-bg-extra hover:sc-icon-primary-hover
    active:sc-text-primary-active active:sc-bg-extra-hover active:sc-icon-primary-active
    disabled:sc-text-primary-disabled disabled:sc-bd-state-disabled-04 disabled:sc-icon-primary-disabled 
  `

  return (
    <ScButton
      variant='smallExt'
      {...props}
      className={cn("relative", className , extStyle
      )}
    > 
      {types === 'primary' && <><span>{btnName}</span> <Icon name="Placeholder" size="sm" className={`${extStyle}`} /></>}
      {types === 'secondary' && <span>전체보기</span>}
    </ScButton>
  );
};

