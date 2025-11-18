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
  SpinnerBasic,
  SpinnerSize,
  SpinnerColor,
  SpinnerButton,
  SpinnerBadge,
  SpinnerInputGroup,
  SpinnerEmpty,
  SpinnerItem
} from './sample/index'

const ComponentGuideSpinnerPage = React.forwardRef<HTMLDivElement, GuidePageProps >( (props, ref) => {
  const { preStyle } = props;

    const SpinnerList = [
    { name: 'basic', com: <SpinnerBasic preStyle={ preStyle} /> },
    { name: 'size', com: <SpinnerSize /> },
    { name: 'color', com: <SpinnerColor /> },
    { name: 'button', com: <SpinnerButton /> },
    { name: 'badge', com: <SpinnerBadge /> },
    { name: 'Input Group', com: <SpinnerInputGroup /> },
    { name: 'empty', com: <SpinnerEmpty /> },
    { name: 'item', com: <SpinnerItem /> },
  ]

  return (
    <>
      <h2 className="text-2xl font-semibold">Spinner</h2>
      <Tabs defaultValue={SpinnerList[0].name}>
        <TabsList>
          {SpinnerList.map((item) => (
            <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
          ))}
        </TabsList>
        {SpinnerList.map((item) => (
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

export { ComponentGuideSpinnerPage };
