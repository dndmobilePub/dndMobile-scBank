"use client"
import * as React from "react"
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'

const ComponentGuideTooltipPage = React.forwardRef<HTMLDivElement, GuidePageProps >( (props, ref) => {
  const { preStyle } = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Tabs</h2>
        <div className="flex justify-center flex-col gap-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </>
      <pre className={preStyle}>
{`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>
`}
      </pre>

    </>
  );

}) 

export { ComponentGuideTooltipPage };
