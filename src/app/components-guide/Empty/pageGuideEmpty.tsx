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
import { EmptyBasic,EmptyOutline,EmptyBackground,EmptyAvatar,EmptyAvatarGroup,EmptyInputGroup} from './sample/index'

import { GuidePageProps } from '../componetLayout.types'

const ComponentGuideEmpytPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;


  const emptyList = [
    { name: 'basic', com: <EmptyBasic preStyle={ preStyle} /> },
    { name: 'outline', com: <EmptyOutline preStyle={ preStyle} /> },
    { name: 'background', com: <EmptyBackground preStyle={ preStyle} /> },
    { name: 'EmptyAvatar', com: <EmptyAvatar preStyle={ preStyle} /> },
    { name: 'EmptyAvatarGroup', com: <EmptyAvatarGroup preStyle={ preStyle} /> },
    { name: 'EmptyInputGroup', com: <EmptyInputGroup preStyle={ preStyle} /> },
  ]

  return (
    <>
      <h2 className="text-2xl font-semibold">Empty</h2>
      <Tabs defaultValue={emptyList[0].name}>
          <TabsList>
            {emptyList.map((item) => (
              <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
            ))}
          </TabsList>
          {emptyList.map((item) => (
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


export { ComponentGuideEmpytPage };
