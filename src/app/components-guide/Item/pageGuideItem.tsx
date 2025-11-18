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
  ItemBasic,
  ItemVariants,
  ItemSize,
  ItemIcon,
  ItemAvatar,
  ItemImage,
  ItemGroupType,
  ItemHeaderType,
  ItemLink,
  ItemDropDown
} from './sample/index'

const ComponentGuideItemPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;


  const itemList = [
    { name: 'basic', com: <ItemBasic preStyle={ preStyle} /> },
    { name: 'variants', com: <ItemVariants /> },
    { name: 'size', com: <ItemSize /> },
    { name: 'icon', com: <ItemIcon /> },
    { name: 'avatar', com: <ItemAvatar /> },
    { name: 'image', com: <ItemImage /> },
    { name: 'group', com: <ItemGroupType /> },
    { name: 'header', com: <ItemHeaderType /> },
    { name: 'link', com: <ItemLink /> },
    { name: 'dropdwon', com: <ItemDropDown /> },
  ]

  return (
    <>
      <h2 className="text-2xl font-semibold">Item</h2>
      <Tabs defaultValue={itemList[0].name}>
        <TabsList>
          {itemList.map((item) => (
            <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
          ))}
        </TabsList>
        {itemList.map((item) => (
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


export { ComponentGuideItemPage };
