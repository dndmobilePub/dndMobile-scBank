/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { boolean } from "zod";

export interface ScBottomSheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  /** 시트를 여는 트리거 버튼 */
  trigger?: React.ReactElement<{
    onClick?: React.MouseEventHandler;
    [key: string]: any;
  }>;

  title?: React.ReactNode;
  isTitle?: boolean;
  description?: React.ReactNode;
  topBorder?: boolean;
  children?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;

  disableOverlayClose?: boolean;
  disableEscClose?: boolean;

  /** 닫힐 때 공통 콜백 */
  onClose?: () => void;

  className?: string;
  isBtnDown?: boolean;
}
