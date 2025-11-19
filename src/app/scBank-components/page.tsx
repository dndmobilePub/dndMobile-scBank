import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/index";

import guidePageList from './pageList';
import ColorSample from './component/color';


// SC은행 컴포넌트 가이드
export default function ComponentGuidePage() {
 
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
              <TabsTrigger value="Color">Color</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="Color" className="flex flex-col gap-[24] pt-[12]">
              <ColorSample />
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
          <ul className="flex flex-wrap gap-6 ">
            {guidePageList.map((page: any) => (
                <li className="w-1/4" key={page.name} value={page.name}>
                  <a className="text-primary-01" href={`/components-guide/${page.name}`}>
                    {page.name}
                  </a>
                </li>
              ))}
          </ul>
          {/* <Tabs defaultValue="Button">
            <TabsList>
              {guidePageList.map((page) => (
                <TabsTrigger key={page.name} value={page.name}>
                  {page.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {guidePageList.map((page) => (
              <TabsContent key={page.name} value={page.name}>
                {page.component}
              </TabsContent>
            ))}
          </Tabs> */}
        </div>
      </div>
    </div>
  );
}
