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
		<div className="flex mt-5">
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
