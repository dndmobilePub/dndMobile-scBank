import React from "react";
import path from "path";
import { ComponentGuideTablePage } from './pageGuideTable';
import GuidePageLayout from '../guideLayout';

const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full`;

export default function ComponentTablePage() {
  const folderName = path.basename(__dirname);
  return (
    <GuidePageLayout name={folderName}>
      <ComponentGuideTablePage preStyle={preStyle}/>
    </GuidePageLayout>
  );
}
