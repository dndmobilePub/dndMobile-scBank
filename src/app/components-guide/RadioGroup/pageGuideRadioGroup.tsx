"use client"
import * as React from "react"

import {
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'



const ComponentGuideRadioGroupPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const { preStyle } = props;
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Radio Group</h2>
        <div className="flex justify-center flex-col gap-6">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
      </>
      <pre className={preStyle}>
{`import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
`}
      </pre>

    </>
  );

}) 

export { ComponentGuideRadioGroupPage };
