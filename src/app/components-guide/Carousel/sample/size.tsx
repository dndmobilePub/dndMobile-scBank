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


const CarouselSize = React.forwardRef<HTMLDivElement, GuidePageProps> (
  (props, ref) => {
  const { preStyle } = props;
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <Carousel
            opts={{
            align: "start",
          }}
          className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
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
          {`
// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>

// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>`}
        </pre>
      </div>
    );
  }
);
export { CarouselSize } ;
