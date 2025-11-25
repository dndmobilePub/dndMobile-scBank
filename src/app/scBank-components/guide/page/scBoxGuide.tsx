
import { ScButton, ScBox, ScVFlex,ScHFlex, ScBtnGroup, ScrollButton, ScTxtBtn, ScExtBtn } from "@/app/scBank-components/component/ui/index";

const preStyle = `bg-gray-100 p-4 rounded text-sm overflow-auto w-full`;

export function ScBoxGuide(){
  
  return (
    <ScVFlex g={10} mt={10}>
      <p>ScBox, ScVFlex, ScHFlex 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>공통 style</p>
          <pre className={preStyle}>
            {`
??Token 이 붙은건 Tailwind css 스타일 적용
mToken={10} === className="m-[10px]" 같은 css적용

// margin
margin  = m, mToken;
margin-top = mt, mtToken;
margin-left = ml, mlToken;
margin-right = mr, mrToken;
margin-bootom = mb, mbToken;
margin-Inline = mx, mxToken;
margin-block = my, myToken;


//padding
padding  = p, pToken;
padding-top = pt, ptToken;
padding-left = pl, plToken;
padding-right = pr, prToken;
padding-bootom = pb, pbToken;
padding-Inline = px, pxToken;
padding-block = py, pyToken;

사용예시
<ScBox m={임의값px or 임의값rem} mToken={임의값} p={임의값px or 임의값rem} pToken={임의값}></ScBox>

//gap
gap = g, gToken;
columGap = gX, gXToken;
rowGap = gY, gYToken;

사용예시
<ScVFlex g={임의값px or 임의값rem} gToken={임의값}></ScVFlex>
<ScHFlex g={임의값px or 임의값rem} gToken={임의값}></ScHFlex>

//border
border =  "1px solid red" 또는 1 → 1px
borderWidth = 1, "2px"
borderStyle = "solid" | "dashed" ...
borderColor = "#fff", "red", "var(--...)" 등

사용예시
<ScBox border={10} or border={10px solid red}></ScBox>
<ScBox border={10} borderWidth={2px}></ScBox>
<ScBox border={10} borderStyle={dashed}></ScBox>
<ScBox border={10} borderColor={'#fff'}></ScBox>
`}
          </pre>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>ScBox</p>
          <ScBox className="grid grid-cols-2 gap-4">
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>TailWind css</p>
                <ScBox className="w-[200px] h-[200px] bg-amber-300 rounded-[20px]"></ScBox>
              </ScVFlex>
              <pre className={preStyle}>
{`<ScBox className="w-[200px] h-[200px] bg-amber-300 rounded-[20px]"></ScBox>`}
              </pre>

            </ScVFlex>
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>토큰</p>
                <ScBox w={'200px'} h={200} r={20} className="bg-amber-300"></ScBox>
              </ScVFlex>
              <pre className={preStyle}>
                {`<ScBox w={'200px'} h={200} r={20} className="bg-amber-300"></ScBox>`}
              </pre>

            </ScVFlex>

          </ScBox>
        </ScVFlex>
        <ScVFlex g={14} className="bg-white rounded-[10px]" p={20} >
          <p>ScVFlex, ScHFlex</p>
          <ScBox className="grid grid-cols-2 gap-4">
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>VFlex</p>
                <ScVFlex g={10}>
                  <ScBox className="w-[200px] h-[200px] bg-amber-300 rounded-[20px]"></ScBox>
                  <ScBox className="w-[200px] h-[200px] bg-amber-300 rounded-[20px]"></ScBox>
                </ScVFlex>
              </ScVFlex>
              <pre className={preStyle}>
                {`<ScVFlex g={10}>{자식요소}</ScVFlex>`}
              </pre>

            </ScVFlex>
            <ScVFlex g={20}>
              <ScVFlex g={10}>
                <p>HFlex</p>
                <ScHFlex g={10}>
                  <ScBox className="w-[200px] h-[200px] bg-amber-300 rounded-[20px]"></ScBox>
                  <ScBox className="w-[200px] h-[200px] bg-amber-300 rounded-[20px]"></ScBox>
                </ScHFlex>
              </ScVFlex>
              <pre className={preStyle}>
                {`<ScHFlex g={10}>{자식요소}</ScHFlex>`}
              </pre>

            </ScVFlex>

          </ScBox>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
  )
}

