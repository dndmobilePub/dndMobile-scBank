import React from "react";
import path from "path";
import { ComponentGuideAccordionPage } from './pageGuideAccordion';
import GuidePageLayout from './../guideLayout';

const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full`;

export default function ComponentAccordionPage() {
  const folderName = path.basename(__dirname);
  
  return (
    <GuidePageLayout name={folderName}>
      <ComponentGuideAccordionPage preStyle={preStyle}/>
    </GuidePageLayout>

  );
}
