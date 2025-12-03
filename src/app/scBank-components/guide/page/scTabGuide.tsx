"use client";

import * as React from "react";

import {
  ScTab,
  ScBox,
  ScVFlex,
  ScReviewList,
  ScListTitle,
  ScDetailList,
  ScList,
  ScListItem,
  ScLinkListIcon,
  ScListStpeType,
} from "@/app/scBank-components/component/ui/index";

import ScText from "../../component/ui/scText";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

const listSample = [{ txt: "List 내용 입니다" }, { txt: "List 내용 입니다" }, { txt: "List 내용 입니다" }];
export function ScTabGuide() {
  return (
    <ScVFlex g={10} mt={10}>
      <ScText as="p" value="List 컴포넌트" />
      <ScVFlex g={10}>
        <ScVFlex g={24} className="bg-white rounded-[10px]" p={20}>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="List type" />
            <ScBox g={20} className="grid grid-cols-2 gap-4">
              <ScTab TabName="test" />
            </ScBox>
            <pre className={preStyle}>{``}</pre>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  );
}
