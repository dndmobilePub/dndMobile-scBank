"use client"
import * as React from "react"

import { colorList } from './colorList'

const ColorSample = React.forwardRef<HTMLDivElement>(
  () => {
    const Color = colorList;

    const getPrefix = (type: string) => {
      switch (type) {
        case "background":
          return "bg";
        case "border":
          return "bd";
        case "effect":
          return "shadow";
        default:
          return type;  // 그 외는 원래 이름 유지
      }
    };

    const handleCopy = (type: any, value: any) => {
      let prefix = getPrefix(type);
      const token = `sc-${prefix}-${value}`;


      navigator.clipboard.writeText(token);
      alert(`${token} copy!`);
    }
    return (
      <>
        {Color.map((item, index) => (
          <div key={item.type + '_' + index} className="w-full flex flex-col gap-6">
            {item.value.map((colorItem) => (
              <div className="flex flex-col gap-5" key={colorItem.category}>
                <p className='text-xl font-bold text-neutral-700'>color/{item.type}/{colorItem.category}</p> 
                <ul className="grid grid-cols-4 gap-4">
                  {
                    colorItem.color.map((color, index) => (
                      <li key={color.colorName + '_' +index} onClick={()=> handleCopy(item.type , color.colorName)} className="flex gap-4 overflow-hidden rounded-lg border bg-white border-neutral-300">
                        <div className='w-[75px] h-[75px] min-w-[75px]' style={{ backgroundColor : `var(--color-${color.var})`}} />
                        <div className="flex flex-col self-center">
                          <p className="font-bold text-xs text-neutral-700">
                            sc-{getPrefix(item.type)}-{color.colorName}
                          </p>
                          <span className="text-neutral-600 text-xs">{color.txt}</span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              ))
            }
          </div>
        ))}
      </>
    )
  }
)

export default ColorSample;