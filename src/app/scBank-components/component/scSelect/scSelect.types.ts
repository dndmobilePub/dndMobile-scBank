import * as React from "react";

// HTML 기본 type + 커스텀 tel
export type ScSelectType = React.HTMLInputTypeAttribute | "select";

/**
 * 인풋 공통 기본 props
 * - HTML 기본 props에서 type, id만 오버라이드 하기 위해 Omit
 */
export interface ScBaseSelectProp extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "id"> {
  id?: string;
  /** id 대신 사용할 선택적 식별자 */
  inputId?: string;
  /** input type (HTML 기본 타입 + "tel") */
  type?: ScSelectType;
}

/**
 * 순수 Input 컴포넌트용 props
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ScSelectFieldProps extends ScBaseSelectProp {}

/**
 * 라벨/안내문구/에러까지 포함된 TextField용 props
 */
export interface ScSelectProps extends ScBaseSelectProp {
  labelName?: string;
  description?: string;
  fieldType?: string; // 추후 variant 용도로 확장 가능
  focusCheck?: boolean;

  infoMsg?: string | React.ReactNode;
  errMsg?: string | React.ReactNode;
  errMsgCheck?: boolean;
}

export interface ScSelectOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

// data 배열 타입
export type ScSelectData = Array<string | number | ScSelectOption>;

/**
 * Select Field용 Props
 * - 기존 ScSelectProps 기반으로 확장
 */
export interface ScSelectFieldProps extends Omit<ScSelectProps, "type" | "value" | "defaultValue" | "infoMsg"> {
  data?: ScSelectData;
  /** 선택된 값 (option.value) */
  value?: string | number;
  /** 초기값 (uncontrolled) */
  defaultValue?: string | number;
  /** 값 변경 콜백 (value만 넘겨줌) */
  onValueChange?: (value: string | number) => void;
  /** 인풋 placeholder */
  placeholder?: string;
  /** 안내 문구 */
  infoMsg?: string | React.ReactNode;
  isTitle?: boolean;
}
