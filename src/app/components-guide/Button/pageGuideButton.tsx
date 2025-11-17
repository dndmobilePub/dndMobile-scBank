"use client"
import * as React from "react"

import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'

const ComponentGuideButtonPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Button</h2>
        <div className="flex items-center gap-3">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline" size="icon" aria-label="Submit">
            <ArrowUpIcon />
          </Button>
        </div>
      </>
      <pre className={preStyle}>
        {`import { Button } from '@/components/ui/button'

<Button variant="default">Primary</Button>`}
      </pre>
    </>
  );
})

export { ComponentGuideButtonPage };
