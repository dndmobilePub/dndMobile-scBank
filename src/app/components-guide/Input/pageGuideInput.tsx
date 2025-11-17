"use client"
import * as React from "react"

import { Input } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'


const ComponentGuideInputPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Form / Input</h2>
        <div className="max-w-md">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input placeholder="you@example.com" className="mb-3" />
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input placeholder="••••••••" type="password" />
        </div>
      </>
      <pre className={preStyle}>
{`import { Input } from '@/components/ui/input'

<Input placeholder="you@example.com" />`}
      </pre>

    </>
  );

}) 

export { ComponentGuideInputPage };
