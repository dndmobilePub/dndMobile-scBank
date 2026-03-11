"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { ScList, ScListItem, ScVFlex, ScBox, ScBtnGroup, ScButton, ScText } from "@scBank/index";
import { ScTextNotesProps } from "@scBank/scTextNotes";

export const ScTextNotes: React.FC<ScTextNotesProps> = ({
  type = "line",
  heading,
  className,
  children,
  NoteData,
  isActiveBtn = true,
  listGap = 8,
  ...restProps
}) => {
  return (
    <ScVFlex
      g={10}
      p={20}
      rtl={16}
      rtr={6}
      rbl={35}
      rbr={24}
      className={cn("sc-text-notes border relative", className)}
      style={{
        borderColor: type === "line" ? "var(--color-sc-blue-800)" : undefined,
        backgroundColor: type === "line" ? "var(--color-sc-blue-50)" : undefined,
      }}
      {...restProps}
    >
      {/* 배경 이미지 타입에 따라 변경*/}
      <ScBox className={cn("absolute top-0 right-0")}>{/* Icon 이나 image 태그 사용해서 추가 */}</ScBox>
      <ScVFlex g={12}>
        {heading && <ScText fontStyle="lg-b" className={cn("sc-text-primary-02")} value={heading} />}
        {NoteData && (
          <ScList as="ul" g={listGap} type="dot" className={cn("sc-text-primary-02")}>
            {NoteData.map((item, idx) => (
              <ScListItem
                fontStyle="md"
                dotColor="--color-sc-blue-800"
                className={cn("sc-text-primary-02")}
                key={idx}
                p={0}
              >
                {item}
              </ScListItem>
            ))}
          </ScList>
        )}
        {children}
        {isActiveBtn && (
          <ScBtnGroup>
            <ScButton type="button">버튼</ScButton>
          </ScBtnGroup>
        )}
      </ScVFlex>
    </ScVFlex>
  );
};
