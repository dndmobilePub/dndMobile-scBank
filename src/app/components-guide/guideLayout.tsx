import React, { Children } from "react";

import Link from "next/link"

import { ComponentLayoutProps } from "./componetLayout.types";
import ComponentBreadcrumb  from './componetBreadcrumb';

const GuidePageLayout = React.forwardRef<HTMLDivElement, ComponentLayoutProps > (
  ({
    name, 
    children,
  }) => {

    return (
      <div className="min-h-screen py-12 px-6 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <ComponentBreadcrumb name={name} />
          <div className="p-5 mt-5 rounded-2xl bg-white dark:bg-gray-900">
              <section className="flex gap-6 flex-col">
                {children}  
              </section>
          </div>
        </div>
      </div>
    );
  }

) 

GuidePageLayout.displayName = 'GuidePageLayout';

export default GuidePageLayout;