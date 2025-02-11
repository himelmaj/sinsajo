import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { addAccountToSession } from "./plugin";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { multiSession, username } from "better-auth/plugins";
import { db } from "@/lib/db";
import { user, verification, account, session } from "@/drizzle/schemas/main";
import { 
    GITHUB_CLIENT_ID, 
    GITHUB_CLIENT_SECRET, 
    SPOTIFY_CLIENT_ID, 
    SPOTIFY_CLIENT_SECRET, 
    DISCORD_CLIENT_ID, 
    DISCORD_CLIENT_SECRET, 
    TWITCH_CLIENT_ID, 
    TWITCH_CLIENT_SECRET 
} from "@/config/env";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user,
            verification,
            account,
            session
        }
    }),
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 60,
        },
    },
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["spotify", "discord", "github", "twitch"],
        },
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        },
        spotify: {
            clientId: SPOTIFY_CLIENT_ID,
            clientSecret: SPOTIFY_CLIENT_SECRET,
        },
        discord: {
            clientId: DISCORD_CLIENT_ID,
            clientSecret: DISCORD_CLIENT_SECRET,
        },
        twitch: {
            clientId: TWITCH_CLIENT_ID,
            clientSecret: TWITCH_CLIENT_SECRET,
        },
    },
    plugins: [nextCookies(), multiSession(), addAccountToSession, username()],
});
