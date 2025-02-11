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
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { useForm } from "react-hook-form";
import { signUp, signIn } from "@/lib/auth/auth-client";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpSchema } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from 'next/link'
import { toast } from "sonner";
import SignSocial from "./sign-social";

const SignUpForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
        await signUp.email({
            email: values.email,
            password: values.password,
            name: values.name,
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
        <Card className="z-50 rounded-md rounded-t-none lg:min-w-[600px] lg:max-w-[600px] md:min-w-[400px]">
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
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
                                    <FormLabel>Email</FormLabel>
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
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} />
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
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} />
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
        </Card>
    )
}

export default SignUpForm