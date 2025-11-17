

export type ComboBoxOption = {
    value : string;
    label : string;
}

// 
export interface ComoboboxProps 
extends React.HtmlHTMLAttributes<HTMLDivElement>{
    data : ComboBoxOption[];
}