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
		<div className="flex space-x-2 p-6 bg-red mt-8 border-black-200 border rounder-sm">
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
