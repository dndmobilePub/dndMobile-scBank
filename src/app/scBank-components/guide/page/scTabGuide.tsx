"use client";
import * as React from "react";

import {
  ScTab,
  ScBox,
  ScVFlex,
  ScTabs,
  ScTabsList,
  ScTabsTrigger,
  ScTabsContent,
} from "@/app/scBank-components/component/ui/index";

import ScText from "../../component/ui/scText";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

const listSample = [
  { name: "라벨1", content: <div>컨텐츠내용1</div> },
  { name: "라벨2", content: <div>컨텐츠내용2</div> },
  { name: "라벨3", content: <div>컨텐츠내용3</div> },
  { name: "라벨4", content: <div>컨텐츠내용4</div> },
];

export function ScTabGuide() {
  return (
    <ScVFlex g={10} mt={10}>
      <ScText as="p" value="List 컴포넌트" />
      <ScVFlex g={10}>
        <ScVFlex g={24} className="bg-white rounded-[10px]" p={20}>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Tab - tertiary_Style" />
            <ScBox g={20} className="grid grid-cols-1 gap-4">
              <ScTab variant="tertiary" tabListData={listSample} />
            </ScBox>
            <pre className={preStyle}>{`
const listSample = [
  { name: "라벨1", content: <div>1</div> },
  { name: "라벨2", content: <div>2</div> },
  { name: "라벨3", content: <div>3</div> },
  { name: "라벨4", content: <div>3</div> },
];
ScTab 컴포넌트 사용 예시:
<ScTab tabListData={listSample} />
ScTab 컴포넌트 내부 구현 예시: 이대로 사용가능
<ScTabs defaultValue="라벨1">
  <ScTabsList cols={4}>
    <ScTabsTrigger value="라벨1">라벨1</ScTabsTrigger>
    <ScTabsTrigger value="라벨2">라벨2</ScTabsTrigger>
    <ScTabsTrigger value="라벨3">라벨3</ScTabsTrigger>
    <ScTabsTrigger value="라벨4">라벨4</ScTabsTrigger>
  </ScTabsList>
  <ScTabsContent value="라벨1">콘텐츠 1</ScTabsContent>
  <ScTabsContent value="라벨2">콘텐츠 2</ScTabsContent>
  <ScTabsContent value="라벨3">콘텐츠 3</ScTabsContent>
  <ScTabsContent value="라벨4">콘텐츠 4</ScTabsContent>
</ScTabs>

            `}</pre>
          </ScBox>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Tab - primary_Style" />
            <ScBox g={20} className="grid grid-cols-1 gap-4">
              <ScTab tabListData={listSample} />
            </ScBox>
            <pre className={preStyle}>{`
const listSample = [
  { name: "라벨1", content: <div>1</div> },
  { name: "라벨2", content: <div>2</div> },
  { name: "라벨3", content: <div>3</div> },
  { name: "라벨4", content: <div>3</div> },
];
ScTab 컴포넌트 사용 예시:
<ScTab tabListData={listSample} />
ScTab 컴포넌트 내부 구현 예시: 이대로 사용가능
<ScTabs defaultValue="라벨1">
  <ScTabsList cols={4}>
    <ScTabsTrigger value="라벨1">라벨1</ScTabsTrigger>
    <ScTabsTrigger value="라벨2">라벨2</ScTabsTrigger>
    <ScTabsTrigger value="라벨3">라벨3</ScTabsTrigger>
    <ScTabsTrigger value="라벨4">라벨4</ScTabsTrigger>
  </ScTabsList>
  <ScTabsContent value="라벨1">콘텐츠 1</ScTabsContent>
  <ScTabsContent value="라벨2">콘텐츠 2</ScTabsContent>
  <ScTabsContent value="라벨3">콘텐츠 3</ScTabsContent>
  <ScTabsContent value="라벨4">콘텐츠 4</ScTabsContent>
</ScTabs>

            `}</pre>
          </ScBox>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Tab - segment_Style" />
            <ScBox g={20} className="grid grid-cols-1 gap-4">
              <ScTab variant="segment" tabListData={listSample} />
            </ScBox>
            <pre className={preStyle}>{`const listSample = [
  { name: "라벨1", content: <div>1</div> },
  { name: "라벨2", content: <div>2</div> },
  { name: "라벨3", content: <div>3</div> },
  { name: "라벨4", content: <div>3</div> },
];
ScTab 컴포넌트 variant = segment 타입 사용 예시:
<ScTab variant="segment" tabListData={listSample} />
ScTabs 컴포넌트 내부 구현 예시: 이대로 사용가능
<ScTabs defaultValue="라벨1">
  <ScTabsList variant="segment" cols={4}>
    <ScTabsTrigger variant="segment" value="라벨1">
      라벨1
    </ScTabsTrigger>
    <ScTabsTrigger variant="segment" value="라벨2">
      라벨2
    </ScTabsTrigger>
    <ScTabsTrigger variant="segment" value="라벨3">
      라벨3
    </ScTabsTrigger>
    <ScTabsTrigger variant="segment" value="라벨4">
      라벨4
    </ScTabsTrigger>
  </ScTabsList>
  <ScTabsContent value="라벨1">콘텐츠 1</ScTabsContent>
  <ScTabsContent value="라벨2">콘텐츠 2</ScTabsContent>
  <ScTabsContent value="라벨3">콘텐츠 3</ScTabsContent>
  <ScTabsContent value="라벨4">콘텐츠 4</ScTabsContent>
</ScTabs>

            `}</pre>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  );
}
