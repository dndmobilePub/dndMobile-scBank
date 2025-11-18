"use client"
import * as React from "react"
import {
  Textarea,
  Label,
  Button 
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const TextareaBasic = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

    return (
    
    <div className="flex w-full flex-col gap-6">
        <Textarea placeholder="Type your message here." />
        <pre className={preStyle}>
          {`import { Textarea } from "@/components/ui/textarea"

  <Textarea />`}
        </pre>
    </div>
  );
  }
);

const TextareaDisabled = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <Textarea placeholder="Type your message here." disabled />
  );
  }
);

const TextareaWithLabel = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
  }
);

const TextareaWithText = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  );
  }
);

const TextareaWithButton = React.forwardRef<HTMLDivElement, GuidePageProps> (

  ( props, ref ) => {

  const { preStyle } = props;

  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
  }
);

export { TextareaBasic, TextareaDisabled, TextareaWithLabel, TextareaWithText, TextareaWithButton } ;
