"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "@/lib/themeContext";

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
  const { theme } = useThemeContext();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    toast({
      variant: "destructive",
      title: "Loading....",
      description: "Sending contact info...",
    });
    axios
      .post(
        "https://misterh-api-server.onrender.com/api/emails/new",
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setLoading(false);
        toast({
          variant: "destructive",
          title: `Thank you ${values.name}`,
          description: "Your information has been sent, will get touch soon!!",
        });
        form.reset();
      })
      .catch((error) => {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: "An error occurred while trying to submit the form",
        });
      });
  }

  return (
    <div className="relative pt-10 px-8 md:px-36 overflow-hidden">
      <Circle className="top-4 -right-[100px] md:right-[50px]" />
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ type: "tween" }}
      >
        <Card
          className={`${theme} w-full border-none md:pt-20 mb-10 rounded-xl`}
        >
          <CardHeader className="md:text-center">
            <CardTitle className="relative z-20 text-3xl font-bold tracking-wider">
              Get in touch_
            </CardTitle>
          </CardHeader>
          <CardContent
            className={`${theme} text-lg md:text-2xl mt-10 md:mt-0 p-10 rounded-xl`}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>name</FormLabel>
                      <FormControl>
                        <Input
                          className="resize-none bg-foreground text-card border-card"
                          placeholder="name"
                          {...field}
                        />
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
                        <Input
                          className="resize-none bg-foreground text-card border-card"
                          placeholder="email"
                          {...field}
                        />
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
                          className="resize-none bg-foreground text-card border-card"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>*Leave a brief message</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="justify-center">
                  <Button
                    disabled={loading}
                    className="w-[200px] h-[52px] mt-10 bg-secondary hover:bg-accent"
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
