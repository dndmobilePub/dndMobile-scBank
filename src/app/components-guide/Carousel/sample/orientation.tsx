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


const CarouselOrientation = React.forwardRef<HTMLDivElement, GuidePageProps> (
  (props, ref) => {
  const { preStyle } = props;
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
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
        {`
<Carousel orientation="vertical | horizontal">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>`}
        </pre>
      </div>
    );
  }
);
export { CarouselOrientation } ;
