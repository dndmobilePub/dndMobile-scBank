"use client";
import * as React from "react";
import { ElementType } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/index";
import { ScText } from "@scBank/index";

// --- 타입 정의 ---

type ScFontStyle =
  | "h1"
  | "h2"
  | "h4"
  | "h5"
  | "h3-b"
  | "h3-m"
  | "h4-b"
  | "h4-m"
  | "h5-b"
  | "h5-m"
  | "lg"
  | "lg-b"
  | "lg-m"
  | "md"
  | "md-b"
  | "md-m"
  | "sm"
  | "sm-b"
  | "sm-m";

interface TypographyItem {
  name: string;
  value: {
    value: number;
    fontName?: string;
  }[];
}

interface TypefaceValue {
  type: string;
  tag: ElementType; // "any" 대신 ElementType을 사용하여 HTML 태그임을 명시
  name: string;
  size: number;
  height: number;
  spacing: number;
  weightB?: number;
  weightM?: number;
  weightR?: number;
  valueName: string;
  // ftype들을 string이 아닌 정의된 ScFontStyle 타입으로 지정합니다.
  ftype1: ScFontStyle;
  ftype2?: ScFontStyle;
  ftype3?: ScFontStyle;
}

interface TypefaceTable {
  name: string;
  value: TypefaceValue[];
}

// --- 데이터 (컴포넌트 외부 유지) ---
const TypographyList: TypographyItem[] = [
  {
    name: "Font size",
    value: [
      { value: 13 },
      { value: 14 },
      { value: 16 },
      { value: 17 },
      { value: 18 },
      { value: 24 },
      { value: 30 },
      { value: 32 },
    ],
  },
  {
    name: "Line height",
    value: [
      { value: 18 },
      { value: 20 },
      { value: 24 },
      { value: 26 },
      { value: 28 },
      { value: 30 },
      { value: 32 },
      { value: 40 },
      { value: 44 },
    ],
  },
  {
    name: "Font weight",
    value: [
      { fontName: "light", value: 300 },
      { fontName: "regular", value: 400 },
      { fontName: "medium", value: 500 },
      { fontName: "bold", value: 700 },
    ],
  },
  { name: "Letter spacing", value: [{ value: -0.3 }, { value: 0 }] },
];

const TypographyComponentTableList: TypefaceTable[] = [
  {
    name: "Korea Typeface",
    value: [
      {
        type: "heading",
        tag: "h1",
        name: "h1",
        size: 32,
        height: 44,
        spacing: -0.3,
        weightB: 700,
        valueName: "ABC 가나다",
        ftype1: "h1",
      },
      {
        type: "heading",
        tag: "h2",
        name: "h2",
        size: 30,
        height: 40,
        spacing: -0.3,
        weightB: 700,
        valueName: "ABC 가나다",
        ftype1: "h2",
      },
      {
        type: "heading",
        tag: "h3",
        name: "h3",
        size: 24,
        height: 32,
        spacing: -0.3,
        weightB: 700,
        weightM: 500,
        valueName: "ABC 가나다",
        ftype1: "h3-b",
        ftype2: "h3-m",
      },
      {
        type: "heading",
        tag: "h4",
        name: "h4",
        size: 20,
        height: 28,
        spacing: -0.3,
        weightB: 700,
        weightM: 500,
        weightR: 400,
        valueName: "ABC 가나다",
        ftype1: "h4-b",
        ftype2: "h4-m",
        ftype3: "h4",
      },
      {
        type: "heading",
        tag: "h5",
        name: "h5",
        size: 18,
        height: 26,
        spacing: -0.3,
        weightB: 700,
        weightM: 500,
        weightR: 400,
        valueName: "ABC 가나다",
        ftype1: "h5-b",
        ftype2: "h5-m",
        ftype3: "h5",
      },
      {
        type: "body",
        tag: "p",
        name: "lg",
        size: 16,
        height: 24,
        spacing: -0.3,
        weightB: 700,
        weightM: 500,
        weightR: 400,
        valueName: "ABC 가나다",
        ftype1: "lg-b",
        ftype2: "lg-m",
        ftype3: "lg",
      },
      {
        type: "body",
        tag: "span",
        name: "md",
        size: 14,
        height: 20,
        spacing: -0.3,
        weightB: 700,
        weightM: 500,
        weightR: 400,
        valueName: "ABC 가나다",
        ftype1: "md-b",
        ftype2: "md-m",
        ftype3: "md",
      },
      {
        type: "body",
        tag: "div",
        name: "sm",
        size: 13,
        height: 18,
        spacing: -0.3,
        weightB: 700,
        weightM: 500,
        weightR: 400,
        valueName: "ABC 가나다",
        ftype1: "sm-b",
        ftype2: "sm-m",
        ftype3: "sm",
      },
    ],
  },
];

