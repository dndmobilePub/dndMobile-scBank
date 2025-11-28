"use client";

import * as React from "react";

import { ScSelectField, ScBox, ScVFlex, ScHFlex, ScBtnGroup, ScPhoneField, ScSearchField, ScTextField } from "@/app/scBank-components/component/ui/index";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;


export function ScInputGuide(){

  
  return (
    <ScVFlex g={10} mt={10}>
      <p>InputFiled 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>ScBox</p>
          <ScBox className="grid grid-cols-2 gap-4">
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>TextField</p>
                <ScTextField labelName="test" placeholder='placeholder' infoMsg="안내메시지" />
                <ScTextField labelName="test" placeholder='placeholder' infoMsg="안내메시지" errMsgCheck errMsg='에러메시지'/>
                <ScPhoneField
                  data={[
                    { label: "011", value: "phone" },
                    { label: "02", value: "02" },
                    { label: "031", value: "031" },
                    { label: "032", value: "032" },
                  ]} errMsgCheck
                />
                <ScPhoneField
                  data={[
                    { label: "010", value: "phone" },
                    { label: "02", value: "02" },
                    { label: "031", value: "031" },
                    { label: "032", value: "032" },
                  ]}
                  disabled
                  value={'1111-1111'}
                />
              </ScVFlex>
              <pre className={preStyle}>
{`<ScTextField labelName="test" placeholder='placeholder' infoMsg="안내메시지" />
<ScTextField labelName="test" placeholder='placeholder' infoMsg="안내메시지" errMsgCheck errMsg='에러메시지'/>`}
              </pre>
            </ScVFlex>
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>SearchField</p>
                <ScSearchField labelName="search" placeholder='검색어 입력하세요'/>
              </ScVFlex>
              <pre className={preStyle}>
                {`<ScSearchField labelName="search" placeholder='검색어 입력하세요'/>`}
              </pre>
            </ScVFlex>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  )
}

