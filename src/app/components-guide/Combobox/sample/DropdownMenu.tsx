"use client"
import * as React from "react"
import { MoreHorizontal } from "lucide-react"
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/index";

import { ComoboboxProps } from "../combobox.types";


const ComboboxDropdown = React.forwardRef<HTMLDivElement, ComoboboxProps> (

    ( props, ref ) => {
    const { data, className, ...rest } = props
    const labels = data ?? [];
    const [label, setLabel] = React.useState("feature")
    const [open, setOpen] = React.useState(false)


    const preStyle =`bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full mb-4`;


    return (
        <div ref={ref} {...rest} className="flex flex-wrap gap-6">
            <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
                <p className="text-sm leading-none font-medium">
                    <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
                    {label}
                    </span>
                    <span className="text-muted-foreground">Create a new project</span>
                </p>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Assign to...</DropdownMenuItem>
                        <DropdownMenuItem>Set due date...</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="p-0">
                            <Command>
                            <CommandInput
                                placeholder="Filter label..."
                                autoFocus={true}
                                className="h-9"
                            />
                            <CommandList>
                                <CommandEmpty>No label found.</CommandEmpty>
                                <CommandGroup>
                                    {labels.map((label) => (
                                        <CommandItem
                                            key={label.label}
                                            value={label.value}
                                            onSelect={(value) => {
                                                setLabel(value)
                                                setOpen(false)
                                            }}
                                            >
                                            {label.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                            </Command>
                        </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            Delete
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
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
export { ComboboxDropdown } ;
