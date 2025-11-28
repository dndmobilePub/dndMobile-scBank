"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input, Label, Button } from "@/components/index";
import { Icon } from "@/app/scBank-components/component/ui/icon";
import { ScBox, ScVFlex, ScSelectField, ScSelectData } from "./index";
import ScText from "./scText";



/* ─────────────────────────────
 * 공통 타입 정의
 * ───────────────────────────── */

// HTML 기본 type + 커스텀 phone
type ScInputType = React.HTMLInputTypeAttribute | "tel";

/**
 * 인풋 공통 기본 props
 * - HTML 기본 props에서 type, id만 오버라이드 하기 위해 Omit
 */


interface ScBaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "id"> {
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

/* ─────────────────────────────
 * 공통 유틸
 * ───────────────────────────── */

/** id 우선순위: props.id > inputId > generatedId */
const useFinalId = (idProp?: string, inputId?: string) => {
  const generatedId = React.useId();
  return idProp ?? inputId ?? generatedId;
};


const resolveInputType = (type?: ScInputType): React.HTMLInputTypeAttribute => {
  return type ?? "text";
};

const getFirstOptionValue = (data?: ScSelectData): string | number | undefined => {
  if (!data || data.length === 0) return undefined;
  const first = data[0];

  if (typeof first === "string" || typeof first === "number") {
    return first;
  }
  // ScSelectOption 인 경우
  return first.value;
};

/* ─────────────────────────────
 * InputFiled (순수 인풋)
 * ───────────────────────────── */

export const InputFiled = React.forwardRef<HTMLInputElement, ScInputFieldProps>(
  ({ className, placeholder, inputId, disabled, readOnly, type, data, errMsgCheck, ...props }, ref) => {
    const finalId = useFinalId(props.id, inputId);
    const resolvedType = resolveInputType(type);

    const [select, setSelect] = React.useState<string | number>("");

    // ✅ 전화번호(type === 'tel')일 때만, data[0]을 초기값으로 채워줌
    React.useEffect(() => {
      if (type !== "tel") return;

      const first = getFirstOptionValue(data);
      if (first === undefined) return;

      setSelect((prev) => {
        // 이미 값이 있으면(사용자가 선택한 경우) 덮어쓰지 않음
        if (prev !== undefined && prev !== "") return prev;
        return first;
      });
    }, [type, data]);
    
    return (
      <ScBox
        g={10}
        mt={16}
        className={`grid items-center not-[]:relative 
          ${type === 'tel' && 'grid-cols-[54px_1fr] gap-3'}
          ${type === 'search' && 'grid-cols-[1fr_24px] gap-2.5'}`
        }
        >
        {type === 'tel' && 
          <ScSelectField
            data={data ?? []}
            value={select}
            onValueChange={setSelect}
            isTitle={false}
          />
        }
        
        <input
          id={finalId}
          ref={ref}
          type={resolvedType}
          data-slot="input"
          disabled={disabled}
          readOnly={readOnly}
          value={props.value ?? undefined}
          className={cn(
            "peer border-input h-[50px]  w-full min-w-0 bg-transparent pt-[11px] pb-2.5 text-base",
            "transition-[color,box-shadow,border-color] outline-none",
            "caret-(--color-sc-green-300)",
            "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground",
            "selection:bg-primary selection:text-primary-foreground",
            // disabled
            "disabled:pointer-events-none disabled:cursor-not-allowed",
            "disabled:placeholder:text-(--color-sc-neutral-400)",
            "disabled:text-(--color-sc-neutral-400) disabled:caret-transparent",
            // readonly
            readOnly &&
              "sc-bg-basic-02 sc-bg-background-02 cursor-default focus-visible:ring-0 focus-visible:border-sc-neutral-300",
            "dark:bg-input/30 file:inline-flex file:h-7 md:text-sm",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          placeholder={placeholder}
          {...props}
        />
        {/* 검색 버튼 */}
        {type === 'search' && <Icon name="Search" size="lg" />}
        {/* input 밑 이펙트 */}
        <ScBox
          className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-(--color-sc-neutral-500) ease-in transition-all",
            // 포커스 시 두꺼워지고 색 변경
            "peer-focus:h-[3px] peer-focus:sc-bg-secondary",
            // 값이 있을 때 (:not(:placeholder-shown))
            "peer-not-placeholder-shown:h-[3px]",
            "peer-not-placeholder-shown:sc-bg-secondary",
            // disabled는 항상 disabled 색
            "peer-disabled:h-px peer-disabled:sc-bg-state-disabled-03",
            // error 상태면
            errMsgCheck && 'sc-bg-danger!'
          )}
        />
      </ScBox>
    );
  }
);

InputFiled.displayName = "InputFiled";

/* ─────────────────────────────
 * ScTextField (라벨 + 인풋 + 안내/에러)
 * ───────────────────────────── */

export const ScTextField = React.forwardRef<HTMLInputElement, ScTextFieldProps>(
  (
    {
      className,
      labelName,
      placeholder,
      fieldType,
      focusCheck,
      infoMsg,
      errMsgCheck,
      errMsg,
      disabled,
      readOnly,
      type,
      inputId,
      ...props
    },
    ref
  ) => {
    const finalId = useFinalId(props.id, inputId);
    const resolvedType = resolveInputType(type);

    // a11y: 에러/안내 문구 id
    const infoId = infoMsg && !errMsgCheck ? `${finalId}-description` : undefined;
    const errorId = errMsgCheck ? `${finalId}-error` : undefined;

    return (
      <ScBox>
        {labelName && (
          <Label
            htmlFor={finalId}
            className={cn("text-sm font-medium sc-text-basic-04")}
          >
            {labelName}
          </Label>
        )}

        <InputFiled
          ref={ref}
          id={finalId}
          inputId={inputId}
          type={resolvedType}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={errMsgCheck ? true : undefined}
          aria-describedby={errorId ?? infoId}
          className={className}
          errMsgCheck={errMsgCheck}
          {...props}
        />

        {/* 안내 문구 */}
        {infoMsg && !errMsgCheck && (
          <ScVFlex mt={8}>
            <ScText as='p'
              id={infoId}
              className="text-sm font-normal sc-text-basic-04"
              value={infoMsg || "안내문구를 입력해 주세요"}
            />              
          </ScVFlex>
        )}

        {/* 에러 문구 */}
        {errMsgCheck && (
          <ScVFlex mt={8}>
            <p
              id={errorId}
              className="flex leading-[18px] gap-1 text-sm font-normal sc-text-state-danger"
            >
              <Icon name="Warning" size="sm" className="mt-[1.5px]" />
              <ScText value={errMsg} />
            </p>
          </ScVFlex>
        )}
      </ScBox>
    );
  }
);

ScTextField.displayName = "ScTextField";

/* ─────────────────────────────
 * ScSearchField
 * ───────────────────────────── */

export const ScSearchField = React.forwardRef<HTMLInputElement, ScTextFieldProps>(
  (
    {
      className,
      labelName,
      placeholder,
      fieldType,
      focusCheck,
      type = 'search',
      inputId,
      ...props
    },
    ref
  ) => {
    const finalId = useFinalId(props.id, inputId);
    const resolvedType = resolveInputType(type);

    return (
      <ScBox>
        {labelName && (
          <Label
            htmlFor={finalId}
            className={cn("text-sm font-medium sc-text-basic-04 hidden")}
          >
            {labelName}
          </Label>
        )}

        <InputFiled
          ref={ref}
          id={finalId}
          inputId={inputId}
          type={resolvedType}
          placeholder={placeholder}
          className={className}
          {...props}
        />
      </ScBox>
    );
  }
);

ScTextField.displayName = "ScSearchField";


/* ─────────────────────────────
 * ScTextField (라벨 + 인풋 + 안내/에러)
 * ───────────────────────────── */

export const ScPhoneField = React.forwardRef<HTMLInputElement, ScTextFieldProps>(
  (
    {
      className,
      labelName = '휴대폰 번호',
      placeholder = '0000 0000',
      fieldType,
      focusCheck,
      infoMsg,
      errMsgCheck,
      errMsg ='올바른 휴대폰 번호를 입력해 주십시오.',
      disabled,
      readOnly,
      type ='tel',
      inputId,
      data,
      ...props
    },
    ref
  ) => {
    const finalId = useFinalId(props.id, inputId);
    const resolvedType = resolveInputType(type);

    // a11y: 에러/안내 문구 id
    const infoId = infoMsg && !errMsgCheck ? `${finalId}-description` : undefined;
    const errorId = errMsgCheck ? `${finalId}-error` : undefined;

    return (
      <ScBox>
        {labelName && (
          <Label
            htmlFor={finalId}
            className={cn("text-sm font-medium sc-text-basic-04")}
          >
            {labelName}
          </Label>
        )}

        <InputFiled
          ref={ref}
          id={finalId}
          data={data}
          inputId={inputId}
          type={resolvedType}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={errMsgCheck ? true : undefined}
          aria-describedby={errorId ?? infoId}
          className={className}
          errMsgCheck={errMsgCheck}
          {...props}
        />

        {/* 안내 문구 */}
        {infoMsg && !errMsgCheck && (
          <ScVFlex mt={8}>
            <p
              id={infoId}
              className="text-sm font-normal sc-text-basic-04"
            >
              {infoMsg || "안내문구를 입력해 주세요"}
            </p>
          </ScVFlex>
        )}

        {/* 에러 문구 */}
        {errMsgCheck && (
          <ScVFlex mt={8}>
            <p
              id={errorId}
              className="flex leading-[18px] gap-1 text-sm font-normal sc-text-state-danger"
            >
              <Icon name="Warning" size="sm" className="mt-[1.5px]" />
              <span>{errMsg}</span>
            </p>
          </ScVFlex>
        )}
      </ScBox>
    );
  }
);

ScTextField.displayName = "ScPhoneField";