"use client"
import * as React from "react"
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
  Spinner 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const SpinnerBasic = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
        <Item variant="muted">
          <ItemMedia>
            <Spinner />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
          </ItemContent>
          <ItemContent className="flex-none justify-end">
            <span className="text-sm tabular-nums">$100.00</span>
          </ItemContent>
        </Item>
      </div>
        
      <pre className={preStyle}>
        {`import { Spinner } from "@/components/ui/spinner"

<Spinner />`}
      </pre>
    </div>

  );
  }
);
export { SpinnerBasic } ;
