"use client"
import * as React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { Link2Icon } from "lucide-react"


import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/index";

const InputGroupCustomInput = React.forwardRef<HTMLDivElement> (

  () => {



  return (
    <div  className="flex flex-wrap gap-6 justify-center">
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <TextareaAutosize
            data-slot="input-group-control"
            className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
            placeholder="Autoresize textarea..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton className="ml-auto" size="sm" variant="default">
              Submit
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>

  );
  }
);
export { InputGroupCustomInput } ;
