"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/index";
import { Icon, ScText, ScBox, ScBottomSheet, ScVFlex } from "@scBank/index";
import { ScSelectFieldProps, ScSelectType, ScSelectOption } from "@scBank/scSelect";

/* ─────────────────────────────
 * 공통 유틸
 * ───────────────────────────── */

/** id 우선순위: props.id > inputId > generatedId */
const useFinalId = (idProp?: string, inputId?: string) => {
  const generatedId = React.useId();
  return idProp ?? inputId ?? generatedId;
};

const resolveInputType = (type?: ScSelectType): React.HTMLInputTypeAttribute => {
  return type ?? "text";
};

/* ─────────────────────────────
 * InputFiled (순수 인풋)
 * ───────────────────────────── */

export const SelectFiled = React.forwardRef<HTMLInputElement, ScSelectFieldProps>(
  ({ className, placeholder, inputId, disabled, readOnly, type, id, value, defaultValue, ...rest }, ref) => {
    const finalId = useFinalId(id, inputId);
    const resolvedType = resolveInputType(type);

    // controlled / uncontrolled 경고 방지: value / defaultValue 중 하나만 전달
    const valueProps = value !== undefined ? { value } : defaultValue !== undefined ? { defaultValue } : {};

    return (
      <ScBox g={10} mt={16} className={cn("grid items-center not-[]:relative")}>
        <input
          id={finalId}
          ref={ref}
          type={resolvedType}
          data-slot="input"
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            "peer border-input h-[50px]  w-full min-w-0 bg-transparent pt-[11px] pb-2.5 text-base",
            "transition-[color,box-shadow,border-color] outline-none",
            "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground",
            "selection:bg-primary selection:text-primary-foreground",
            // disabled
            "disabled:pointer-events-none disabled:cursor-not-allowed",
            "disabled:placeholder:text-(--color-sc-neutral-400)",
            "disabled:text-(--color-sc-neutral-400) disabled:caret-transparent",
            // readonly
            "peer-read-only:sc-bg-background-02 cursor-default focus-visible:ring-0 focus-visible:border-sc-neutral-300",
            // "dark:bg-input/30 file:inline-flex file:h-7 md:text-sm",
            // "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className,
          )}
          placeholder={placeholder}
          {...valueProps}
          {...rest}
        />

        {/* 오른쪽 ▼ 아이콘 */}
        {type === "select" && (
          <Icon name="ArrowDown" size="lg" className="pointer-events-none sc-text-basic-02 absolute top-50% right-0" />
        )}

        {/* input 밑 이펙트 */}
        <ScBox
          className={cn(
            // 기본 스타일
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-(--color-sc-neutral-500) ease-in transition-all",
            // 포커스 시 두꺼워지고 색 변경
            // "peer-focus:h-px peer-focus:sc-bg-secondary",
            // 값이 있을 때 (:not(:placeholder-shown))
            "peer-not-placeholder-shown:h-px",
            "peer-not-placeholder-shown:sc-bg-secondary",
            // disabled는 항상 disabled 색
            "peer-disabled:sc-bg-state-disabled-03",
            // readOnly
            "peer-read-only:sc-bg-state-disabled-03",
          )}
        />
      </ScBox>
    );
  },
);

SelectFiled.displayName = "SelectFiled";

/* ─────────────────────────────
 * ScSelectField (input 기반 Select)
 * ───────────────────────────── */

