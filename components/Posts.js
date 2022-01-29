import React from "react";
import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "fadeel",
		userImg: "https://abia.net.au/wp-content/uploads/2021/05/LI.png",
		img: "https://abia.net.au/wp-content/uploads/2021/05/LI.png",
		caption: "this is dope",
	},

	{
		id: "234",
		username: "adesewa",
		userImg: "https://abia.net.au/wp-content/uploads/2021/05/LI.png",
		img: "https://abia.net.au/wp-content/uploads/2021/05/LI.png",
		caption: "this is dope",
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
