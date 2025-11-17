"use client"
import * as React from "react"
import { IconCloud } from "@tabler/icons-react"
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

const EmptyOutline = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div  className="flex flex-wrap gap-6">
      <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
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
export { EmptyOutline } ;
