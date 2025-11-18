"use client"
import * as React from "react"

import {
Kbd, KbdGroup 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'




const KbdGroupType  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <p className="text-muted-foreground text-sm">
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
    </div>

  );
  }
);
export { KbdGroupType } ;
