import { useState, useEffect } from "react";
import Story from "./Story";
import faker from "@faker-js/faker";
import { useSession } from "next-auth/react";

function Stories() {
	const { data: session } = useSession();
	const [profiles, setProfiles] = useState([]);

	useEffect(() => {
		const getProfiles = [...Array(20)].map((_, i) => ({
			// x: faker.helpers.contextualCard()
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setProfiles(getProfiles);
	}, []);

	return (
		<div className="flex space-x-2 p-6 mt-8 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{session && (
				<Story
					key={session.user.uid}
					img={session.user.image}
					username={session.user.username}
				/>
			)}
			{profiles.map((profile) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	);
}

export default Stories;
