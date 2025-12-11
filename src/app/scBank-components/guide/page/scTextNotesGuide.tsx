"use client";
import * as React from "react";

import {
  ScTab,
  ScBox,
  ScVFlex,
  ScTextNotes,
  ScTabsList,
  ScTabsTrigger,
  ScTabsContent,
} from "@/app/scBank-components/component/ui/index";

import ScText from "../../component/ui/scText";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

const listSample = ["list 내용", "list 내용", "list 내용"];

export function ScTextNotesGuide() {
  return (
    <ScVFlex g={10} mt={10}>
      <ScText as="p" value="Text & Notes 컴포넌트" />
      <ScVFlex g={10}>
        <ScVFlex g={24} className="bg-white rounded-[10px]" p={20}>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="base Style" />
            <ScTextNotes heading={"타이틀 내용입니다"} NoteData={listSample} />
            <pre className={preStyle}>{``}</pre>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  );
}
