import React from 'react';

function Story({ username, img }) {
	return (
		<div className="flex flex-col items-center justify-center">
			<img
				className="rounded-full h-10 w-10 object-contain"
				src={img}
				alt=""
			/>
			{/* <p>{username}</p> */}
		</div>
	);
}

export default Story;
