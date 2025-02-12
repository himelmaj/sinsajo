"use client";

import { Button } from "@/components/ui/button"
import { useSession, signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation"

const SignOut = () => {

    const router = useRouter()

    return (

        <Button variant="outline" className="mt-10" onClick={async () =>
            await signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/")
                    },
                },
            })
        }>Sign Out</Button>

    )
}

export default SignOut