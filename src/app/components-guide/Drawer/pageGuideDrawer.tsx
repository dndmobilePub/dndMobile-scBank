"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label 
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'

const ComponentGuideDrawerPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;
  
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Drawer</h2>
        <div className="flex">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DrawerDescription>
              </DrawerHeader>
              <ProfileForm className="px-4" />
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </>

      <pre className={preStyle}>
          {`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
        </pre>
    </>
  );
}) 

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}


export { ComponentGuideDrawerPage };
