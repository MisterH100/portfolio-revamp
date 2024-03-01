"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Circle } from "@/components/bg-circle";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(10, { message: "This field has to be filled." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="relative pt-10 px-8 md:px-36 overflow-hidden">
      <Circle className="top-4 -right-[100px] md:right-[50px]"></Circle>
      <Card className="w-full border-none md:h-[606px] md:pt-20 rounded-xl md:bg-[#080705]">
        <CardHeader className="md:text-center">
          <CardTitle className="relative z-20 text-3xl font-bold tracking-wider">
            Get in touch_
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg md:text-2xl mt-10 md:mt-0 p-10 rounded-xl bg-[#080705] md:bg-none">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormDescription>*Provide your name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription>*Provide your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel>message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="message"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>*Leave a brief message</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-[200px] h-[52px] mt-10 mx-auto bg-[#390895] hover:bg-[#c62df3]"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}