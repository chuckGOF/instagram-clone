import { useState, useEffect } from "react";

function Stories() {
	const [profiles, setProfiles] = useState([]);

	useEffect(() => {
		fetch("https://fakerapi.it/api/v1/users?_quantity=10").then((resp) =>
			console.log(resp.data)
		);
	}, []);
	return <div></div>;
}

export default Stories;
