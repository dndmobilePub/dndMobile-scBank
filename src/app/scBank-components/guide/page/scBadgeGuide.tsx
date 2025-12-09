"use client";
import * as React from "react";

import {
  ScBox,
  ScVFlex,
  ScBadge,
} from "@/app/scBank-components/component/ui/index";

import ScText from "../../component/ui/scText";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

export function ScBadgeGuide() {
  return (
    <ScVFlex g={10} mt={10}>
      <ScText as="p" value="Badge 컴포넌트" />
      <ScVFlex g={10}>
        <ScVFlex g={24} className="bg-white rounded-[10px]" p={20}>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Badge - subtle_Style" />
            <ScBox g={20} className="flex gap-4">
              <ScBadge variant="subtle-green">Badge</ScBadge>
              <ScBadge variant="subtle-blue">Badge</ScBadge>
              <ScBadge variant="subtle-gray">Badge</ScBadge>
              <ScBadge variant="subtle-red">Badge</ScBadge>
            </ScBox>
            <pre className={preStyle}>{`
흐린 배경 color 4type
ScBadge 컴포넌트 사용 예시:
<ScBadge variant="subtle-green">내용</ScBadge>
            `}</pre>
          </ScBox>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Badge - bold_Style" />
            <ScBox g={20} className="flex gap-4">
              <ScBadge variant="bold-blue">Badge</ScBadge>
              <ScBadge variant="bold-red">Badge</ScBadge>
              <ScBadge variant="bold-black">Badge</ScBadge>
              <ScBadge variant="bold-purple">Badge</ScBadge>
              <ScBadge variant="bold-green">Badge</ScBadge>
              <ScBadge variant="bold-orange">Badge</ScBadge>
            </ScBox>
            <pre className={preStyle}>{`
진한 배경 color 6type
ScBadge 컴포넌트 사용 예시:
<ScBadge variant="bold-blue">내용</ScBadge>
            `}</pre>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  );
}
