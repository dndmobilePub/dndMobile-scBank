"use client"
import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'


const KbdInputGroup  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>

  );
  }
);
export { KbdInputGroup } ;
