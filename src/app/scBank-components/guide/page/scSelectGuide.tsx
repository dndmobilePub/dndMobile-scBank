"use client";

import * as React from "react";

import { ScSelectField, ScBox, ScVFlex, ScHFlex, ScBtnGroup, ScPhoneField, ScSearchField, ScTextField } from "@/app/scBank-components/component/ui/index";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;


export function ScSelectGuide(){
  
  const [bank, setBank] = React.useState<string | number>("");
  
  return (
    <ScVFlex g={10} mt={10}>
      <p>Select 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>Select - Base</p>
          <ScBox className="grid grid-cols-2 gap-4">
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>SelectField</p>
                <ScSelectField labelName="은행 선택" placeholder="은행을 선택해주세요"
                  data={[
                    { label: "국민은행", value: "kb" },
                    { label: "카카오뱅크", value: "kakao" },
                    { label: "카카오뱅크1", value: "kakao1" },
                    { label: "카카오뱅크2", value: "kakao2" },
                    { label: "카카오뱅크3", value: "kakao3" },
                    { label: "카카오뱅크4", value: "kakao4" },
                    ]}
                  value={bank}
                  onValueChange={setBank}
                />
              </ScVFlex>
              {/* <pre className={preStyle}>
{`<ScTextField labelName="test" placeholder='placeholder' infoMsg="안내메시지" />
<ScTextField labelName="test" placeholder='placeholder' infoMsg="안내메시지" errMsgCheck errMsg='에러메시지'/>`}
              </pre> */}
            </ScVFlex>
            {/* <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>SearchField</p>
                <ScSearchField labelName="search" placeholder='검색어 입력하세요'/>
              </ScVFlex>
              <pre className={preStyle}>
                {`<ScSearchField labelName="search" placeholder='검색어 입력하세요'/>`}
              </pre>
            </ScVFlex> */}
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  )
}

