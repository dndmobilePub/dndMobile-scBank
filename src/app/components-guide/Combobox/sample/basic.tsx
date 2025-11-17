"use client"
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Button ,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/index";

import { ComoboboxProps } from "../combobox.types";



const ComboboxBasic = React.forwardRef<HTMLDivElement, ComoboboxProps> (

    ( props, ref ) => {
    const { data, className, ...rest } = props
    const framework = data ?? []
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")


    const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full mb-4`;


    return (
        <div ref={ref} {...rest} className="flex flex-wrap gap-6">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                    >
                    {value
                        ? framework.find((framework) => framework.value === value)?.label
                        : "Select framework..."}
                    <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                        {framework.map((framework) => (
                            <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                            >
                            {framework.label}
                            <Check
                                className={cn(
                                "ml-auto",
                                value === framework.value ? "opacity-100" : "opacity-0"
                                )}
                            />
                            </CommandItem>
                        ))}
                        </CommandGroup>
                    </CommandList>
                    </Command>
                </PopoverContent>
                </Popover>
            
            {/* <pre className={preStyle}>
            {`
    import { Checkbox } from "@/components/ui/checkbox"

    <Checkbox />

    `}
            </pre> */}
   </div>

    );
    }
);
export { ComboboxBasic } ;
