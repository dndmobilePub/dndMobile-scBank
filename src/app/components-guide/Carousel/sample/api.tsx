"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, 
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,  
  type CarouselApi,
} from "@/components/index";

import { GuidePageProps } from '../../componetLayout.types'


const CarouselApiType = React.forwardRef<HTMLDivElement, GuidePageProps> (
  (props, ref) => {
  const { preStyle } = props;
  const[api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
    
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        
        <Carousel setApi={setApi} opts={{
          align: "start",
          loop: true,
        }} 
        className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-muted-foreground py-2 text-center text-sm w-full">
          Slide {current} of {count}
        </div> 
      </div>
            
      <pre className={preStyle}>
    {`
import { type CarouselApi } from "@/components/index"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}`}
        </pre>
      </div>
    );
  }
);
export { CarouselApiType } ;
