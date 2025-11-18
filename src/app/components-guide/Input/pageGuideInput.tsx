"use client"
import * as React from "react"

import { Input,Label,Button  } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'


const ComponentGuideInputPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Input</h2>
        <div className="max-w-md flex flex-col gap-6">
          {/* base */}
          <div className="flex justify-between gap-4 items-center">
            <p className="text-lg">Default</p>
            <Input type="email" placeholder="Email" />
          </div>
          {/* File */}
          <div className="flex justify-between gap-4 items-center">
            <p className="text-lg">File</p>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </div>
          {/* Disabled */}
          <div className="flex justify-between gap-4 items-center">
            <p className="text-lg">Disabled</p>
            <Input disabled type="email" placeholder="Email" />
          </div>
          {/* With Label */}
          <div className="flex justify-between gap-4 items-center">
            <p className="text-lg">With Label</p>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          {/* With Button */}
          <div className="flex justify-between gap-4 items-center">
            <p className="text-lg">With Button</p>
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit" variant="outline">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </>
      <pre className={preStyle}>
{`import { Input } from '@/components/ui/input'

<Input />`}
      </pre>

    </>
  );

}) 

export { ComponentGuideInputPage };
