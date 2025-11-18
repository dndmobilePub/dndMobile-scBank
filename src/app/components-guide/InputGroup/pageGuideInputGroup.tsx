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
  InputGroupBasic,
  InputGroupIcon,
  InputGroupTextType,
  InputGroupButtonType,
  InputGroupTooltip,
  InputGroupTextArea,
  InputGroupSpinner,
  InputGroupLabel,
  InputGroupDropDown,
  InputGroupButtonGroup,
  InputGroupCustomInput,
} from './sample/index'

const ComponentGuideInputGroupPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;

    const InputGroupList = [
    { name: 'Basic', com: <InputGroupBasic preStyle={ preStyle} /> },
    { name: 'Icon', com: <InputGroupIcon /> },
    { name: 'Text', com: <InputGroupTextType /> },
    { name: 'Button', com: <InputGroupButtonType /> },
    { name: 'Tooltip', com: <InputGroupTooltip /> },
    { name: 'TextArea', com: <InputGroupTextArea /> },
    { name: 'Spinner', com: <InputGroupSpinner /> },
    { name: 'Label', com: <InputGroupLabel /> },
    { name: 'Dropdown', com: <InputGroupDropDown /> },
    { name: 'ButtonGroup', com: <InputGroupButtonGroup /> },
    { name: 'CustomInput', com: <InputGroupCustomInput /> },
  ]

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Field</h2>
        <Tabs defaultValue={InputGroupList[0].name}>
          <TabsList>
            {InputGroupList.map((item) => (
              <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
            ))}
          </TabsList>
          {InputGroupList.map((item) => (
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


export { ComponentGuideInputGroupPage };
