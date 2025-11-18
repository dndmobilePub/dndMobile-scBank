"use client"
import * as React from "react"
import {
  Spinner,
  Badge ,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const SpinnerBadge = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Processing
      </Badge>
    </div>

  );
  }
);
export { SpinnerBadge } ;
