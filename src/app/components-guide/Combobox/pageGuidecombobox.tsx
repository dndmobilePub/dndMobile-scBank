"use client"
import * as React from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'

import { ComboboxBasic , ComboboxPopover, ComboboxDropdown, ComboboxResponsive } from './sample/index'

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const ComponentGuideComboboxPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
    const {preStyle} = props;

  const comboboxList = [
    {name : 'basic' , com : <ComboboxBasic data={frameworks}/> },
    {name : 'popover' , com : <ComboboxPopover data={frameworks}/> },
    {name : 'Dropdown - Menu' , com : <ComboboxDropdown data={frameworks}/> },
    {name : 'Reponsive' , com : <ComboboxResponsive data={frameworks}/> },
  ]

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Combobox</h2>
        <div className="flex flex-wrap gap-4">
          {comboboxList.map((data)=> (
            <Card className="w-[calc(50%-0.5rem)]" key={data.name}>
              <CardHeader>
                <CardTitle>{data.name} - Combobox</CardTitle>
              </CardHeader>
              <CardContent>
                {data.com}
              </CardContent>
            </Card>
          ))}
          

          
          {/* <pre className={preStyle}>
          {`
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />

`}
          </pre> */}
        </div>
      </>
    </>
  );
})

export { ComponentGuideComboboxPage };
