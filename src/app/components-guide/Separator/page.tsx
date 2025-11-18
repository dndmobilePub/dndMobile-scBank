import React from "react";
import path from "path";
import { ComponentGuideSeparatorPage } from './pageGuideSeparator';
import GuidePageLayout from '../guideLayout';

const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full`;

export default function ComponentSeparatorPage() {
  const folderName = path.basename(__dirname);
  return (
    <GuidePageLayout name={folderName}>
      <ComponentGuideSeparatorPage preStyle={preStyle}/>
    </GuidePageLayout>
  );
}
