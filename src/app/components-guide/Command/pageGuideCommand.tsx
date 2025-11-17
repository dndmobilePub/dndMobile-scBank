"use client"
import * as React from "react"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/index";

import { GuidePageProps } from './../componetLayout.types'

const ComponentGuideCommandPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
    const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Command</h2>
        <div className="mb-4">
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        <pre className={preStyle}>
          {`
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
        </pre>
      </>
    </>
  );
})

export { ComponentGuideCommandPage };
