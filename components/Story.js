/* eslint-disable @next/next/no-img-element */
import React from "react";

function Story({ username, img }) {
	return (
		<div className="">
			<img
				className="h-14 w-14 object-contain rounded-full 
				border-red-500 border-2 p-[1.5px] cursor-pointer 
				hover:scale-110 transition transform duration-200 ease-out "
				src={img}
				alt=""
			/>
			<p className="text-xs w-14 truncate text-center ">{username}</p>
		</div>
	);
}

export default Story;
