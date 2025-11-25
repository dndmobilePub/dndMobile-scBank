
import { ScButton, ScBox, ScVFlex,ScHFlex, ScBtnGroup, ScrollButton, ScTxtBtn, ScExtBtn } from "@/app/scBank-components/component/ui/index";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

export function ScBtnGuide(){
  
  return (
    <ScVFlex g={10} mt={10}>
      <p>Button 컴포넌트</p>
      <ScBox className="grid grid-cols-2 gap-6">
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>Button Primary - solid</p>
          <ScBtnGroup type='stack'>
            <ScButton type="button">기본</ScButton>
            <ScButton type="button" className="sc-bg-primary-hover sc-text-primary">Hover</ScButton>
            <ScButton type="button" className="sc-bg-primary-active">Active</ScButton>
            <ScButton type="button" disabled>Disabled</ScButton>
            <ScButton type="button" isLoading/>
          </ScBtnGroup>
          <pre className={preStyle}>
            {`<ScButton type="button">{버튼명}</ScButton>
<ScButton disabled >{버튼명}</ScButton>
<ScButton isLoading>{버튼명}</ScButton>             
`}
          </pre>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>Button Secondary - Ghost</p>
          <ScBtnGroup type='stack'>
            <ScButton type="button" variant='secondary'>기본</ScButton>
            <ScButton type="button" variant='secondary' className="sc-bd-primary-hover">Hover</ScButton>
            <ScButton type="button" variant='secondary' className="sc-bd-primary-hover sc-text-primary-active">Active</ScButton>
            <ScButton type="button" variant='secondary' disabled >Disabled</ScButton>
            <ScButton type="button" variant='secondary' isLoading />
          </ScBtnGroup>
          <pre className={preStyle}>
            {`<ScButton type="button" variant='secondary'>{버튼명}</ScButton>
<ScButton variant='secondary' disabled>{버튼명}</ScButton>
<ScButton variant='secondary' isLoading>{버튼명}</ScButton>             
`}
          </pre>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>Button Stack</p>
          <ScVFlex g={28}>
            <ScBtnGroup>
              <ScButton type="button" variant='secondary'>버튼</ScButton>
              <ScButton type="button" variant='solid'>버튼</ScButton>
            </ScBtnGroup>
            <ScBtnGroup>
              <ScButton type="button" variant='secondary'>버튼</ScButton>
              <ScButton type="button" variant='secondary'>버튼</ScButton>
            </ScBtnGroup>
            <pre className={preStyle}>
              {`<ScBtnGroup></ScBtnGroup>`}
            </pre>
            <ScBtnGroup type='ratio'>
              <ScButton type="button" variant='secondary'>버튼</ScButton>
              <ScButton type="button" variant='solid'>버튼</ScButton>
            </ScBtnGroup>
            <pre className={preStyle}>
              {`<ScBtnGroup type='ratio'></ScBtnGroup>`}
            </pre>
            <ScBtnGroup type='stack'>
              <ScButton type="button" variant='secondary'>버튼</ScButton>
              <ScButton type="button" variant='solid'>버튼</ScButton>
            </ScBtnGroup>
            <pre className={preStyle}>
              {`<ScBtnGroup type='stack'></ScBtnGroup>`}
            </pre>
          </ScVFlex>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>Scroll Button</p>
          <ScVFlex g={10}>
            <ScBox
                id="article-container"
                className="h-[400px] overflow-y-auto border"
              >
              {/* 긴 컨텐츠 */}
                <ScBox className="h-[1800px] bg-amber-600"></ScBox>
            </ScBox>
            <ScBtnGroup>
              <ScrollButton containerId="article-container">스크롤해서 끝까지 읽어주세요</ScrollButton>
            </ScBtnGroup>
            <pre className={preStyle}>
              {`<ScBox id="article-container">{컨텐츠 내용}</ScBox>
<ScrollButton containerId="article-container">{버튼명}</ScrollButton>
              `}
            </pre>
          </ScVFlex>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>small Button</p>
          <ScVFlex g={10}>
            <ScHFlex className='justify-around'>
                <ScBtnGroup type='stack'>
                  <ScButton type="button" size='sm'>기본</ScButton>
                  <ScButton type="button" size='sm' className="sc-bg-primary-hover sc-text-primary">Hover</ScButton>
                  <ScButton type="button" size='sm' className="sc-bg-primary-active">Active</ScButton>
                  <ScButton type="button" size='sm' disabled>Disabled</ScButton>
                </ScBtnGroup>
                <ScBtnGroup type='stack'>
                  <ScButton type="button" variant='secondary' size='sm'>기본</ScButton>
                  <ScButton type="button" variant='secondary' size='sm'>Hover</ScButton>
                  <ScButton type="button" variant='secondary' size='sm'>Active</ScButton>
                  <ScButton type="button" variant='secondary' size='sm' disabled>Disabled</ScButton>
                </ScBtnGroup>
            </ScHFlex>
            <pre className={preStyle}>
              {`primary
<ScButton type="button" size='sm'>{버튼명}</ScButton>
<ScButton type="button" size='sm' disabled>{버튼명}</ScButton>

secondary
<ScButton type="button" size='sm' variant='secondary'>{버튼명}</ScButton>
<ScButton type="button" size='sm' variant='secondary' disabled>{버튼명}</ScButton>`}
            </pre>
          </ScVFlex>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>Text Button</p>
          <ScVFlex g={10}>
            <ScBtnGroup type='stack'>
              <ScTxtBtn typeBtn='pdf'/>
              <ScTxtBtn typeBtn='edit'/>
              <ScTxtBtn typeBtn='all'/>
            </ScBtnGroup>
            <pre className={preStyle}>
              {`PDF 보기  - <ScTxtBtn typeBtn='pdf'/>
편집 - <ScTxtBtn typeBtn='edit'/>
전체 - <ScTxtBtn typeBtn='all'/>`}
            </pre>
          </ScVFlex>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>small_extra Button</p>
          <ScVFlex g={10}>
            <ScHFlex className='justify-around'>
                <ScBtnGroup type='stack'>
                  <ScExtBtn btnName="기본"/>
                  <ScExtBtn btnName="Hover" className="sc-bd-primary-hover sc-bg-extra sc-icon-primary-hover"/>
                  <ScExtBtn btnName="active" className="sc-text-primary-active sc-bg-extra-hover sc-icon-primary-active"/>
                  <ScExtBtn btnName="disabled" disabled/>
                </ScBtnGroup>
                <ScBtnGroup type='stack'>
                  <ScExtBtn variant='smallExtSub' types='secondary'/>
                  <ScExtBtn variant='smallExtSub' types='secondary' className="sc-bg-teritary-hover "/>
                  <ScExtBtn variant='smallExtSub' types='secondary' className="sc-bg-teritary-active"/>
                  <ScExtBtn variant='smallExtSub' types='secondary' disabled className="sc-bg-basic-disabled text-[var(--color-sc-neutral-400)]"/>
                </ScBtnGroup>
            </ScHFlex>
            <pre className={preStyle}>
              {`
primary
<ScExtBtn btnName="{버튼명}"/>
<ScExtBtn btnName="{버튼명}" disabled/>

secondary
<ScExtBtn variant='smallExtSub' types='secondary'/>
<ScExtBtn variant='smallExtSub' types='secondary' disabled/>`}
            </pre>
          </ScVFlex>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20}>
          <p>Bottom Button - 작업전</p>
          <ScVFlex g={10}>
          
            <pre className={preStyle}>
              {``}
            </pre>
          </ScVFlex>
        </ScVFlex>
      </ScBox>
    </ScVFlex>
  )
}

