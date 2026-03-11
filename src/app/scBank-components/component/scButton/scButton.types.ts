import * as React from "react";
import { DynamicSpacingProps, DynamicBorderProps, DynamicRadiusProps } from "@/lib/variants";
import { ScButtonVariantProps } from "@scBank/scButton";

export interface ScButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    ScButtonVariantProps,
    DynamicSpacingProps,
    DynamicBorderProps,
    DynamicRadiusProps {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ScrollProgressButtonProps extends Omit<ScButtonProps, "variant" | "size"> {
  /** 스크롤 기준이 될 컨테이너 id (없으면 window 기준) */
  containerId?: string;
}

export interface TextButtonProps extends Omit<ScButtonProps, "variant" | "size"> {
  typeBtn?: "pdf" | "edit" | "all";
}

export interface ScExtButtonProps extends Omit<ScButtonProps, "variant"> {
  btnName?: string;
  variant?: "smallExt" | "smallExtSub";
  types?: "primary" | "secondary";
  contText?: string;
}
