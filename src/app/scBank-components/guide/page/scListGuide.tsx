"use client";

import * as React from "react";

import {
  ScListType,
  ScBox,
  ScVFlex,
  ScReviewList,
  ScListTitle,
  ScDetailList,
  ScList,
  ScListItem,
  ScLinkListIcon,
  ScListStpeType,
} from "@/app/scBank-components/component/ui/index";
import { Icon } from "lucide-react";
import ScText from "../../component/ui/scText";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

const listSample = [
  {txt : 'List 내용 입니다'},
  {txt : 'List 내용 입니다'},
  {txt : 'List 내용 입니다'},
]

const DetailListSample = [
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
]

const ReviewListSample = [
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
  {label : '레이브', subTxt: '날짜와 텍스트를 입력해 주세요', detailTxt : 'detail' , link : '#'},
]
const StepSample = [
  {label : '항목명을 입력해주세요', subTxt: '텍스트를 입력해 주세요',},
  {label : '항목명을 입력해주세요', subTxt: '텍스트를 입력해 주세요',},
  {label : '항목명을 입력해주세요', subTxt: '텍스트를 입력해 주세요',},
  {label : '항목명을 입력해주세요', subTxt: '텍스트를 입력해 주세요',},
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
              {`const listSample = [
  {txt : 'List 내용 입니다'},
  {txt : 'List 내용 입니다'},
  {txt : 'List 내용 입니다'},
]
              
타입 - 기본
<ScList>
  <ScListItem>{리스트 내용}</ScListItem>
</ScList>

타입 - Dot 
<ScList type="dot">
  <ScListItem>{리스트 내용}</ScListItem>
</ScList>

타입 - num 
<ScList type="num">
  <ScListItem>{리스트 내용}</ScListItem>
</ScList>

밑줄 추가시 
<ScList divided>
  <ScListItem>{리스트 내용}</ScListItem>
</ScList>`}
            </pre>
          </ScBox>
          <ScBox  className="grid grid-cols-1 gap-4">
            <ScText value='Detail List item' />
            <ScBox g={20} className="grid grid-cols-2 gap-4">
              <ScVFlex >
                <ScDetailList mt={10} dataList={DetailListSample} />
              </ScVFlex>
              <ScVFlex >
                <ScDetailList mt={10} alignLeft dataList={DetailListSample} />
              </ScVFlex>
            </ScBox>
            <pre className={preStyle}>
              {`const DetailListSample = [
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
  {title : '타이틀',  contentText : '내용' , bankNum : '000-0-000000'},
]

기본 타입 - <ScDetailList dataList={data} />
우측 내용 좌측 정렬 - <ScDetailList alignLeft dataList={data} />
`}
            </pre>
          </ScBox>
          <ScBox  className="grid grid-cols-1 gap-4">
            <ScText value="Review List type" />
            <ScBox g={20} className="grid grid-cols-1">
              <ScText value="Review List_section Title" />
              <ScListTitle title='타이틀' link='' />
              <ScBox>
                <ScText value="Review List" />
                <ScVFlex mt={10} g={10} className="grid grid-cols-2">
                  <ScReviewList title='타이틀' link='' list={ReviewListSample} />
                  <ScReviewList title='타이틀' link='' split list={ReviewListSample} />
                </ScVFlex>
              </ScBox>
            </ScBox>
            <pre className={preStyle}>
{`const ReviewListSample = [
  {label : '레이브',  detailTxt : 'detail' , link : '#'},
  {label : '레이브',  detailTxt : 'detail' , link : '#'},
  {label : '레이브',  detailTxt : 'detail' , link : '#'},
]

Title - <ScListTitle title='타이틀' link='' />

기본 - 
<ScReviewList title={타이틀} link={링크} list={data} />

2열 - split 
<ScReviewList title={타이틀} link={링크} split list={data} />`}
            </pre>
          </ScBox>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Link&Detail List type" />
            <ScBox g={20} className="grid grid-cols-1">
              <ScVFlex mt={10} g={10} className="grid grid-cols-2">
                <ScListType list={ReviewListSample}  />
                <ScListType type='detail' list={ReviewListSample} />
                <ScListType type='linkTxt' list={ReviewListSample}  />
              </ScVFlex>
            </ScBox>
            <pre className={preStyle}>
{`const ReviewListSample = [
  {label : '레이브',  detailTxt : 'detail' , link : '#'},
  {label : '레이브',  detailTxt : 'detail' , link : '#'},
]

Link list - <ScItemlist list={data}  />
Detail list - <ScItemlist type='detail' list={data}  />
Link_Text list - <ScItemlist type='linkTxt' list={data}  />
`}
            </pre>
          </ScBox>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Part/Link_icon List type" />
            <ScBox g={20} className="grid grid-cols-1">
              <ScVFlex mt={10} g={10} className="grid grid-cols-2">
                <ScLinkListIcon list={ReviewListSample}  />
              </ScVFlex>
            </ScBox>
            <pre className={preStyle}>
{`<ScLinkListIcon list={data}  />
`}
            </pre>
          </ScBox>
          <ScBox className="grid grid-cols-1 gap-4">
            <ScText value="Step List type" />
            <ScBox g={20} className="grid grid-cols-1">
              <ScVFlex mt={10} g={10} className="grid grid-cols-2">
                <ScListStpeType list={StepSample}  />
              </ScVFlex>
            </ScBox>
            <pre className={preStyle}>
{`<ScListStpeType list={data}  />
`}
            </pre>
          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  )
}

