"use client"
import * as React from "react"
import {
  Spinner 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const SpinnerSize = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-6">
        <Spinner className="size-3" />
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>
        
    </div>

  );
  }
);
export { SpinnerSize } ;
