import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ScTextProps extends React.HTMLAttributes<HTMLElement> {
  type?: string | React.ElementType;
  value?: React.ReactNode;
  size?: string;
  weight?: 'bold' | 'md' | 'sm';
  // children?: React.ReactNode; //React.HTMLAttributes<HTMLElement> 있어서 생략 가능
  // className?: string;  //React.HTMLAttributes<HTMLElement> 있어서 생략 가능
  asChild?: boolean;
  // style?: React.CSSProperties | undefined; //React.HTMLAttributes<HTMLElement> 있어서 생략 가능
  // ... 기타 props
}

const SizeStyle = [
  {name: 'h1', className: 'text-[2rem] leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'h2', className: 'text-3xl leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'h3', className: 'text-2xl leading-[1.4] tracking-[-0.3]'},
  {name: 'h4', className: 'text-xl leading-[1.4] tracking-[-0.3]'},
  {name: 'h5', className: 'text-lg leading-[1.4] tracking-[-0.3]'},
  {name: 'lg', className: 'text-base leading-[1.4] tracking-[-0.3]'},
  {name: 'md', className: 'text-sm leading-[1.4] tracking-[-0.3]'},
  {name: 'sm', className: 'text-[0.8125rem] leading-[1.4] tracking-[-0.3]'},
]

const FontWeightStyle = [
  {name: 'bold', className:'font-bold'},
  {name: 'md', className:'font-medium'},
  {name: 'sm', className:'font-normal'},
]

const ScText = ({ type="span", size="md", weight="sm", className, asChild, value, children, style, ...rest }: ScTextProps) => {
  const Comp = asChild ? Slot : type;

  const styleObject = SizeStyle.find(style => style.name === size);
  const sizeClassName = styleObject ? styleObject.className : '';

  const fontWeightStyle = FontWeightStyle.find(item => item.name === weight);
  const weightClassName = fontWeightStyle ? fontWeightStyle.className : '';

  return (
    <Comp 
      className={cn(`${sizeClassName} ${weightClassName}`, className)} 
      {...rest}
      style={style}
    >
      {children || value}
    </Comp>
  );
};

export default ScText;