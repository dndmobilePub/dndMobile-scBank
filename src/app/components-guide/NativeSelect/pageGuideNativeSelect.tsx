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
  NativeSelectBasic,
  NativeSelectWidthGroups,
  NativeSelectDisabledState,
  NativeSelectInvalidState,
} from './sample/index'

const ComponentGuideNativeSelectPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;
    const kbdList = [
    { name: 'Basic', com: <NativeSelectBasic preStyle={ preStyle} /> },
    { name: 'With Groups', com: <NativeSelectWidthGroups preStyle={ preStyle}/> },
    { name: 'Disabled State', com: <NativeSelectDisabledState /> },
    { name: 'Invalid State', com: <NativeSelectInvalidState preStyle={ preStyle}/> },
  ]
  return (
    <>
        <h2 className="text-2xl font-semibold">NativeSelect</h2>
        <Tabs defaultValue={kbdList[0].name}>
        <TabsList>
          {kbdList.map((item) => (
            <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
          ))}
        </TabsList>
        {kbdList.map((item) => (
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

export { ComponentGuideNativeSelectPage };
