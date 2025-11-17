"use client"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'

const ComponentGuideHoverCardPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;


  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Field</h2>
        <div className="flex justify-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="text-muted-foreground text-xs">
                    Joined December 2021
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </>

      <pre className={preStyle}>
          {`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const form = useForm()
 
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>`}
        </pre>
    </>
  );
}) 


export { ComponentGuideHoverCardPage };
