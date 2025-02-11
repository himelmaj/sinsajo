"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { useForm } from "react-hook-form";
import { signIn } from "@/lib/auth/auth-client";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInSchema } from "@/lib/validators/auth";
import Link from 'next/link'
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SignSocial from "./sign-social";

const SignIn = () => {

  const router = useRouter()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
      rememberMe: false
    },
  })

  const isEmail = (value: string) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {

    const { emailOrUsername, password, rememberMe } = values

    if (isEmail(emailOrUsername)) {
      await signIn.email({
        email: emailOrUsername,
        password,
        rememberMe,
        fetchOptions: {
          onResponse: () => {
            console.log("response")
          },
          onRequest: () => {
            console.log("request")
          },
          onError: (ctx) => {
            toast.error(ctx.error.message)
          },
          onSuccess: () => {
            router.push("/dashboard")
          }
        }
      })
    } else {
      await signIn.username({
        username: emailOrUsername,
        password,
        rememberMe,
        fetchOptions: {
          onResponse: () => {
            console.log("response")
          },
          onRequest: () => {
            console.log("request")
          },
          onError: (ctx) => {
            toast.error(ctx.error.message)
          },
          onSuccess: () => {
            router.push("/dashboard")
          }
        }
      })
    }

  }
  return (
    <Card className="z-50 rounded-md rounded-t-none lg:max-w-[600px] lg:min-h-[350px] md:min-w-[400px] md:max-w-[500px] md:min-h-[300px] max-w-[500px]">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">

            <FormField
              control={form.control}
              name="emailOrUsername"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email or Username</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Email or Username" {...field} />
                  </FormControl>
                  <FormMessage />

                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Password</FormLabel> */}
                  <FormControl>
                    <PasswordInput {...field} placeholder="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* remember me */}


            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 rounded-md gap-2 py-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Remember me</FormLabel>
                  </div>
                </FormItem>
              )}
            />


            <Link href="/sign-up" className="text-sm">{"Don't have an account? Sign Up"}</Link>


            <Button type="submit" className="" disabled={form.formState.isSubmitting}>
              Sign In
            </Button>

          </form>
        </Form>

        <SignSocial className="mt-4" />

      </CardContent>
    </Card>
  )
}

export default SignIn