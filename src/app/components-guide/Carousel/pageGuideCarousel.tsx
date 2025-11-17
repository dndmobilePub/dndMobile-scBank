"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, 
  CardContent,
  CardTitle,
  CardHeader,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type CarouselApi,
} from "@/components/index";

import {
  CarouselBasic,
  CarouselSize,
  CarouselSpacing,
  CarouselOrientation,
  CarouselOption,
  CarouselApiType,
  CarouselPlugins
} from './sample/index'

  
import { GuidePageProps } from './../componetLayout.types'



const ComponentGuideCarouselPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;
  
  const carouselList = [
    {name : 'Basic' , com : <CarouselBasic preStyle={preStyle}/> },
    {name : 'Size' , com : <CarouselSize preStyle={preStyle}/> },
    {name : 'Spacing' , com : <CarouselSpacing preStyle={preStyle}/> },
    {name : 'Orientation' , com : <CarouselOrientation preStyle={preStyle}/> },
    {name : 'Options' , subText : <a className="text-blue-600 underline" href='https://www.embla-carousel.com/api/options/' target="_blank">Embla Carousel docs</a>, com : <CarouselOption preStyle={preStyle}/> },
    {name : 'Api' , subText : '터미널에서 npm install embla-carousel-autoplay 설치한후 사용가능'  , com : <CarouselApiType preStyle={preStyle}/> },
    {name : 'Plugins' , com : <CarouselPlugins preStyle={preStyle}/> },
  ]
  
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Carousel</h2>
        <div className="">
          <Tabs defaultValue={carouselList[0].name}>
            <TabsList>
              {carouselList.map((item) => (
                <TabsTrigger key={item.name} value={item.name}>{item.name}</TabsTrigger>  
              ))}
            </TabsList>
            {carouselList.map((item) => (
              <TabsContent key={item.name} value={item.name}>
                <Card className="w-full mt-2" key={item.name}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    {item.subText ?? <p>{item.subText}</p> }
                  </CardHeader>
                  <CardContent>
                    {item.com}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </>
    </>
  );
})

export { ComponentGuideCarouselPage };
