"use client"
import * as React from "react"
import {
  Spinner,
  Button,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const SpinnerButton = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner />
        Processing
      </Button>
    </div>

  );
  }
);
export { SpinnerButton } ;