const TypographySample = React.forwardRef<HTMLDivElement>((props, ref) => {
  const titleStyle = "text-[20px] text-neutral-800 font-bold mb-4";

  return (
    <div ref={ref} className="p-4">
      {/* 1. 기본 타이포그래피 속성 리스트 */}
      {TypographyList.map((item) => (
        <div key={item.name} className="flex flex-col gap-2 mt-10">
          <p className={titleStyle}>{item.name}</p>
          <Table className="bg-white border text-center">
            <TableHeader className="bg-neutral-800">
              <TableRow>
                <TableHead className="text-neutral-50 w-[250px]">Variable Name</TableHead>
                <TableHead className="text-neutral-50">Value</TableHead>
                <TableHead className="text-neutral-50">Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {item.value.map((size, idx) => (
                <TableRow key={`${item.name}-${size.value}-${idx}`}>
                  <TableCell className="py-4 font-medium">
                    {item.name}/{size.fontName || size.value}
                  </TableCell>
                  <TableCell className="py-4">
                    {size.value}
                    {item.name === "Letter spacing" ? "px" : ""}
                  </TableCell>
                  <TableCell className="py-4">
                    <div
                      style={{
                        fontSize: item.name === "Font size" ? `${size.value}px` : "16px",
                        lineHeight: item.name === "Line height" ? `${size.value}px` : "normal",
                        fontWeight: item.name === "Font weight" ? size.value : "normal",
                        letterSpacing: item.name === "Letter spacing" ? `${size.value}px` : "normal",
                      }}
                    >
                      {item.name === "Line height" ? (
                        <>
                          줄바꿈 테스트입니다.
                          <br />두 번째 줄입니다.
                        </>
                      ) : (
                        "ABC 가나다 123"
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}

      {/* 2. 컴포넌트 조합 스타일 리스트 */}
      {TypographyComponentTableList.map((item) => (
        <div key={item.name} className="flex flex-col gap-2 mt-12">
          <p className={titleStyle}>{item.name}</p>
          <Table className="bg-white border text-center">
            <TableHeader className="bg-neutral-800">
              <TableRow>
                <TableHead className="text-neutral-50">Style Name</TableHead>
                <TableHead className="text-neutral-50">Size/Height/Spacing</TableHead>
                <TableHead className="text-neutral-50">Weight</TableHead>
                <TableHead className="text-neutral-50">Preview</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {item.value.map((style) => (
                <TableRow key={style.name}>
                  <TableCell className="font-medium text-blue-600">
                    {style.type}/{style.name}
                  </TableCell>
                  <TableCell>
                    <div className="text-xs text-neutral-500">
                      Size: {style.size}px
                      <br />
                      Height: {style.height}px
                      <br />
                      Spacing: {style.spacing}px
                    </div>
                  </TableCell>
                  <TableCell>
                    {style.weightB && <div className="text-xs font-bold">Bold({style.weightB})</div>}
                    {style.weightM && <div className="text-xs font-medium">Medium({style.weightM})</div>}
                    {style.weightR && <div className="text-xs font-normal">Regular({style.weightR})</div>}
                  </TableCell>
                  <TableCell className="text-left py-6">
                    <div className="flex flex-col gap-2">
                      {/* as={style.tag}는 이제 ElementType이므로 에러가 나지 않습니다. */}
                      {/* ftype 또한 ScFontStyle 타입이므로 fontStyle 속성에 안전하게 할당됩니다. */}
                      {style.weightB && (
                        <ScText as={style.tag} fontStyle={style.ftype1} value={`${style.valueName} (Bold)`} />
                      )}

                      {style.weightM && style.ftype2 && (
                        <ScText as={style.tag} fontStyle={style.ftype2} value={`${style.valueName} (Medium)`} />
                      )}

                      {style.weightR && style.ftype3 && (
                        <ScText as={style.tag} fontStyle={style.ftype3} value={`${style.valueName} (Regular)`} />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
});

TypographySample.displayName = "TypographySample";

export { TypographySample };
