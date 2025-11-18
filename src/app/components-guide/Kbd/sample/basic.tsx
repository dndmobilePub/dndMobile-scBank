"use client"
import * as React from "react"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"
import {
  Kbd, KbdGroup 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const KbdBasic = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
        
      <pre className={preStyle}>
        {`import { Kbd } from "@/components/ui/kbd"

<Kbd>Ctrl</Kbd>`}
      </pre>
    </div>

  );
  }
);
export { KbdBasic } ;
