import { betterAuth } from "better-auth";
// import {
//     bearer,
//     multiSession,
//     oneTap,
//     oAuthProxy,
// } from "better-auth/plugins";

import { nextCookies } from "better-auth/next-js";
// import { addAccountToSession } from "./plugin";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
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
            trustedProviders: ["google", "github"],
        },
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        // facebook: {
        //     clientId: process.env.FACEBOOK_CLIENT_ID || "",
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
        // },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        },
        // google: {
        //     clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        // },
        // discord: {
        //     clientId: process.env.DISCORD_CLIENT_ID || "",
        //     clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
        // },
        // microsoft: {
        //     clientId: process.env.MICROSOFT_CLIENT_ID || "",
        //     clientSecret: process.env.MICROSOFT_CLIENT_SECRET || "",
        // },
        // twitch: {
        //     clientId: process.env.TWITCH_CLIENT_ID || "",
        //     clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
        // },
        // twitter: {
        //     clientId: process.env.TWITTER_CLIENT_ID || "",
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
        // },
    },
    plugins: [nextCookies()]
});
