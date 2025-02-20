import { createAuthClient } from "better-auth/react";
import { multiSessionClient, usernameClient } from "better-auth/client/plugins";
// import { toast } from "sonner";

export const client = createAuthClient({
	plugins: [
		// organizationClient(),
		// twoFactorClient({
		// 	onTwoFactorRedirect() {
		// 		window.location.href = "/two-factor";
		// 	},
		// }),
		// passkeyClient(),
		// adminClient(),
		multiSessionClient(),
		usernameClient(),
		// oneTapClient({
		// 	clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
		// }),
	],
	fetchOptions: {
		onError(e) {
			if (e.error.status === 429) {
				// toast.error("Too many requests. Please try again later.");
				console.error("Too many requests. Please try again later.");
			}
		},
	},
});

export const {
	signUp,
	signIn,
	signOut,
	useSession,
} = client;