"use client"
import * as React from "react"
import { Calendar } from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'
  
const ComponentGuideCalendarPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
   const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Calendar</h2>
        <div className="flex items-center gap-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </div>
      </>
      <pre className={preStyle}>
        {`import { Calendar  } from '@/components/ui/button'
const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border"
/>`}
      </pre>
    </>
  );
})

export { ComponentGuideCalendarPage };
