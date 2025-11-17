"use client"
import * as React from "react"
import {
  Button ,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const EmptyAvatar = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div  className="flex flex-wrap gap-6">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="default">
            <Avatar className="size-12">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="grayscale"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </EmptyMedia>
          <EmptyTitle>User Offline</EmptyTitle>
          <EmptyDescription>
            This user is currently offline. You can leave a message to notify them
            or try again later.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Leave Message</Button>
        </EmptyContent>
      </Empty>
        
      <pre className={preStyle}>
        {`import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>`}
      </pre>
    </div>

  );
  }
);
export { EmptyAvatar } ;
