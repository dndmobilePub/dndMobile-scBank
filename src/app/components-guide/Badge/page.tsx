import React from "react";
import path from "path";
import { ComponentGuideBadgePage } from './pageGuideBadge';
import ComponentBreadcrumb  from './../componetBreadcrumb';


// 신규 가이드 페이지 등록시 여기에 추가
export default function ComponentCardPage() {

  const folderName = path.basename(__dirname);

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <ComponentBreadcrumb name={folderName} />
        
        <div className="p-5 mt-5 rounded-2xl bg-white dark:bg-gray-900">
          
          <ComponentGuideBadgePage/>

        </div>
        
      </div>
    </div>
  );
}
