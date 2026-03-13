"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SelectAreaProps } from "@scBank/scAreaSelect";
import { ScBox, ScVFlex, ScTextField, ScText, Icon, ScHFlex, ScButton, ScBtnGroup } from "@scBank/index";

export const ScAreaSelect = React.forwardRef<HTMLDivElement, SelectAreaProps>(
  ({ options, onSelect, defaultCity = "전체", defaultDistrict = "", onClose, ...rest }, ref) => {
    // 1. 모든 리액트 훅(useState)은 컴포넌트 최상단에서 호출 (규칙 준수)
    const [viewMode, setViewMode] = React.useState<"CITY" | "DISTRICT">(defaultCity === "전체" ? "CITY" : "DISTRICT");
    const [tempCity, setTempCity] = React.useState<string>(defaultCity);
    const [tempDistrict, setTempDistrict] = React.useState<string>(defaultDistrict);
    const [searchQuery, setSearchQuery] = React.useState("");

    // 2. 훅 호출 이후에 데이터 존재 여부 체크 (Early Return)
    if (!options) return null;

    // 3. 타입 안전성을 고려한 데이터 가공
    // 'never' 에러 방지를 위해 Optional Chaining(?.)과 기본값(||)을 사용합니다.
    const currentCityOption = options.find((opt) => opt.value === tempCity);
    const currentDistricts = currentCityOption?.area || [];

    // 검색 필터링 로직
    const filteredCities = options.filter((opt) => opt.label.includes(searchQuery));
    const filteredDistricts = currentDistricts.filter((dist) => dist.label.includes(searchQuery));

    // 4. 이벤트 핸들러
    const handleCityClick = (city: string, hasArea: boolean) => {
      setTempCity(city);
      setTempDistrict(""); // 도시 이동 시 시군구 선택값 초기화
      setSearchQuery(""); // 검색어 초기화

      if (city === "전체" || !hasArea) {
        setViewMode("CITY");
      } else {
        setViewMode("DISTRICT");
      }
    };

    const handleDistrictClick = (district: string) => {
      setTempDistrict(district);
    };

    const handleConfirm = () => {
      onSelect(tempCity, tempDistrict);
      onClose();
    };

    return (
      <ScVFlex ref={ref} className="min-h-[500px] justify-between" {...rest}>
        <ScVFlex className="flex-1 overflow-hidden">
          {/* 검색 영역 */}
          <ScBox className="mb-4">
            <ScTextField
              labelName="주소지 검색"
              labelHidden
              placeholder="주소지명을 입력하세요."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </ScBox>

          {/* 상단 경로 (Breadcrumb) */}
          <ScHFlex className="mb-4 items-center gap-1 pb-4 border-b">
            <ScText
              as="span"
              fontStyle="lg-b"
              value={tempCity}
              className={cn(
                "transition-colors",
                viewMode === "DISTRICT" ? "text-neutral-400 cursor-pointer hover:text-neutral-600" : "text-neutral-900",
              )}
              onClick={() => {
                setViewMode("CITY");
                setSearchQuery("");
              }}
            />

            {tempCity !== "전체" ? (
              <>
                <Icon name="ArrowRight" size="sm" className="text-neutral-300" />
                <ScText
                  as="span"
                  fontStyle="lg-b"
                  value={tempDistrict || "시군구 선택"}
                  className={tempDistrict ? "text-sc-green-600" : "text-neutral-300"}
                />
              </>
            ) : (
              <>
                <Icon name="ArrowRight" size="sm" className="text-neutral-300" />
                <ScText
                  as="span"
                  fontStyle="lg-b"
                  value={"시군구 선택"}
                  className={tempDistrict ? "text-sc-green-600" : "text-neutral-300"}
                />
              </>
            )}
          </ScHFlex>

          {/* 리스트 영역 */}
          <ScVFlex as="ul" gY={2} className="overflow-y-auto flex-1 pr-1">
            {viewMode === "CITY"
              ? filteredCities.map((opt) => (
                  <li key={opt.value}>
                    <button
                      type="button"
                      className={cn(
                        "w-full px-6 py-4 text-left flex justify-between items-center rounded-xl transition-all",
                        tempCity === opt.value
                          ? "bg-(--color-sc-green22-50) text-sc-green-600 font-bold"
                          : "hover:bg-neutral-50",
                      )}
                      onClick={() => handleCityClick(opt.value, !!opt.area)}
                    >
                      <ScText as="span" fontStyle="md" value={opt.label} />
                      {tempCity === opt.value && <Icon name="Check" size="md" />}
                    </button>
                  </li>
                ))
              : filteredDistricts.map((dist) => (
                  <li key={dist.value}>
                    <button
                      type="button"
                      className={cn(
                        "w-full px-6 py-4 text-left flex justify-between items-center rounded-xl transition-all",
                        tempDistrict === dist.value
                          ? "bg-(--color-sc-green22-50) text-sc-green-600 font-bold"
                          : "hover:bg-neutral-50",
                      )}
                      onClick={() => handleDistrictClick(dist.value)}
                    >
                      <ScText as="span" fontStyle="md" value={dist.label} />
                      {tempDistrict === dist.value && <Icon name="Check" size="md" />}
                    </button>
                  </li>
                ))}
          </ScVFlex>
        </ScVFlex>

        {/* 하단 버튼 그룹 */}
        <ScBtnGroup className="mt-6">
          <ScButton disabled={viewMode === "DISTRICT" && !tempDistrict} onClick={handleConfirm}>
            선택완료
          </ScButton>
        </ScBtnGroup>
      </ScVFlex>
    );
  },
);

ScAreaSelect.displayName = "ScAreaSelect";
