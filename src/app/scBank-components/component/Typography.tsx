"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/index";
import * as React from "react"

const TypographyList = [
  {
    name: 'Font size',
    value: [
      {value: 13 },
      {value :14},
      {value :16},
      {value :17},
      {value :18},
      {value :24},
      {value :30},
      {value: 32 },
    ]
  },
  {
    name: 'Line height',
    value: [
      {value: 18 },
      {value :20},
      {value :24},
      {value :26},
      {value :28},
      {value :30},
      {value :32},
      {value: 40 },
      {value: 44 },
    ]
  },
  {
    name: 'Font weight',
    value: [
      {fontName : 'light', value: 300 },
      {fontName : 'regular', value :400},
      {fontName : 'medium', value :500},
      {fontName : 'bold', value :700},
    ]
  }
  
]

const TypographySample = React.forwardRef<HTMLDivElement>(
  () => {

    const titleStyle = 'text-[20px] text-neutral-800 font-bold'

    return (
      <>
        {TypographyList.map((item) => (
          <div key={item.name} className="flex flex-col gap-2 mt-6">
            <p className={titleStyle}>{item.name}</p>
            <Table className="bg-white">
              {/* <TableCaption>Font Size</TableCaption> */}
              <TableHeader className="bg-neutral-800 ">
                <TableRow>
                  <TableHead className="text-neutral-50 text-center not-[]:w-[200px]">Variable name</TableHead>
                  <TableHead className="text-neutral-50 text-center">Value</TableHead>
                  <TableHead className="text-neutral-50 text-center">Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {item.value.map((size) => (
                  <TableRow key={size.value}>
                    <TableCell className="py-4 text-center not-even:font-medium">font size/{size.value}</TableCell>
                    <TableCell className="py-4 text-center">{size.value}</TableCell>
                    {/* size */}
                    {item.name === 'Font size' &&  <TableCell className='py-4 text-center' style={{ fontSize: `${size.value}px` }}>ABC 가나다</TableCell>}
                    {/* lineheight */}
                    {item.name === 'Line height' && <TableCell className='py-4 text-center' style={{lineHeight : `${size.value}px`}}>In a world where creativity knows no bounds, <br/>
                      ideas flow like a river.
                    </TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
        
      </>
    )
  }
)

export default TypographySample;