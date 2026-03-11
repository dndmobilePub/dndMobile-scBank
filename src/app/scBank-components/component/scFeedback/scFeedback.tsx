"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon, ScVFlex, ScText } from "@scBank/index";
import { ScFeedbackProps } from "@scBank/scFeedback";

export const ScFeedback: React.FC<ScFeedbackProps> = ({
  IconName = "Edit",
  IconImg,
  titleTxt,
  contTxt,
  children,
  className,
  ...restProps
}) => {
  return (
    <ScVFlex py={20} g={16} className={cn("items-center justify-center", className)} {...restProps}>
      {/* 1. Icon / Image Area */}
      <div className="flex justify-center w-full">
        {IconImg ? (
          // 이미지 노드가 직접 주입된 경우 (img 태그 등)
          <div className="relative w-[108px] h-[88px] flex items-center justify-center">{IconImg}</div>
        ) : (
          // 기본 SVG 아이콘인 경우
          <Icon name={IconName as never} width={108} height={88} className="mx-auto" />
        )}
      </div>

      {/* 2. Text Content Area */}
      <ScVFlex g={8} className="w-full text-center">
        {titleTxt && (
          <ScText as="p" fontStyle="lg">
            {titleTxt}
          </ScText>
        )}
        {contTxt && (
          <ScText as="p" fontStyle="md" className="sc-text-basic-04">
            {contTxt}
          </ScText>
        )}

        {/* 3. Extra Content (e.g., Buttons) */}
        {children && <div className="mt-4">{children}</div>}
      </ScVFlex>
    </ScVFlex>
  );
};

ScFeedback.displayName = "ScFeedback";
