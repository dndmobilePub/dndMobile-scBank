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
  },
  {
    name: 'Letter spacing',
    value: [
      {value: -0.3},
      {value :0},
    ]
  }
  
]

const TypographyComponent = [
  {
    name: 'Korea Typeface',
    value: [
      {type : 'heading', name: 'h1', size: 32, height: 44, spacing: -0.3, weightB: 700},
      {type : 'heading', name: 'h2', size: 30, height: 40, spacing: -0.3, weightB: 700},
      {type : 'heading', name: 'h3', size: 24, height: 32, spacing: -0.3, weightB: 700, weightM: 500},
      {type : 'heading', name: 'h4', size: 20, height: 28, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400},
      {type : 'heading', name: 'h5', size: 18, height: 26, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400},
      {type : 'body', name: 'lg', size: 16, height: 24, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400},
      {type : 'body', name: 'md', size: 14, height: 20, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400},
      {type : 'body', name: 'sm', size: 13, height: 18, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400},
    ]
  },
  
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
                    <TableCell className="py-4 text-center not-even:font-medium">{item.name}/{size.value}</TableCell>
                    <TableCell className="py-4 text-center">{size.value}</TableCell>
                    {/* size */}
                    {item.name === 'Font size' &&  <TableCell className='py-4 text-center' style={{ fontSize: `${size.value}px` }}>ABC 가나다</TableCell>}
                    {/* lineheight */}
                    {item.name === 'Line height' && <TableCell className='py-4 text-center' style={{lineHeight : `${size.value}px`}}>In a world where creativity knows no bounds, <br/>
                      ideas flow like a river.
                    </TableCell>}
                    {/* fontweight */}
                    {item.name === 'Font weight' && <TableCell className='py-4 text-center' style={{fontWeight : `${size.value}`}}>ABC 가나다</TableCell>}
                    {/* letterspacing */}
                    {item.name === 'Letter spacing' && <TableCell className='py-4 text-center' style={{letterSpacing : `${size.value}px`}}>ABC 가나다</TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
        {TypographyComponent.map((item) => (
          <div key={item.name} className="flex flex-col gap-2 mt-6">
            <p className={titleStyle}>{item.name}</p>
            <Table className="bg-white">
              {/* <TableCaption>Font Size</TableCaption> */}
              <TableHeader className="bg-neutral-800 ">
                <TableRow>
                  <TableHead className="text-neutral-50 text-center not-[]:w-[200px]">Style name</TableHead>
                  <TableHead className="text-neutral-50 text-center">Font size</TableHead>
                  <TableHead className="text-neutral-50 text-center">Line height</TableHead>
                  <TableHead className="text-neutral-50 text-center">Letter Spacing</TableHead>
                  <TableHead className="text-neutral-50 text-center">Font weight</TableHead>
                  <TableHead className="text-neutral-50 text-center">Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {item.value.map((style, index) => (
                  <TableRow key={style.name}>
                    <TableCell className="py-4 text-center not-even:font-medium">{style.type}/{style.name}</TableCell>
                    <TableCell className="py-4 text-center">{style.size}px</TableCell>
                    <TableCell className="py-4 text-center">{style.height}px</TableCell>
                    <TableCell className="py-4 text-center">{style.spacing}px</TableCell>
                    <TableCell className="py-4 text-center">
                      {style.weightB && <>{style.weightB} </>}
                      {style.weightM && <><br />{style.weightM} </>}
                      {style.weightR && <><br />{style.weightR} </>}
                    </TableCell>
                    <TableCell className="py-4 text-center"></TableCell>
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