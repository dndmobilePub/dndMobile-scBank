"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis  } from "recharts"
import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent,ChartLegend, ChartLegendContent  } from "@/components/index";

  function ComponentGuideChartlPage() {
   const [date, setDate] = React.useState<Date | undefined>(new Date())



  const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full mb-4`;
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

  return (
    <div className="mt-3">
      <section className="mb-8 " >
        <h2 className="text-2xl font-semibold mb-4">Chart</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-full">
            <h4 className="font-semibold mb-4">Bar</h4>
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
      </section>
    </div>
  );
}

export { ComponentGuideChartlPage };
