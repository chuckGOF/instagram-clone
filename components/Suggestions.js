/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";

function Suggestions() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const getSuggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setSuggestions(getSuggestions);
	}, []);

	return (
		<div className="mt-4 ml-12">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">
					Suggestions for you
				</h3>
				<button className="ext-gray-600 font-semibold">See All</button>
			</div>

			{suggestions.map((profile) => (
				<div
					className="flex justify-between items-center mt-3"
					key={profile.id}
				>
					<img
						className="rounded-full h-10 w-10 border p-[2px]"
						src={profile.avatar}
						alt=""
					/>

					<div className="flex-1 ml-4">
						<h2 className="font-semibold text-sm truncate">
							{profile.username}
						</h2>
						<h3 className="text-xs text-gray-400 truncaten">
							Works at {profile.company.name}
						</h3>
					</div>

					<button className="font-bold text-blue-400 text-xs">Follow</button>
				</div>
			))}
		</div>
	);
}

export default Suggestions;
