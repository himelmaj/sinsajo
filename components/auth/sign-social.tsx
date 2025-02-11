"use client"
import { signIn } from "@/lib/auth/auth-client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Discord, Spotify, GitHub, Twitch  } from "@/components/icons";

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
        <div className={cn("flex items-center gap-2 mt-2", className)}>

            {/* github */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("github")}>
                <GitHub />
                GitHub
            </Button>

            {/* discord */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("discord")}>
                <Discord />
                Discord
            </Button>

            {/* spotify */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("spotify")}>
                <Spotify />
                Spotify
            </Button>

            {/* twitch */}

            <Button variant="outline" className="w-full gap-2" onClick={() => signInSocial("twitch")}>
                <Twitch />
                Twitch
            </Button>

        </div>
    )
}

export default SignSocial