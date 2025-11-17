"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
Button,
Command,
CommandEmpty,
CommandGroup,
CommandInput,
CommandItem,
CommandList,
Drawer,
DrawerContent,
DrawerTrigger,
Popover,
PopoverContent,
PopoverTrigger,
} from "@/components/index"

import { ComoboboxProps } from "../combobox.types"

type Status = {
    value: string
    label: string
}

const ComboboxResponsive = React.forwardRef<HTMLDivElement, ComoboboxProps>(
(props, ref) => {
    const { data, className, ...rest } = props

    // 옵션 배열 (data가 undefined일 수도 있으면 방어)
    const statuses: Status[] = data ?? []

    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)

    const preStyle =
    "bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto w-full mb-4"

    // 데스크톱 뷰
    if (isDesktop) {
    return (
        <div ref={ref} className={className} {...rest}>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
                {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
            <StatusList
                statuses={statuses}
                setOpen={setOpen}
                setSelectedStatus={setSelectedStatus}
            />
            </PopoverContent>
        </Popover>

        {/* 필요하면 주석 해제
        <pre className={preStyle}>
{`
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />
`}
        </pre>
        */}
        </div>
    )
    }

    // 모바일(드로어) 뷰
    return (
    <div ref={ref} className={`flex flex-wrap gap-6 ${className ?? ""}`} {...rest}>
        <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <div className="mt-4 border-t">
            <StatusList
                statuses={statuses}
                setOpen={setOpen}
                setSelectedStatus={setSelectedStatus}
            />
            </div>
        </DrawerContent>
        </Drawer>

        {/* 필요하면 주석 해제
        <pre className={preStyle}>
{`
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />
`}
        </pre>
        */}
    </div>
    )
},
)

type StatusListProps = {
    statuses: Status[]
    setOpen: (open: boolean) => void
    setSelectedStatus: (status: Status | null) => void
}

function StatusList({ statuses, setOpen, setSelectedStatus }: StatusListProps) {
    return (
        <Command>
        <CommandInput placeholder="Filter status..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
            {statuses.map((status) => (
                <CommandItem
                key={status.value}
                value={status.value}
                onSelect={(value) => {
                    setSelectedStatus(
                    statuses.find((item) => item.value === value) ?? null,
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
    )
}

export { ComboboxResponsive }
