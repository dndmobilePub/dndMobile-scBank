import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/index";
import ColorSample from "./guide/color";
import { AppearanceSample, TypographySample, CardStackDragFollowReact, PopAreaSelect } from "./guide/index";
import { colorList } from "./guide/colorList";
import { SamplePage } from "./guide/page/SamplePage";

// SC은행 컴포넌트 가이드
export default function ComponentGuidePage() {
  const sampleTemple = [
    { name: "Color", comp: <ColorSample colorList={colorList} /> },
    { name: "Typography", comp: <TypographySample /> },
    { name: "scComponent", comp: <SamplePage /> },
    { name: "Appearance", comp: <AppearanceSample /> },
    { name: "cardSample", comp: <CardStackDragFollowReact /> },
    { name: "PopupAreaSelect", comp: <PopAreaSelect /> },
  ];

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">SC은행 컴포넌트 가이드</h1>
          {/* <p className="mt-2 text-gray-600 dark:text-gray-300">
            Shadcn UI 설치된 컴포넌트 예제와 사용방법을 가이드페이지입니다.
          </p>
          <p className="text-sm text-gray-500">
            사용 예제는 Tailwind 유틸리티 클래스를 함께 사용하여 스타일링 되어 있습니다.
          </p> */}
        </header>

        {/* 상단 tab */}
        <div className="flex w-full flex-col gap-6">
          <Tabs defaultValue="Color" className="w-full">
            <TabsList>
              {sampleTemple.map((c, idx) => {
                return (
                  <TabsTrigger key={idx} value={c.name}>
                    {c.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {sampleTemple.map((v, idx) => {
              return (
                <TabsContent key={idx} value={v.name} className={idx === 0 ? "flex flex-col gap-[24] pt-[12]" : ""}>
                  {v.comp}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
