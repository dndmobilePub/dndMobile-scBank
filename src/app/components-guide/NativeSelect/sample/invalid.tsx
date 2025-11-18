"use client"
import * as React from "react"

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const NativeSelectInvalidState  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <div className="flex flex-col w-full gap-6">
      <NativeSelect aria-invalid="true">
        <NativeSelectOption value="">Select role</NativeSelectOption>
        <NativeSelectOption value="admin">Admin</NativeSelectOption>
        <NativeSelectOption value="editor">Editor</NativeSelectOption>
        <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
        <NativeSelectOption value="guest">Guest</NativeSelectOption>
      </NativeSelect>
      <pre className={preStyle}>
        {`<NativeSelect aria-invalid="true">
  <NativeSelectOption value="">Select a country</NativeSelectOption>
  <NativeSelectOption value="us">United States</NativeSelectOption>
  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
  <NativeSelectOption value="ca">Canada</NativeSelectOption>
</NativeSelect>`}
      </pre>
    </div>

  );
  }
);
export { NativeSelectInvalidState } ;
