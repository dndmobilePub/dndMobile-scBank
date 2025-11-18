"use client"
import * as React from "react"

import {
  Progress 
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'



const ComponentGuideProgressPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const { preStyle } = props;
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Progress</h2>
        <div className="flex justify-center flex-col gap-6">
          <Progress value={progress} className="w-[60%]" />
        </div>
      </>
      <pre className={preStyle}>
{`import { Progress } from "@/components/ui/progress"

<Progress value={33} />
`}
      </pre>

    </>
  );

}) 

export { ComponentGuideProgressPage };
