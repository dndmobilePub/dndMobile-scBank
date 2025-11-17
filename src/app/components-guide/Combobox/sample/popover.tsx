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

type Status = {
  value: string
  label: string
}

const ComboboxPopover = React.forwardRef<HTMLDivElement, ComoboboxProps> (

    ( props, ref ) => {
    const { data, className, ...rest } = props
    const statuses = data ?? [];
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
    )


    const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full mb-4`;


    return (
        <div ref={ref} {...rest} className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-4">
                <p className="text-muted-foreground text-sm">Status</p>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[150px] justify-start">
                        {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                        <CommandInput placeholder="Change status..." />
                        <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {statuses.map((status) => (
                            <CommandItem
                                key={status.value}
                                value={status.value}
                                onSelect={(value) => {
                                setSelectedStatus(
                                    statuses.find((priority) => priority.value === value) ||
                                    null
                                )
                                setOpen(false)
                                }}
                            >
                                {status.label}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                        </CommandList>
                    </Command>
                    </PopoverContent>
                </Popover>
                </div>
            
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
export { ComboboxPopover } ;
