import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
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
					setPosts(snapshot.docs.map((snap) => snap.data()));
				}
			),
		[]
	);

	return (
		<div>
			{posts.map((post, index) => (
				<Post
					key={index}
					username={post.username}
					userImg={post.userImg}
					img={post.image}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
