"use client";

import { signIn } from "@/lib/auth/auth-client";
import { Button } from "@/components/ui/button";

export default function GithubSignIn() {

  const handleGithubLogin = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: `${window.location.origin}/sign-in`,
    });
  };

  return (
    <Button
      variant="secondary"
      onClick={handleGithubLogin}
      className="flex items-center gap-2 w-full"
    >
      GitHub
    </Button>
  );
}