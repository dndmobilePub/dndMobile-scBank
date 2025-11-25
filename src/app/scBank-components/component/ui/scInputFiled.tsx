"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input, Label, Button } from "@/components/index";
import { Icon } from "@/app/scBank-components/component/ui/icon";
import { ScBox, ScVFlex } from "./scBox";

/* ─────────────────────────────
 * inputFiled
 * ───────────────────────────── */


/* ─────────────────────────────
 * ScTextField
 * ───────────────────────────── */

export interface ScInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputId?: string;
  labelName?: string;
  placeholder?: string;
  fieldType?: string;
  focusCheck?: boolean;
  infoMsg?: string;
  errMsg?: string | React.ReactNode;
  errMsgCheck?: boolean;
  type?: 'text' | 'search' | 'phone' 
}

export const InputFiled = React.forwardRef<HTMLInputElement, ScInputFieldProps>(
  (
    {
      className,
      placeholder,
      id,
      inputId,
      disabled,
      readOnly,
      type = "text",
      ...props
    },
    ref
  ) => {
  
    // id 우선, 없으면 inputId, 둘 다 없으면 자동 생성
    const generatedId = React.useId();
    const finalId = id ?? inputId ?? generatedId;

    
    return (
      <ScBox className="grid relative" g={10} mt={16}>
        <input
          id={finalId}
          ref={ref}
          type={type}
          data-slot="input"
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            "peer border-input h-[50px] w-full min-w-0 bg-transparent pt-[11px] pb-2.5 text-base",
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
            "peer-disabled:sc-bg-state-disabled-03"
          )}
        />
      </ScBox>
    );
  }
);

InputFiled.displayName = "InputFiled";


export const ScTextField = React.forwardRef<HTMLInputElement, ScInputFieldProps>(
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
      type = "text",
      inputId,
      id,
      ...props
    },
    ref
  ) => {

    // label과 input이 공유할 최종 id
    const generatedId = React.useId();
    const finalId = id ?? inputId ?? generatedId;
    
    return (
      <ScBox>
        {labelName && (
          <Label htmlFor={finalId} className={cn("text-sm font-medium sc-text-basic-04",)}>{labelName}</Label>
        )}

        <InputFiled
          ref={ref}
          id={finalId}
          inputId={inputId}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={className}
          {...props}
        />

        {/* 안내 문구 */}
        {infoMsg && !errMsgCheck ? (
          <ScVFlex mt={8}>
            <p className="text-sm font-normal sc-text-basic-04">
              {infoMsg || "안내문구를 입력해 주세요"}
            </p>
          </ScVFlex>
        ) : null}

        {/* 에러 문구 */}
        {errMsgCheck && (
          <ScVFlex mt={8}>
            <p className="flex items-center leading-[18px] gap-1 text-sm font-normal sc-text-state-danger">
              <Icon name="Warning" size="sm" className="mt-px" />
              <span>{errMsg}</span>
            </p>
          </ScVFlex>
        )}
      </ScBox>
    );
  }
);

ScTextField.displayName = "ScTextField";