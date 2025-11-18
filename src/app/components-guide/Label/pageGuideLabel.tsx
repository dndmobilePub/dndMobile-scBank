"use client"
import * as React from "react"

import {
  Checkbox,
  Label, 
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'


const ComponentGuideLabelPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Label</h2>
        <div className="max-w-md flex flex-col gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>
      </>
      <pre className={preStyle}>
{`import { Label  } from '@/components/ui/input'

<Label htmlFor="email">Your email address</Label>`}
      </pre>

    </>
  );

}) 

export { ComponentGuideLabelPage };
