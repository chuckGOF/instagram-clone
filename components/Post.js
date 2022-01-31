/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
	addDoc,
	collection,
	doc,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Comment from "./Comment";

function Post({ id, username, userImg, img, caption }) {
	const { data: session } = useSession();
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
	const [likes, setLikes] = useState([]);
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, "posts", id, "comments"),
					orderBy("timestamp", "desc")
				),
				(snapshot) => setComments(snapshot.docs)
			),
		[db, id]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
				setLikes(snapshot.docs)
			),
		[db, id]
	);
	// async () => {
	// 	const queryComments = await getDocs(
	// 		collection(db, "posts", id, "comments"),
	// 		orderBy("timestamp", "desc")
	// 	);

	// 	queryComments.forEach((comment) => setComments(comment.data()));
	// 	console.log(comments);
	// }

	const likePost = async (e) => {
		e.preventDefault();
		await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
			username: session.user.username,
		});
	};

	const postComment = async (e) => {
		e.preventDefault();
		let message = comment;
		setComment("");

		await addDoc(
			collection(db, /*`posts/${id}/comments`*/ "posts", id, "comments"),
			{
				comment: message,
				username: "fadeelgbaiye",
				userImage:
					"https://firebasestorage.googleapis.com/v0/b/instagram-clone-a3667.appspot.com/o/posts%2FogDe8zBeUrPZPGRF6JFQ%2Fimage?alt=media&token=5084bb38-faf5-478a-a1cd-29ab3e2d5f48",
				timestamp: serverTimestamp(),
			}
		);
	};

	return (
		<div className="bg-white rounded-sm my-7 border">
			<div className="flex items-center p-5">
				<img
					className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
					src={userImg}
					alt=""
				/>
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className="h-5" />
			</div>

			<img className="object-cover w-full" src={img} alt="image" />

			{/* {session && (
				<div className="flex justify-between px-4 pt-4">
					<div className="flex space-x-4">
						<HeartIcon className="btn" />
						<ChatIcon className="btn" />
						<PaperAirplaneIcon className="btn" />
					</div>
					<BookmarkIcon className="btn" />
				</div>
			)} */}
			<div className="flex justify-between px-4 pt-4">
				<div className="flex space-x-4">
					<HeartIcon onClick={likePost} className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn" />
				</div>
				<BookmarkIcon className="btn" />
			</div>

			<p className="p-5 truncate">
				<span className="font-bold mr-1">{username}</span>
				{caption}
			</p>

			{/* comments */}
			{comments.length > 0 && (
				<div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
					{comments.map((comment, index) => (
						<Comment
							key={index}
							comment={comment.data().comment}
							username={comment.data().username}
							userImage={comment.data().userImage}
							timestamp={comment.data().timestamp}
						/>
					))}
				</div>
			)}

			{/* {session && (
				<form className="flex items-center p-4">
					<EmojiHappyIcon className="h-7" />
					<input
						placeholder="Add a comment"
						className="border-none flex-1 focus:ring-0 outline-none"
						type="text"
					/>
					<button className="font-semibold text-blue-400">
						Post
					</button>
				</form>
			)} */}

			<form className="flex items-center p-4">
				<EmojiHappyIcon className="h-7" />
				<input
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Add a comment"
					className="border-none flex-1 focus:ring-0 outline-none"
					type="text"
				/>
				<button
					onClick={postComment}
					disabled={!comment.trim()}
					type="submit"
					className="font-semibold text-blue-400"
				>
					Post
				</button>
			</form>
		</div>
	);
}

export default Post;
