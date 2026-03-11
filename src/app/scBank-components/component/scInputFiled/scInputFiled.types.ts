import * as React from "react";
import { ScSelectData } from "@scBank/index";

// HTML 기본 type + 커스텀 phone
export type ScInputType = React.HTMLInputTypeAttribute | "tel";

/**
 * 인풋 공통 기본 props
 * - HTML 기본 props에서 type, id만 오버라이드 하기 위해 Omit
 */

export interface ScBaseInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "id"> {
  id?: string;
  /** id 대신 사용할 선택적 식별자 */
  inputId?: string;
  /** input type (HTML 기본 타입 + "phone") */
  type?: ScInputType;
  errMsgCheck?: boolean;
  data?: ScSelectData;
}

/**
 * 순수 Input 컴포넌트용 props
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ScInputFieldProps extends ScBaseInputProps {}

/**
 * 라벨/안내문구/에러까지 포함된 TextField용 props
 */
export interface ScTextFieldProps extends ScBaseInputProps {
  labelName?: string;
  fieldType?: string; // 추후 variant 용도로 확장 가능
  focusCheck?: boolean;

  infoMsg?: string | React.ReactNode;
  errMsg?: string | React.ReactNode;
  errMsgCheck?: boolean;
}
