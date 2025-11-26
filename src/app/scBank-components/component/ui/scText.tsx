import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ScTextProps extends React.HTMLAttributes<HTMLElement> {
  fontType?: string | React.ElementType;
  value?: React.ReactNode;
  fontStyle?: string;
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
  {name: 'h3-b', className: 'text-2xl leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'h3-m', className: 'text-2xl leading-[1.4] tracking-[-0.3] font-medium'},
  {name: 'h4-b', className: 'text-xl leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'h4-m', className: 'text-xl leading-[1.4] tracking-[-0.3] font-medium'},
  {name: 'h4', className: 'text-xl leading-[1.4] tracking-[-0.3] font-normal'},
  {name: 'h5-b', className: 'text-lg leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'h5-m', className: 'text-lg leading-[1.4] tracking-[-0.3] font-medium'},
  {name: 'h5', className: 'text-lg leading-[1.4] tracking-[-0.3] font-normal'},
  {name: 'lg-b', className: 'text-base leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'lg-m', className: 'text-base leading-[1.4] tracking-[-0.3] font-medium'},
  {name: 'lg', className: 'text-base leading-[1.4] tracking-[-0.3] font-normal'},
  {name: 'md-b', className: 'text-sm leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'md-m', className: 'text-sm leading-[1.4] tracking-[-0.3] font-medium'},
  {name: 'md', className: 'text-sm leading-[1.4] tracking-[-0.3] font-normal'},
  {name: 'sm-b', className: 'text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-bold'},
  {name: 'sm-m', className: 'text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-medium'},
  {name: 'sm', className: 'text-[0.8125rem] leading-[1.4] tracking-[-0.3] font-normal'},
  {name: 'span', className: 'text-sm leading-[1.4] tracking-[-0.3] font-normal'}, 
  {name: 'p', className: 'text-sm leading-[1.4] tracking-[-0.3] font-normal'},
]

const ScText = ({ fontType="span", fontStyle, className, asChild, value, children, style, ...rest }: ScTextProps) => {
  const Comp = asChild ? Slot : fontType;

  // const styleName = fontStyle || (typeof fontType === 'string' ? fontType : 'md');
  // const styleObject = SizeStyle.find(style => style.name === styleName);
  // const sizeClassName = styleObject ? styleObject.className : '';

  const candidate = fontStyle ?? fontType; // ?? > 왼쪽값이  null or undifined일 때 오른쪽 사용
  const styleObject = SizeStyle.find(style => style.name === candidate);
  const sizeClassName = styleObject ? styleObject.className : SizeStyle.find(s => s.name === 'md')!.className; // ! 절대 undefined가 아니다” 라고 TypeScript에게 알려주는 표시.

  return (
    <Comp 
      className={cn(`${sizeClassName}`, className)} 
      {...rest}
      style={style}
    >
      {value}
      {children}
    </Comp>
  );
};

export default ScText;