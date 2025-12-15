"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { ScVFlex } from "./index";
import { Icon } from "./icon";
import ScText from "./scText";

export interface ScFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  titleTxt?: string | React.ReactNode;
  contTxt?: string | React.ReactNode;
  IconName?: string;
  IconImg?: React.ReactNode;
}

export const ScFeedback: React.FC<ScFeedbackProps> = ({
  IconName = "Edit",
  className,
  children,
  titleTxt,
  contTxt,
  IconImg,
  ...restProps
}) => {
  return (
    <ScVFlex {...restProps} py={20} g={16} className={cn("justify-center")}>
      {/* icon type*/}
      {IconImg ? (
        // 아이콘 svg 아닌 이미지 인 경우
        <>1</>
      ) : (
        <Icon
          name={IconName as any}
          width={108}
          height={88}
          className={cn(" mx-auto")}
        />
      )}
      <ScVFlex g={8}>
        {titleTxt && (
          <ScText as="p" fontStyle="lg" className={cn("text-center")}>
            {titleTxt}
          </ScText>
        )}
        {contTxt && (
          <ScText
            as="p"
            fontStyle="md"
            className={cn("sc-text-basic-04 text-center")}
          >
            {contTxt}
          </ScText>
        )}
        {children}
      </ScVFlex>
    </ScVFlex>
  );
};
