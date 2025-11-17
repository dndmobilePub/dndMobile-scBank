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

import { GuidePageProps } from './../../componetLayout.types'


const CarouselBasic = React.forwardRef<HTMLDivElement, GuidePageProps> (
  (props, ref) => {
  const { preStyle } = props;
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
            
        <pre className={preStyle}>
          {`import {  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,  
  type CarouselApi,  } from '@/components/ui/button'
const [date, setDate] = React.useState<Date | undefined>(new Date())
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        </pre>
      </div>
    );
  }
);
export { CarouselBasic } ;
