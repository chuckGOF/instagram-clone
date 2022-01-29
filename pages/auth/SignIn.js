/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

// user - middleserver - server

// Browser...
function SignIn({ providers }) {
	return (
		<>
			<Header />

			<div className="flex items-center flex-col justify-center py-2 min-h-screen -mt-20 px-14 text-center">
				<img
					className="w-80"
					src="https://links.papareact.com/ocw"
					alt=""
				/>
				<p className="font-xs italic">
					This is not a REAL app, it is built for educational purposes
					only
				</p>

				<div className="mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 bg-blue-500 rounded-lg text-white"
								onClick={() =>
									signIn(provider.id, { callbackUrl: "/" })
								}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

// Middle Server - Server side render
export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
export default SignIn;
