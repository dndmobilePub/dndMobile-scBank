"use client"
import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"
import {  
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger, 
  ButtonGroup, 
  Button
} from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'
  
const ComponentGuideButtonGroupPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
  const [label, setLabel] = React.useState("personal")
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">ButtonGroup</h2>
        <div className="flex items-center gap-3">
          <ButtonGroup>
            <ButtonGroup className="hidden sm:flex">
              <Button variant="outline" size="icon" aria-label="Go Back">
                <ArrowLeftIcon />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">Archive</Button>
              <Button variant="outline">Report</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">Snooze</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="More Options">
                    <MoreHorizontalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <MailCheckIcon />
                      Mark as Read
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ArchiveIcon />
                      Archive
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <ClockIcon />
                      Snooze
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CalendarPlusIcon />
                      Add to Calendar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ListFilterPlusIcon />
                      Add to List
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <TagIcon />
                        Label As...
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          value={label}
                          onValueChange={setLabel}
                        >
                          <DropdownMenuRadioItem value="personal">
                            Personal
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="work">
                            Work
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="other">
                            Other
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                      <Trash2Icon />
                      Trash
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </>
      <pre className={preStyle}>
{`import {  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,  } from "@/components/index";

<ButtonGroup>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>`}
      </pre>
    </>
  );
})

export { ComponentGuideButtonGroupPage };
