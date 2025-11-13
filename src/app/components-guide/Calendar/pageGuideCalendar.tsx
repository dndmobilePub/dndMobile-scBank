"use client"
import * as React from "react"
import { Calendar  } from "@/components/index";
function ComponentGuideCalendarPage() {
   const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
        <div className="flex items-center gap-3 mb-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
          {`import { Calendar  } from '@/components/ui/button'
const [date, setDate] = React.useState<Date | undefined>(new Date())
<Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
/>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideCalendarPage };
