"use client"
import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import {
  Button ,
  ButtonGroup ,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'


const KbdTooltip  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {


  return (
    <div className="flex w-full flex-col gap-6">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Save
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Print
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Print Document{" "}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>

  );
  }
);
export { KbdTooltip } ;
