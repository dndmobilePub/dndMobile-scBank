"use client";

import * as React from "react";

import { ScButton, ScBox, ScVFlex, ScBottomSheet, ScBtnGroup, ScrollButton, ScTxtBtn, ScExtBtn } from "@/app/scBank-components/component/ui/index";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

export function ScCommonGuide(){
  
  const [open, setOpen] = React.useState(false);

  return (
    <ScVFlex g={10} mt={10}>
      <p>공통 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>BottomSheet</p>
          <ScBox className="grid grid-cols-2 gap-4">
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <ScBtnGroup>
                  <ScButton type="button" onClick={() => setOpen(!open) }>바텀시트</ScButton>
                </ScBtnGroup>
                <ScBottomSheet
                  open={open}
                  onOpenChange={setOpen}
                  onClose={() => {
                    console.log("바텀시트 닫힘");
                  }}
                  title="바텀시트"
                  content={<div className="h-[800px]">바텀 본문내용</div>}
                />
              </ScVFlex>
              <pre className={preStyle}>
                {`const [open, setOpen] = React.useState(false);                
<ScBottomSheet
  open={open}
  onOpenChange={setOpen}
  title="타이틀"
  content={컨텐츠 내용}
/>`}
              </pre>
            </ScVFlex>
          </ScBox>
          <pre className={preStyle}>
            {``}
          </pre>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  )
}

