import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/github";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// ...add more providers here
	],

	theme: {
		logo: "https://abia.net.au/wp-content/uploads/2021/05/LI.png",
		brandColor: "#f13287",
		colorScheme: "auto",
	},
});
