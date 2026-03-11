"use client";
import * as React from "react";

// 위에서 정의한 타입을 여기에 작성하거나 import 하세요.
interface ColorDetail {
  colorName: string;
  var: string;
  txt: string;
}

interface ColorCategory {
  category: string;
  color: ColorDetail[];
}

interface ColorGroup {
  type: string;
  value: ColorCategory[];
}

interface ColorSampleProps {
  colorList: ColorGroup[];
}

const ColorSample = React.forwardRef<HTMLDivElement, ColorSampleProps>(({ colorList }, ref) => {
  // type 매개변수에 string 타입을 명시
  const getPrefix = (type: string): string => {
    switch (type) {
      case "background":
        return "bg";
      case "border":
        return "bd";
      case "effect":
        return "shadow";
      default:
        return type;
    }
  };

  const handleCopy = (type: string, value: string): void => {
    const prefix = getPrefix(type);
    const token = `sc-${prefix}-${value}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(token).then(() => {
        alert(`${token} 복사되었습니다.`);
      });
    }
  };

  return (
    <div ref={ref} className="flex flex-col gap-10">
      {colorList.map((item: ColorGroup, index: number) => (
        <div key={`${item.type}_${index}`} className="w-full flex flex-col gap-6 mt-6">
          {item.value.map((colorItem: ColorCategory) => (
            <div className="flex flex-col gap-5" key={colorItem.category}>
              <p className="text-xl font-bold text-neutral-700">
                color/{item.type}/{colorItem.category}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {colorItem.color.map((color: ColorDetail, colorIndex: number) => {
                  const prefix = getPrefix(item.type);
                  const tokenName = `sc-${prefix}-${color.colorName}`;

                  return (
                    <li
                      key={`${color.colorName}_${colorIndex}`}
                      onClick={() => handleCopy(item.type, color.colorName)}
                      className="flex gap-4 overflow-hidden rounded-lg border bg-white border-neutral-300 cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <div
                        className="w-[75px] h-[75px] min-w-[75px]"
                        style={{ backgroundColor: `var(--color-${color.var})` }}
                      />
                      <div className="flex flex-col justify-center">
                        <p className="font-bold text-xs text-neutral-700">{tokenName}</p>
                        <span className="text-neutral-600 text-xs">{color.txt}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

ColorSample.displayName = "ColorSample";

export default ColorSample;
