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
  type CarouselApi,  } from "@/components/index";

  function ComponentGuideCarouselPage() {
   const [date, setDate] = React.useState<Date | undefined>(new Date())

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

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full mb-4`;

  return (
    <div className="mt-3">
      <section className="mb-8 " >
        <h2 className="text-2xl font-semibold mb-4">Carousel</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-full">
            <h4 className="font-semibold mb-4">Base</h4>
            <div className="flex items-center justify-center gap-3 mb-4">
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
          {/* SIZE */}
          <div className="w-full">
            <h4 className="font-semibold mb-4">Sizes</h4>
            <div className="flex items-center justify-center gap-3 mb-4">
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
</Carousel>`}
          </pre>
           <pre className={preStyle}>
          {`
// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>`}
          </pre>
          {/* Spacing */}
          <div className="w-full">
            <h4 className="font-semibold mb-4">Spacing</h4>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Carousel
                opts={{
                align: "start",
              }}
              className="w-full max-w-xs">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
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
          </div>
          <pre className={preStyle}>
          {`
<Carousel>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>`}
          </pre>
          {/* Orientation */}
          <div className="w-full">
            <h4 className="font-semibold mb-4">Orientation</h4>
            <div className="flex items-center justify-center gap-3 mb-4 py-10">
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
          {/* Options */}
          <div className="w-full">
            <h4 className="font-semibold mb-4">Options - <a className="text-blue-600 underline" href='https://www.embla-carousel.com/api/options/' target="_blank">Embla Carousel docs</a></h4>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Carousel
                opts={{
                align: "start",
                loop: true,
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
          </div>
           <pre className={preStyle}>
          {`
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>`}
          </pre>
          {/* API */}
          <div className="w-full">
            <h4 className="font-semibold mb-4">API</h4>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div>
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
                <div className="text-muted-foreground py-2 text-center text-sm">
                  Slide {current} of {count}
                </div>
              </div>
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
          {/* Plugins - autoplay */}
          <div className="w-full">
            <h4 className="font-semibold mb-4">Plugins - autoplay</h4>
            <p className="mb-4">터미널에서 npm install embla-carousel-autoplay 설치한후 사용가능</p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div>
                <Carousel setApi={setApi} 
                  plugins={[plugin.current]}
                  opts={{
                    align: "start",
                    loop: true,
                  }} 
                  className="w-full max-w-xs"
                >
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
                <div className="text-muted-foreground py-2 text-center text-sm">
                  Slide {current} of {count}
                </div>
              </div>
            </div>
          </div>
           <pre className={preStyle}>
          {`
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}

export { ComponentGuideCarouselPage };
