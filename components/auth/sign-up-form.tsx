"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { useForm } from "react-hook-form";
import { signUp } from "@/lib/auth/auth-client";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpSchema } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { toast } from "sonner";
import SignSocial from "./sign-social";

const SignUpForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {

        const { username, email, password, name } = values

        await signUp.email({
            username: username,
            email: email,
            password: password,
            name: name,
            fetchOptions: {
                onError: (ctx) => {
                    toast.error(ctx.error.message)
                },
                onSuccess: () => {
                    router.push('/dashboard')
                }
            },
        })
    }


    return (
        <Card className="z-50 rounded-md rounded-t-none lg:max-w-[600px] lg:min-h-[350px] md:min-w-[400px] md:max-w-[500px] md:min-h-[300px] max-w-[500px]">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign Up to sinsajo.</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Name</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="Full Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Username</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="email@example.com" {...field} />
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

                        <FormField
                            control={form.control}
                            name="password_confirmation"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Confirm Password</FormLabel> */}
                                    <FormControl>
                                        <PasswordInput {...field} placeholder="Confirm Password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Link href="/sign-in" className=' text-sm'> Already have an account? Sign In</Link>
                        <Button type="submit" className="mt-4" disabled={form.formState.isSubmitting}>
                            Sign Up
                        </Button>
                    </form>
                </Form>

                <SignSocial className="mt-4" />
            </CardContent>
            <CardFooter>
                <CardDescription className="text-xs">
                    By clicking continue, you acknowledge that you have read and agree to {"Sinsajo's"} <Link href="/terms-of-service" className="underline" >Terms of Service</Link>, <Link href="/policy-privacy" className=" underline">Policy Privacy</Link> and <Link href="/cookies-policy" className=" underline">Cookies Policy</Link>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}

export default SignUpForm