"use client"
import * as React from "react"

import {
  ScrollArea ,
  Separator ,
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'


const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ComponentGuideScrollAreaPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const { preStyle } = props;

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Scroll Area</h2>
        <div className="flex justify-center flex-col gap-6">
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </div>
      </>
      <pre className={preStyle}>
{`import { ScrollArea } from "@/components/ui/scroll-area"
"

<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>
`}
      </pre>

    </>
  );

}) 

export { ComponentGuideScrollAreaPage };