export const ScSelectField = React.forwardRef<HTMLInputElement, ScSelectFieldProps>(
  (
    {
      className,
      labelName,
      description,
      infoMsg,
      errMsgCheck,
      errMsg,
      disabled,
      readOnly,
      inputId,
      data,
      value,
      defaultValue,
      onValueChange,
      placeholder,
      id,
      isTitle,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const finalId = useFinalId(id, inputId);

    const infoId = infoMsg && !errMsgCheck ? `${finalId}-description` : undefined;
    const errorId = errMsgCheck ? `${finalId}-error` : undefined;

    const [open, setOpen] = React.useState(false);

    // controlled 여부 판단
    const isControlled = value !== undefined;

    // uncontrolled일 때 내부에서 관리할 값
    const [innerValue, setInnerValue] = React.useState<string | number | undefined>(defaultValue);

    // defaultValue 변경 시 uncontrolled 모드에서만 동기화
    React.useEffect(() => {
      if (!isControlled && defaultValue !== undefined) {
        setInnerValue(defaultValue);
      }
    }, [defaultValue, isControlled]);

    // data 정규화
    const options: ScSelectOption[] = React.useMemo(
      () =>
        (data ?? []).map((item) => {
          if (typeof item === "string" || typeof item === "number") {
            return { label: item, value: item };
          }
          return item;
        }),
      [data],
    );

    // 현재 선택된 value (controlled vs uncontrolled)
    const selectedValue = isControlled ? value : innerValue;
    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const displayLabel = selectedOption?.label != null ? String(selectedOption.label) : "";

    // option 클릭 시 동작
    const handleSelect = (opt: ScSelectOption) => {
      if (opt.disabled) return;

      // 1) 내부 상태 업데이트 (uncontrolled일 때)
      if (!isControlled) {
        setInnerValue(opt.value);
      }

      // 2) value 기반 콜백
      onValueChange?.(opt.value);

      // 3) onChange(event) 콜백도 지원
      if (onChange) {
        const fakeEvent = {
          target: { value: String(opt.value) },
          currentTarget: { value: String(opt.value) },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(fakeEvent);
      }

      setOpen(false);
    };

    const inputValue = displayLabel;
    const toggleOpen = () => {
      if (disabled || readOnly) return;
      setOpen((prev) => !prev);
    };

    return (
      <ScBox className="relative">
        {/* Label */}
        {labelName && (
          <Label
            htmlFor={undefined}
            className={cn("text-sm font-medium sc-text-basic-04")}
            onMouseDown={(e) => {
              // label 클릭 시, input에 포커스/클릭 전달 막기
              e.preventDefault();
            }}
          >
            {labelName}
          </Label>
        )}

        {/* Input (읽기 모드처럼 동작하는 Select 표시 영역) */}
        <SelectFiled
          data={[]}
          ref={ref}
          id={finalId}
          inputId={inputId}
          type="select"
          readOnly
          // isTitle={isTitle}
          disabled={disabled}
          aria-invalid={errMsgCheck ? true : undefined}
          aria-describedby={errorId ?? infoId}
          value={inputValue}
          placeholder={placeholder}
          onClick={toggleOpen}
          className={cn(className)}
          // 실제 input onChange는 handleSelect에서 대신 호출하므로 제거
          onChange={undefined as never}
          {...rest}
        />

        {/* Dropdown → 항상 렌더, open으로만 제어 */}
        <ScBottomSheet
          open={open && !disabled && !readOnly}
          onOpenChange={(next) => {
            if (disabled || readOnly) return;
            setOpen(next);
          }}
          title={labelName}
          description={description}
          content={
            <ScVFlex as="ul" gY={8}>
              {options.map((opt) => (
                <ScText
                  as="p"
                  fontStyle="lg"
                  key={String(opt.value)}
                  className={cn(
                    "px-6 py-3 text-sm rounded-xl cursor-pointer hover:bg-(--color-sc-green22-50)",
                    opt.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent",
                    selectedValue === opt.value &&
                      "flex justify-between items-center font-medium bg-(--color-sc-green22-50)",
                  )}
                  onClick={() => handleSelect(opt)}
                >
                  {opt.label}
                  {selectedValue === opt.value && <Icon name="Check" size="lg" />}
                </ScText>
              ))}
            </ScVFlex>
          }
        />
      </ScBox>
    );
  },
);

ScSelectField.displayName = "ScSelectField";
