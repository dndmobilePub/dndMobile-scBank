"use client"
import * as React from "react"
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/index";

import { GuidePageProps } from './../componetLayout.types'
  
const ComponentGuideCardPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const {preStyle} = props;
  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Card</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="shadow">
            <CardHeader>
              <CardTitle className="text-lg">Welcome</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This is a short card example using Tailwind utilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Get started</Button>
            </CardFooter>
          </Card>

          <Card className="shadow">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              Image/Preview
            </div>
            <CardHeader>
              <CardTitle className="text-lg">Product</CardTitle>
              <CardDescription>Product short description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-green-600">$49.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy</Button>
            </CardFooter>
          </Card>
        </div>

      </>
      <pre className={preStyle}>
        {`import { Card, 
        CardHeader, 
        CardTitle, 
        CardDescription, 
        CardContent, 
        CardFooter } from '@/components/ui/card'

<Card>
<CardHeader>
  <CardTitle>Title</CardTitle>
  <CardDescription>Desc</CardDescription>
</CardHeader>
<CardContent>...</CardContent>
<CardFooter>...</CardFooter>
</Card>`}
      </pre>
    </>
  );
})

export { ComponentGuideCardPage };
