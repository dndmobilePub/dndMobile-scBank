"use client"
import * as React from "react"
import {
  Card, 
  CardContent,
  CardTitle,
  CardHeader,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'

import {
  TextareaBasic,
  TextareaDisabled,
  TextareaWithLabel,
  TextareaWithText,
  TextareaWithButton,
  // SpinnerInputGroup,
  // SpinnerEmpty,
  // SpinnerItem
} from './sample/index'



const ComponentGuideTextareaPage = React.forwardRef<HTMLDivElement, GuidePageProps >( (props, ref) => {
  const { preStyle } = props;

  const TextareaList = [
    { name: 'basic', com: <TextareaBasic preStyle={ preStyle} /> },
    { name: 'Disabled', com: <TextareaDisabled /> },
    { name: 'WithLabel', com: <TextareaWithLabel /> },
    { name: 'WithText', com: <TextareaWithText /> },
    { name: 'WithButton', com: <TextareaWithButton /> },
  ]

  return (
    <>
      <h2 className="text-2xl font-semibold">Textarea</h2>
      <Tabs defaultValue={TextareaList[0].name}>
        <TabsList>
          {TextareaList.map((item) => (
            <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
          ))}
        </TabsList>
        {TextareaList.map((item) => (
          <TabsContent key={item.name} value={item.name}>
            <Card className="w-full mt-2" key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                {/* {item.subText ?? <p>{item.subText}</p> } */}
              </CardHeader>
              <CardContent>
                {item.com}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
     

    </>
  );

}) 

export { ComponentGuideTextareaPage };
