"use client"
import * as React from "react"
import { Link2Icon } from "lucide-react"


import {
  ButtonGroup,
  ButtonGroupText,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Label 
} from "@/components/index";

const InputGroupButtonGroup = React.forwardRef<HTMLDivElement> (

  () => {



  return (
    <div  className="flex flex-wrap gap-6 justify-center">
      <div className="grid w-full max-w-sm gap-6">
        <ButtonGroup>
          <ButtonGroupText asChild>
            <Label htmlFor="url">https://</Label>
          </ButtonGroupText>
          <InputGroup>
            <InputGroupInput id="url" />
            <InputGroupAddon align="inline-end">
              <Link2Icon />
            </InputGroupAddon>
          </InputGroup>
          <ButtonGroupText>.com</ButtonGroupText>
        </ButtonGroup>
      </div>
    </div>

  );
  }
);
export { InputGroupButtonGroup } ;
