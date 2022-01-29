import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// ...add more providers here
	],

	pages: {
		signIn: "/auth/SignIn",
	},

	// allows us to customise the data received from data
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase();

			session.user.uid = token.sub;
			return session;
		},
	},

	// use nextjs authentication page
	// theme: {
	// 	logo: "https://abia.net.au/wp-content/uploads/2021/05/LI.png",
	// 	brandColor: "#f13287",
	// 	colorScheme: "auto",
	// },
});
