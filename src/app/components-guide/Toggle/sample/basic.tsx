"use client"
import * as React from "react"
import { BookmarkIcon, Italic, Underline  } from "lucide-react"

import {
  Toggle ,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const ToggleBasic = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

    return (
      <div className="flex w-full flex-col gap-6">
        <Toggle
          aria-label="Toggle bookmark"
          size="sm"
          variant="outline"
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
        >
          <BookmarkIcon />
          Bookmark
        </Toggle>
        <pre className={preStyle}>
          {`import { Toggle } from "@/components/ui/toggle"

  <Toggle>Toggle</Toggle>`}
        </pre>
    </div>
  );
  }
);

const ToggleOutline = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
  }
);

const ToggleWithText = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  );
  }
);

const ToggleSmall = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
  }
);

const ToggleLarge = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
  }
);

const ToggleDisable = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  );
  }
);

export {
  ToggleBasic,
  ToggleOutline,
  ToggleWithText,
  ToggleSmall,
  ToggleLarge,
  ToggleDisable
};
