"use client";

import * as React from "react";
import { ScHr } from "@/app/scBank-components/component/ui/index";
import { ScVFlex,} from "@/app/scBank-components/component/ui/index";


export function ScHrGuide(){
  
  return (
    <ScVFlex g={10} mt={10}>
      <p>Hr 컴포넌트</p>
      <ScVFlex g={10}>
        <ScVFlex g={20} className="bg-white rounded-[10px]" p={20} >
          <p>Divider 선스타일</p>
          <ScVFlex g={20}>
            <p>line</p>
            <ScHr type={'line'} />
          </ScVFlex>
          <ScVFlex g={20}>
            <p>dash</p>
            <ScHr type={'dash'} />
          </ScVFlex>
          <p>Divider 크기스타일</p>
          <ScVFlex g={20}>
            <p>line</p>
            <ScHr type={'line'} size={10} />
          </ScVFlex>
          <ScVFlex g={20}>
            <p>dash</p>
            <ScHr type={'dash'} size={5} />
          </ScVFlex>
        </ScVFlex>
      </ScVFlex>
    </ScVFlex>
    
  )
}

