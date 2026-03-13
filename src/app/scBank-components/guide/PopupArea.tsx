"use client";

import * as React from "react";
import { ScBox, ScVFlex, ScBottomSheet, ScAreaSelect, ScText } from "@scBank/index";

const options = [
  { label: "전체", value: "전체" },
  {
    label: "경기도",
    value: "경기도",
    area: [
      { label: "김포시", value: "김포시" },
      { label: "고양시", value: "고양시" },
      { label: "포천시", value: "포천시" },
      { label: "부천시", value: "부천시" },
      { label: "용인시", value: "용인시" },
    ],
  },
  {
    label: "서울특별시",
    value: "서울특별시",
    area: [
      { label: "양천구", value: "양천구" },
      { label: "마포구", value: "마포구" },
      { label: "용산구", value: "용산구" },
      { label: "영등포구", value: "영등포구" },
      { label: "강남구", value: "강남구" },
      { label: "노원구", value: "노원구" },
    ],
  },
  { label: "인천광역시", value: "인천광역시" },
  { label: "강원도", value: "강원도" },
];

export function PopAreaSelect() {
  const [open, setOpen] = React.useState(false);
  const [region, setRegion] = React.useState("전체");

  const handleAreaChange = (city: string, district?: string) => {
    const fullName = district ? `${city} ${district}` : city;
    setRegion(fullName);
  };

  return (
    <div className="p-6">
      <ScBox className="mb-4 p-4 border rounded-2xl flex justify-between items-center bg-white">
        <ScVFlex>
          <ScText fontStyle="sm" className="text-neutral-400" value="선택된 지역" />
          <ScText fontStyle="md-b" value={region} />
        </ScVFlex>
        <button onClick={() => setOpen(true)} className="text-sc-green-600 font-bold text-sm underline">
          변경
        </button>
      </ScBox>

      <ScBottomSheet
        open={open}
        onOpenChange={setOpen}
        title="지역 선택"
        content={
          <ScAreaSelect
            options={options}
            onSelect={handleAreaChange}
            defaultCity={region.split(" ")[0]}
            defaultDistrict={region.split(" ")[1] || ""}
            onClose={() => setOpen(false)}
          />
        }
      />
    </div>
  );
}
