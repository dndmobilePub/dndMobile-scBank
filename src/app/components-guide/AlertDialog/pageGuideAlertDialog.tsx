"use client"
import * as React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger, Button
} from "@/components/index";
import { GuidePageProps } from './../componetLayout.types'
  
const ComponentGuideAlertDialogPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Alert-Dialog</h2>
        <div className="flex items-center gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Title</AlertDialogTitle>
                <AlertDialogDescription>
                  내용
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction>확인</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
         </div>
      </>
      <pre className={preStyle}>
{`import { AlertDialog,
AlertDialogAction,
AlertDialogCancel,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
AlertDialogTrigger } from "@/components/index";'

<AlertDialog>
  <AlertDialogTrigger asChild>
  <Button variant="outline">Show Dialog</Button>
</AlertDialogTrigger>
<AlertDialogContent>
  <AlertDialogHeader>
    <AlertDialogTitle>Title</AlertDialogTitle>
    <AlertDialogDescription>
      내용
    </AlertDialogDescription>
  </AlertDialogHeader>
  <AlertDialogFooter>
    <AlertDialogCancel>취소</AlertDialogCancel>
    <AlertDialogAction>확인</AlertDialogAction>
  </AlertDialogFooter>
</AlertDialogContent>
</AlertDialog>`}
      </pre>
    </>
  );
})

export { ComponentGuideAlertDialogPage };
