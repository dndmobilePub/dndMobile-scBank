"use client"
import * as React from "react"

import {
  Button,
  Kbd ,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const KbdButton  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {



  return (
    <div className="flex w-full justify-center gap-6">
      <Button variant="outline" size="sm" className="pr-2">
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" className="pr-2">
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>

  );
  }
);
export { KbdButton } ;
