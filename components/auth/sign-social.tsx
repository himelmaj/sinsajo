"use client"
import { signIn } from "@/lib/auth/auth-client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Discord, Spotify, GitHub, Twitch } from "@/components/icons";

interface SignSocialProps {
    className?: string
}

type Provider = "github" | "discord" | "spotify" | "twitch"

const SignSocial = ({ className }: SignSocialProps) => {

    const signInSocial = async (provider: Provider) => {
        await signIn.social({
            provider: provider,
            callbackURL: `${window.location.origin}/sign-in`,
        });
    }

    return (
        <div className={cn("flex flex-row  gap-2 mt-2", className)}>

            {/* github */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("github")}>
                <GitHub />
                <span className="hidden md:block">
                    GitHub
                </span>
            </Button>

            {/* discord */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("discord")}>
                <Discord />
                <span className="hidden sm:block">
                    Discord
                </span>
            </Button>

            {/* spotify */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("spotify")}>
                <Spotify />
                <span className="hidden sm:block">
                    Spotify
                </span>
            </Button>

            {/* twitch */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("twitch")}>
                <Twitch />
                <span className="hidden sm:block">
                    Twitch
                </span>
            </Button>

        </div>
    )
}

export default SignSocial