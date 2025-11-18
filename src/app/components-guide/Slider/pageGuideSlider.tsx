"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Slider  
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'


type SliderProps = React.ComponentProps<typeof Slider>
const ComponentGuideSliderPage = React.forwardRef<HTMLDivElement, GuidePageProps & SliderProps>( (props) => {
  const { preStyle, className } = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Slider</h2>
        <div className="flex justify-center flex-col gap-6">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
          />
        </div>
      </>
      <pre className={preStyle}>
{`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[33]} max={100} step={1} />

`}
      </pre>

    </>
  );

}) 

export { ComponentGuideSliderPage };
