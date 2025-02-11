import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { addAccountToSession } from "./plugin";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { multiSession, username } from "better-auth/plugins";
import { db } from "@/lib/db";
import { user, verification, account, session } from "@/drizzle/schemas/auth";

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
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        },
        spotify: {
            clientId: process.env.SPOTIFY_CLIENT_ID || "",
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
        },
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
        },
        twitch: {
            clientId: process.env.TWITCH_CLIENT_ID || "",
            clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
        },

    },
    plugins: [nextCookies(), multiSession(), addAccountToSession, username()],
});
