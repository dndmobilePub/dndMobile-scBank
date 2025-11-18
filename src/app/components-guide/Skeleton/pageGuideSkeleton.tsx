"use client"
import * as React from "react"

import {
  Skeleton  
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'


const ComponentGuideSkeletonPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const { preStyle } = props;

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Skeleton</h2>
        <div className="flex justify-center flex-col gap-6">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </>
      <pre className={preStyle}>
{`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-[20px] w-[100px] rounded-full" />

`}
      </pre>

    </>
  );

}) 

export { ComponentGuideSkeletonPage };
