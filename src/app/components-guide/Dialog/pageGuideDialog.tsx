"use client"
import * as React from "react"

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'

const ComponentGuideDialogPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Dialog (Modal)</h2>
        <div className="flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[520px]">
              <DialogHeader>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogDescription>This is an example dialog.</DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">Dialog content goes here.</p>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </>

      <pre className={preStyle}>
          {`import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>...</DialogContent>
</Dialog>`}
        </pre>
    </>
  );
}) 

export { ComponentGuideDialogPage };
