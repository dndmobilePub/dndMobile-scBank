"use client";

import * as React from "react";

import { ScButton, ScBox, ScVFlex, ScBottomSheet, ScBtnGroup, ScFixedBtnGroup, ScTxtBtn, ScExtBtn } from "@/app/scBank-components/component/ui/index";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

export function ScCommonGuide(){
  
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  return (
    <ScVFlex g={10} mt={10}>
      <p>공통 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <ScBox className="grid grid-cols-2 gap-4">
            <ScVFlex g={20}>
              <p>BottomSheet - 일반</p>
              <ScVFlex g={10}>
                <ScBtnGroup>
                  <ScButton type="button" onClick={() => setOpen(!open)}>바텀시트</ScButton>
                </ScBtnGroup>
                <ScBottomSheet
                  open={open}
                  onOpenChange={setOpen}
                  onClose={() => {
                    console.log("바텀시트 닫힘");
                  }}
                  title="바텀시트"
                  content={<div className="h-[400px]">
                    바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>
                    바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>
                  </div>}
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
            <ScVFlex g={20}>
              <p>BottomSheet - 하단버튼</p>
              <ScVFlex g={10}>
                <ScBtnGroup>
                  <ScButton type="button" onClick={() => setOpen1(!open1)}>바텀시트</ScButton>
                </ScBtnGroup>
                <ScBottomSheet
                  open={open1}
                  onOpenChange={setOpen1}
                  onClose={() => {
                    console.log("바텀시트 닫힘");
                  }}
                  title="바텀시트"
                  content={<div className="h-[400px]">
                    바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>
                    바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>바텀 본문내용 <br/>
                  </div>}
                  footer={
                    <ScFixedBtnGroup>
                      <ScButton type="button" variant='secondary' className="h-12">취소</ScButton>
                      <ScButton type="button" className="h-12" onClick={() => setOpen1(!open1)}>확인</ScButton>
                    </ScFixedBtnGroup>
                  }
                />
              </ScVFlex>
              <pre className={preStyle}>
                {`const [open, setOpen] = React.useState(false);                
<ScBottomSheet
  open={open}
  onOpenChange={setOpen}
  title="타이틀"
  content={컨텐츠 내용}
  footer={
    <ScFixedBtnGroup>
      <ScButton type="button" variant='secondary' className="h-12" onClick={() => setOpen(!open)}>취소</ScButton>
      <ScButton type="button" className="h-12" onClick={() => setOpen(!open)}>확인</ScButton>
    </ScFixedBtnGroup>
  }
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

