import {
	collection,
	getDocs,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),
		[]
	);

	// () => {
	// 	const queryDoc = async () => {
	// 		const postsQuery = query(
	// 			collection(db, "posts"),
	// 			orderBy("timestamp", "desc")
	// 		);

	// 		const querySnapshot = await getDocs(postsQuery);
	// 		querySnapshot.forEach((snap) => {
	// 			let { username, userImg, img, caption } = snap.data();
	// 			let obj = {
	// 				id: snap.id,
	// 				username: username,
	// 				userImg: userImg,
	// 				img: img,
	// 				caption: caption,
	// 			};
	// 			setPosts((prevState) => [...prevState, obj]);
	// 			// setOrders((prevState) => [...prevState, snap.data()])
	// 		});
	// 	};
	// 	queryDoc();
	// };

	return (
		<div>
			{posts.map((post, index) => (
				<Post
					key={index}
					id={post.id}
					username={post.data().username}
					userImg={post.data().userImg}
					img={post.data().image}
					caption={post.data().caption}
				/>
			))}
		</div>
	);
}

export default Posts;
