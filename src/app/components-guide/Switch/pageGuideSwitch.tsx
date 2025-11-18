"use client"
import * as React from "react"
import { toast } from "sonner"
import {
  Label,
  Switch 
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'


const ComponentGuideSwitchPage = React.forwardRef<HTMLDivElement, GuidePageProps >( (props, ref) => {
  const { preStyle } = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Switch</h2>
        <div className="flex justify-center flex-col gap-6">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
      </>
      <pre className={preStyle}>
{`import { Switch } from "@/components/ui/switch"

<Switch />
`}
      </pre>

    </>
  );

}) 

export { ComponentGuideSwitchPage };
