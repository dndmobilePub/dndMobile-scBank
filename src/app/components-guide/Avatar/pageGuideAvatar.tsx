"use client"
import * as React from "react"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'

const ComponentGuideAvatarPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Avatar</h2>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/assets/avif-test-image.avif" alt="avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Jane Doe</div>
            <div className="text-sm text-gray-500">Product Manager</div>
          </div>
        </div>

        <pre className={preStyle}>
{`import { Avatar } from '@/components/ui/avatar'

<Avatar>
  <Avatar.Image src="/path/to/img.jpg" alt="avatar" />
</Avatar>`}
        </pre>
      </>
    </>
  );
})

export { ComponentGuideAvatarPage };
