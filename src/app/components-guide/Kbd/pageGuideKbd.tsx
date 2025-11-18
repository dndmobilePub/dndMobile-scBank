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
  KbdBasic,
  KbdGroupType,
  KbdButton,
  KbdTooltip,
  KbdInputGroup,
} from './sample/index'

const ComponentGuideKbdPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;


  const kbdList = [
    { name: 'basic', com: <KbdBasic preStyle={ preStyle} /> },
    { name: 'group', com: <KbdGroupType /> },
    { name: 'button', com: <KbdButton /> },
    { name: 'tooltip', com: <KbdTooltip /> },
    { name: 'inputgroup', com: <KbdInputGroup /> },
  ]

  return (
    <>
      <h2 className="text-2xl font-semibold">Kbd</h2>
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


export { ComponentGuideKbdPage };
