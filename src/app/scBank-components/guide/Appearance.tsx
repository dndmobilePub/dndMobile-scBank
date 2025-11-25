"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/index";
import "../../globals.css";

import * as React from "react";

const appearanceList = [
  {
    name: "spacing",
    value: [
      { value: 0 },
      { value: 2 },
      { value: 4 },
      { value: 8 },
      { value: 12 },
      { value: 16 },
      { value: 20 },
      { value: 24 },
      { value: 32 },
      { value: 40 },
      { value: 48 },
      { value: 64 },
    ],
  },
  {
    name: "radius",
    value: [
      { value: 4 },
      { value: 8 },
      { value: 12 },
      { value: 16 },
      { value: "rounded" },
    ],
  },
];

const AppearanceSample = React.forwardRef<HTMLDivElement>(() => {
  const titleStyle = "text-[20px] text-neutral-800 font-bold";

  return (
    <>
      {appearanceList.map((item) => (
        <div key={item.name} className="flex flex-col gap-2 mt-6">
          <p className={titleStyle}>{item.name}</p>
          <Table className="bg-white">
            {/* unit */}
            <TableHeader className="bg-neutral-800 ">
              <TableRow>
                <TableHead className="text-neutral-50 text-center not-[]:w-[200px]">
                  Variable Name
                </TableHead>
                <TableHead className="text-neutral-50 text-center">
                  Primitive Variable
                </TableHead>
                <TableHead className="text-neutral-50 text-center">
                  Value(px)
                </TableHead>
                <TableHead className="text-neutral-50 text-center">
                  {item.name === "spacing" && `Value(REM)`}
                  {item.name === "radius" && `VISUAL REPRESENTATION`}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {item.value.map((unit) => {
                const isSpacing = item.name === "spacing";
                const isRadius = item.name === "radius";
                const val = unit.value;

                return (
                  <TableRow key={`${item.name}-${val}`}>
                    {/* Variable Name */}
                    <TableCell className="py-4 text-center not-even:font-medium">
                      {isSpacing && `spacing/${val}`}
                      {isRadius && `border/radius/${val}`}
                    </TableCell>

                    {/* Primitive Variable */}
                    <TableCell className="py-4 text-center">
                      {isSpacing && `unit/${val}`}
                      {isRadius &&
                        (typeof val === "number" ? `${val} px` : "-")}
                    </TableCell>

                    {/* Value(px) */}
                    <TableCell className="py-4 text-center">
                      {typeof val === "number" ? `${val} px` : "-"}
                    </TableCell>

                    {/* Preview Sample */}
                    <TableCell className="py-4 text-center">
                      {isSpacing && (
                        <div
                          className="h-[20] sc-bg-primary"
                          style={{ width: `${val}px` }}
                        />
                      )}

                      {isRadius && (
                        <div
                          className="w-[40] h-[40] sc-bg-primary"
                          style={{
                            borderRadius:
                              typeof val === "number" ? `${val}px` : "100%",
                          }}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ))}
    </>
  );
});

export { AppearanceSample };
