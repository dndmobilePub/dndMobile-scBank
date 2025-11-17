"use client"
import * as React from "react"

import { AccordionItem, AccordionTrigger, Accordion, AccordionContent } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'


const ComponentGuideAccordionPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle, ...rest} = props;
  const AccordionContentStyle= `flex flex-col gap-4 text-balance`


  return (
    <div ref={ref} {...rest}>
      <>
        <h2 className="text-2xl font-semibold">Accordion</h2>
        <div className="flex items-center gap-3 mb-4">

          <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion 1</AccordionTrigger>
              <AccordionContent className={`${AccordionContentStyle}`}>
                <p>
                  본문내용 1
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion 2</AccordionTrigger>
             <AccordionContent className={`${AccordionContentStyle}`}>
                <p>
                  본문내용 2
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Accordion 3</AccordionTrigger>
             <AccordionContent className={`${AccordionContentStyle}`}>
                <p>
                  본문내용 3
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
      </>
      <pre className={preStyle}>
{`import { AccordionItem,AccordionTrigger,Accordion,AccordionContent } from "@/components/index";'

<Accordion
    type="single"
    collapsible
    className="w-full"
    defaultValue="item-1"
  >
  <AccordionItem value="item-1">
    <AccordionTrigger>Accordion 1</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Accordion 2</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Accordion 3</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>`}
      </pre>
    </div>
  );
}) 

export { ComponentGuideAccordionPage };
