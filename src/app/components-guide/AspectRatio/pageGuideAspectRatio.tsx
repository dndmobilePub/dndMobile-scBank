"use client"
import * as React from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'
const ComponentGuideAspectRatioPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Aspect-ratio</h2>
        <div className="flex items-center gap-3">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
        </div>
      </>
      <pre className={preStyle}>
{`import Image from "next/image"; 
import { AspectRatio } from "@/components/index";'

<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
<Image
  src="이미지 경로"
  alt="이미지 alt"
  fill
/>
</AspectRatio>`}
      </pre>
    </>
  );
})

export { ComponentGuideAspectRatioPage };
