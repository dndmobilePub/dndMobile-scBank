// 1. 하위 지역(시/군/구) 타입
export interface AreaOption {
  label: string;
  value: string;
}

// 2. 상위 지역(도/시) 타입
export interface CityOption {
  label: string;
  value: string;
  area?: AreaOption[]; // 하위 지역은 있을 수도 있고 없을 수도 있음
}

// 3. 컴포넌트 Props 타입
export interface SelectAreaProps {
  onSelect: (city: string, district?: string) => void;
  onClose: () => void;
  options: CityOption[]; // 단순히 [] 가 아니라 CityOption의 배열이어야 함
  defaultCity?: string;
  defaultDistrict?: string;
}
