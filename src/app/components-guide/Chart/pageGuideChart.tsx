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

import { GuidePageProps } from './../componetLayout.types'

import {
  ChartBar,
  ChartArea,
} from './sample/index'

const ComponentGuideChartlPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;


    const chartList = [
      { name: 'Basic', com: <ChartBar preStyle={preStyle} /> },
      { name: 'Area', com: <ChartArea preStyle={preStyle} /> },
  ]

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Chart</h2>
        <Tabs defaultValue={chartList[0].name}>
          <TabsList>
            {chartList.map((item) => (
              <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
            ))}
          </TabsList>
          {chartList.map((item) => (
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
    </>
  );
})

export { ComponentGuideChartlPage };
