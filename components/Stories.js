import { useState, useEffect } from "react";
import Story from "./Story";
import faker from "@faker-js/faker";

function Stories() {
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
