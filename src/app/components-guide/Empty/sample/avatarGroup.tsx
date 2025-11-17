"use client"
import * as React from "react"

import { PlusIcon } from "lucide-react"
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

const EmptyAvatarGroup = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div  className="flex flex-wrap gap-6">
      <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
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
export { EmptyAvatarGroup } ;
