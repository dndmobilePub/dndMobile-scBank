"use client";

import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/scBank-components/component/ui/index";
import { ScVFlex, ScList, ScListItem} from "@/app/scBank-components/component/ui/index";

const listSample = [
  {txt : '휴대폰번호 변경 또는 등록코드 오류 횟수를 초과하거나 등록 유효기간이 지난 경우 디지털OTP를 재발급 받으셔야 합니다.'},
]


export function ScAccordionGuide(){
  
  return (
    <ScVFlex g={10} mt={10}>
      <p>Accordion 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={20} className="bg-white rounded-[10px]" p={20} >
          <p>Accordion 스타일</p>
          <ScVFlex g={20}>
            <p>Accordion 컴퍼넌트</p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion 1</AccordionTrigger>
              <AccordionContent className={``}>
                <strong>리스트제목</strong>
                <ScList type="dot">
                  {listSample.map((item, idx) => (
                    <ScListItem key={idx}>{item.txt}</ScListItem>
                  ))}                    
                </ScList>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </ScVFlex>
          <ScVFlex g={20}>
            <p>Accordion single 모드</p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion 1</AccordionTrigger>
              <AccordionContent className={``}>
                <strong>리스트제목</strong>
                <ScList type="dot">
                  {listSample.map((item, idx) => (
                    <ScListItem key={idx}>{item.txt}</ScListItem>
                  ))}                    
                </ScList>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion 2</AccordionTrigger>
             <AccordionContent className={``}>
                <p>
                  본문내용 2
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Accordion 3</AccordionTrigger>
             <AccordionContent className={``}>
                <p>
                  본문내용 3
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </ScVFlex>
          <ScVFlex g={20}>
            <p>Accordion multiple 모드</p>
            <Accordion
              type="multiple"
              // collapsible
              className="w-full"
              defaultValue={["item-1"]} // multiple일 땐 배열로 바꿔줘야함
            >
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion 1</AccordionTrigger>
              <AccordionContent className={``}>
                <strong>리스트제목</strong>
                <ScList type="dot">
                  {listSample.map((item, idx) => (
                    <ScListItem key={idx}>{item.txt}</ScListItem>
                  ))}                    
                </ScList>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion 2</AccordionTrigger>
             <AccordionContent className={``}>
                <p>
                  본문내용 2
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Accordion 3</AccordionTrigger>
             <AccordionContent className={``}>
                <p>
                  본문내용 3
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </ScVFlex>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
    
  )
}

