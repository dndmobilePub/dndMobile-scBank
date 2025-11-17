"use client"
import * as React from "react"
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"
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

const EmptyBasic = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div  className="flex flex-wrap gap-6">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
          <IconFolderCode />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button>Create Project</Button>
            <Button variant="outline">Import Project</Button>
          </div>
        </EmptyContent>
        <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
        >
            <a href="#">
            Learn More <ArrowUpRightIcon />
            </a>
        </Button>
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
export { EmptyBasic } ;
