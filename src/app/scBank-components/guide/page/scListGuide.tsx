"use client";

import * as React from "react";

import {
  ScButton,
  ScBox,
  ScVFlex,
  ScBottomSheet,
  ScBtnGroup,
  ScDetailList,
  ScList,
  ScListItem,
} from "@/app/scBank-components/component/ui/index";
import { Icon } from "lucide-react";
import ScText from "../../component/ui/scText";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

const listSample = [
  {txt : 'List 내용 입니다'},
  {txt : 'List 내용 입니다'},
  {txt : 'List 내용 입니다'},
]

export function ScListGuide(){
  


  return (
    <ScVFlex g={10} mt={10}>
      <ScText as='p' value='List 컴포넌트'/>
      <ScVFlex g={10}>
        <ScVFlex g={24} className="bg-white rounded-[10px]" p={20} >
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value='List type' />
            <ScBox g={20} className="grid grid-cols-2 gap-4">
              <ScVFlex g={10}>
                <ScText value='Dot' />
                <ScList type="dot">
                  {listSample.map((item, idx) => (
                    <ScListItem key={idx}>{item.txt}</ScListItem>
                  ))}                    
                </ScList>
              </ScVFlex>
              <ScVFlex g={10}>
                  <ScText value='Num' />
                  <ScList type="num">
                    {listSample.map((item, idx) => (
                      <ScListItem key={idx}>{item.txt}</ScListItem>
                    ))}  
                </ScList>
              </ScVFlex>
              <ScVFlex g={10}>
                  <ScText value='List 밑줄 - Divided' />
                  <ScList type="num" divided>
                    {listSample.map((item, idx) => (
                      <ScListItem key={idx}>{item.txt}</ScListItem>
                    ))}  
                </ScList>
              </ScVFlex>
            </ScBox>
            <pre className={preStyle}>
                {``}
            </pre>
          </ScBox>
          <ScBox  className="grid grid-cols-1 gap-4">
            <ScText value='List type' />
            <ScBox g={20} className="grid grid-cols-2 gap-4">
              <ScVFlex g={10}>
                <ScText value='Dot1111' />
                <ScDetailList mt={10}>
                  {listSample.map((item, idx) => (
                    <ScListItem key={idx}>{item.txt}</ScListItem>
                  ))}                    
                </ScDetailList>
              </ScVFlex>
            </ScBox>
            <pre className={preStyle}>
                {``}
            </pre>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  )
}

