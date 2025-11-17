"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis  } from "recharts"
import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent,ChartLegend, ChartLegendContent  } from "@/components/index";

import { GuidePageProps } from './../../componetLayout.types'


 const chartData = [
    { month: "January", desktop: 186, mobile: 80,  },
    { month: "February", desktop: 305, mobile: 200,  },
    { month: "March", desktop: 237, mobile: 120,  },
    { month: "April", desktop: 73, mobile: 190,  },
    { month: "May", desktop: 209, mobile: 130,  },
    { month: "June", desktop: 214, mobile: 140 , },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
 
  } satisfies ChartConfig

const ChartBar = React.forwardRef<HTMLDivElement, GuidePageProps> (
  (props, ref, ) => {
  const { preStyle} = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {
          chartConfig && (
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
          )
        }
          </div>
        <pre className={preStyle}>
           {`
 const chartData = [
    { month: "January", desktop: 186, mobile: 80,  },
    { month: "February", desktop: 305, mobile: 200,  },
    { month: "March", desktop: 237, mobile: 120,  },
    { month: "April", desktop: 73, mobile: 190,  },
    { month: "May", desktop: 209, mobile: 130,  },
    { month: "June", desktop: 214, mobile: 140 , },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
 
  } satisfies ChartConfig


<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
    <BarChart accessibilityLayer data={chartData}> 
      <CartesianGrid vertical={false} /> <--- // background Grid
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <ChartTooltip content={<ChartTooltipContent />} />   <--- // Tooltip
      <ChartLegend content={<ChartLegendContent />} /> <--- // legend
      // Chart Bar 
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
    </BarChart>
  </ChartContainer>
          
          
`}
        </pre>
      </div>
    );
  }
);
export { ChartBar } ;
