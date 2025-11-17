"use client"
import * as React from "react"

import { SearchIcon } from "lucide-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
   InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const EmptyInputGroup = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div  className="flex flex-wrap gap-6">
      <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
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
export { EmptyInputGroup } ;
