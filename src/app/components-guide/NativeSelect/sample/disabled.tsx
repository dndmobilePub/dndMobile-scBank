"use client"
import * as React from "react"

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'


const NativeSelectDisabledState  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {


  return (
    <div className="flex w-full flex-col gap-6">
      <NativeSelect disabled>
        <NativeSelectOption value="">Select priority</NativeSelectOption>
        <NativeSelectOption value="low">Low</NativeSelectOption>
        <NativeSelectOption value="medium">Medium</NativeSelectOption>
        <NativeSelectOption value="high">High</NativeSelectOption>
        <NativeSelectOption value="critical">Critical</NativeSelectOption>
      </NativeSelect>
    </div>

  );
  }
);
export { NativeSelectDisabledState } ;
