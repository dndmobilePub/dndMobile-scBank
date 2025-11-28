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
import * as React from "react";
import ScText from "../component/ui/scText";

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

const TypographyComponentTableList = [
  {
    name: 'Korea Typeface',
    value: [
      {type : 'heading', tag: 'h1', name: 'h1', size: 32, height: 44, spacing: -0.3, weightB: 700, valueName:'ABC', ftype1:'h1'},
      {type : 'heading', tag: 'h2', name: 'h2', size: 30, height: 40, spacing: -0.3, weightB: 700, valueName:'ABC', ftype1:'h2'},
      {type : 'heading', tag: 'h3', name: 'h3', size: 24, height: 32, spacing: -0.3, weightB: 700, weightM: 500, valueName:'ABC', ftype1:'h3-b', ftype2:'h3-m'},
      {type : 'heading', tag: 'h4', name: 'h4', size: 20, height: 28, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400, valueName:'ABC', ftype1:'h4-b', ftype2:'h4-m', ftype3:'h4'},
      {type : 'heading', tag: 'h5', name: 'h5', size: 18, height: 26, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400, valueName:'ABC', ftype1:'h5-b', ftype2:'h5-m', ftype3:'h5'},
      {type : 'body', tag: 'p', name: 'lg', size: 16, height: 24, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400, valueName:'ABC', ftype1:'lg-b', ftype2:'lg-m', ftype3:'lg'},
      {type : 'body', tag: 'span', name: 'md', size: 14, height: 20, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400, valueName:'ABC', ftype1:'md-b', ftype2:'md-m', ftype3:'md'},
      {type : 'body', tag: 'div', name: 'sm', size: 13, height: 18, spacing: -0.3, weightB: 700, weightM: 500, weightR: 400, valueName:'ABC', ftype1:'sm-b', ftype2:'sm-m', ftype3:'sm'},
    ]
  },
  
]

const TypographyComponent = [
  {
    name: 'Typography Component',
    // value: [
    //   {fontType:'h1', fontStyle:'h1', value:'h1입니다'},
    //   {fontType:'h2', fontStyle:'h2', value:'h2입니다'},
    //   {fontType:'h3', fontStyle:'h3-b', value:'h3 700 입니다'},
    //   {fontType:'h3', fontStyle:'h3-m', value:'h3 500 입니다'},
    //   {fontType:'h4', fontStyle:'h4-b', value:'h4 700 입니다'},
    //   {fontType:'h4', fontStyle:'h4-m', value:'h4 500 입니다'},
    //   {fontType:'h4', fontStyle:'h4', value:'h4 400 입니다'},
    //   {fontType:'h5', fontStyle:'h5-b', value:'h5 700 입니다'},
    //   {fontType:'h5', fontStyle:'h5-m', value:'h5 500 입니다'},
    //   {fontType:'h5', fontStyle:'h5', value:'h5 400 입니다'},
    //   {fontType:'p', fontStyle:'lg-b', value:'lg 700 입니다'},
    //   {fontType:'p', fontStyle:'lg-m', value:'lg 500 입니다'},
    //   {fontType:'p', fontStyle:'lg', value:'lg 400 입니다'},
    //   {fontType:'div', fontStyle:'md-b', value:'md 700 입니다'},
    //   {fontType:'div', fontStyle:'md-m', value:'md 500 입니다'},
    //   {fontType:'div', fontStyle:'md', value:'md 400 입니다'},
    //   {fontType:'span', fontStyle:'sm-b', value:'sm 700 입니다'},
    //   {fontType:'span', fontStyle:'sm-m', value:'sm 500 입니다'},
    //   {fontType:'span', fontStyle:'sm', value:'sm 400 입니다'},
    // ]
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
        {TypographyComponentTableList.map((item) => (
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
                  <TableHead className="text-neutral-50 text-center" colSpan={2}>Example</TableHead>
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
                    <TableCell className="py-4 text-center">
                      {style.weightB && <ScText as={style.tag} value={style.valueName} />}
                      {style.weightM && <ScText as={style.tag} style={{display:'block'}} value={style.valueName} />}
                      {style.weightR && <ScText as={style.tag} value={style.valueName} />}
                    </TableCell>
                    <TableCell className="py-4 text-center">
                      <ScText as="h2" style={{display:'block'}}  value={'가나다'} />
                      <ScText as="h4" style={{display:'block'}}  value={'가나다'} />
                      <ScText as="h5" fontStyle="h1" style={{display:'block'}} value={'가나다'} />
                      <ScText fontStyle="h4" style={{display:'block'}} value={'가나다'} />
                      <ScText as="li" style={{display:'block'}} value={'가나다'} />
                      <ScText as="li" fontStyle="lg" style={{display:'block'}} value={'가나다'} />
                    </TableCell>
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
                  <TableHead className="text-neutral-50 text-center">Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {item.value.map((style, index) => ( */}
                  <TableRow key={item.name}>
                    <TableCell className="py-4 text-center">
                      <ScText as="h2" value={'h2 입니다'} />
                      <ScText as="h4-b" value={'h4태그에 h4-b스타일입니다'} />
                      <ScText as="h5" fontStyle="h1" value={'h5태그 h1스타일입니다'} />
                      <ScText fontStyle="h4-m" value={'h4-m스타일입니다'} />
                      <ScText as="li" value={'li태그입니다'} />
                      <ScText as="li" fontStyle="lg" value={'li태그에 lg스타일입니다'} />
                    </TableCell>
                  </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </div>
        ))}
        
      </>
    )
  }
)

export { TypographySample };