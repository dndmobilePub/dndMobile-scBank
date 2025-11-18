"use client"
import * as React from "react"
import {
  Spinner 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const SpinnerColor = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-6">
        <Spinner className="size-6 text-red-500" />
        <Spinner className="size-6 text-green-500" />
        <Spinner className="size-6 text-blue-500" />
        <Spinner className="size-6 text-yellow-500" />
        <Spinner className="size-6 text-purple-500" />
      </div>
        
    </div>

  );
  }
);
export { SpinnerColor } ;
