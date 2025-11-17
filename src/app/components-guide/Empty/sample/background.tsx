"use client"
import * as React from "react"
import { IconBell } from "@tabler/icons-react"
import { RefreshCcwIcon } from "lucide-react"
import {
  Button ,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const EmptyBackground = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div  className="flex flex-wrap gap-6">
      <Empty className="from-muted/50 to-background h-full bg-linear-to-b from-30%">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <RefreshCcwIcon />
          Refresh
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
export { EmptyBackground } ;
