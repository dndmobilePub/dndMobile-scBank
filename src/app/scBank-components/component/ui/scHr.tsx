import * as React from "react";
import { cn } from "@/lib/utils";

export interface HrProps extends React.HTMLAttributes<HTMLElement> {
  type?: string;
  size?: number;
}

const hrStyle = [
    {typeName: 'line', className:'border-solid'},
    {typeName: 'dash', className:'border-dashed'},
]

export const ScHr =({type, size, className, ...rest}: HrProps) =>{
    const typeName = hrStyle.find(style => style.typeName === type)
    const tyleClass = typeName? typeName.className : 'line'
    const borderSize = `border-t-${size}`

    return(
        <hr className={cn(tyleClass, size? borderSize : 'border-t', 'sc-neutral-200' , className)} {...rest}/>
    );

};

export default ScHr;