import type { NextAuthOptions } from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export const authOptions: NextAuthOptions = {
	providers: [
		TwitchProvider({
			clientId: process.env.TWITCH_CLIENT_ID as string,
			clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
		}),
	],
	pages: {
		signIn: "/signin",
	},
	secret: process.env.NEXTAUTH_SECRET,
};
