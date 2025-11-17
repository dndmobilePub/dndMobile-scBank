"use client"
import * as React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button
} from "@/components/index";
import { GuidePageProps } from '../componetLayout.types'

const ComponentGuideFormPage = React.forwardRef<HTMLDivElement, GuidePageProps>( (props, ref) => {
  const { preStyle } = props;
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <>
        <h2 className="text-2xl font-semibold">Field</h2>
        <div className="flex justify-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </>

      <pre className={preStyle}>
          {`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/field"

const form = useForm()
 
<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>`}
        </pre>
    </>
  );
}) 


export { ComponentGuideFormPage };
