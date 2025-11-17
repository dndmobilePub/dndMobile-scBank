import React from "react";
import path from "path";
import { ComponentGuideInputPage } from './pageGuideInput';
import GuidePageLayout from './../guideLayout';

const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full`;

export default function ComponentInputPage() {
  const folderName = path.basename(__dirname);
  return (
    <GuidePageLayout name={folderName}>
      <ComponentGuideInputPage preStyle={preStyle}/>
    </GuidePageLayout>
  );
}
