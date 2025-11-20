"use client"
import * as React from "react"

import { colorList } from './colorList'

const ColorSample = React.forwardRef<HTMLDivElement>(
  () => {
    const Color = colorList;

    const handleCopy = (type: any, value: any) => {
      let prefix = type;
      if (type === 'background') prefix = 'bg';
      if (type === 'border') prefix = 'bd';
      if (type === 'effect') prefix = 'shadow';

      navigator.clipboard.writeText('sc-' + prefix + '-' + value);
      alert('sc-' + prefix + '-' + value + ' copy!');
    }
    return (
      <>
        {Color.map((item, index) => (
          <div key={item.type + '_' + index} className="w-full flex flex-col gap-[24]">
            {item.value.map((colorItem) => (
              <div className="flex flex-col gap-[20]" key={colorItem.category}>
                <p className='text-xl font-bold text-neutral-700'>color/{item.type}/{colorItem.category}</p> 
                <ul className="grid grid-cols-4 gap-4">
                  {
                    colorItem.color.map((color, index) => (
                      <li key={color.colorName + '_' +index} onClick={()=> handleCopy(item.type , color.colorName)} className="flex gap-[16] overflow-hidden rounded-lg border bg-white border-neutral-300">
                        <div className='w-[75] h-[75] min-w-[75]' style={{ backgroundColor : `var(--color-${color.var})`}} />
                        <div className="flex flex-col self-center">
                          <p className="font-bold text-xs text-neutral-700">
                            {color.colorName}
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