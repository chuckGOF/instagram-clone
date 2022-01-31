import React from "react";
import Moment from 'react-moment'

function Comment({ comment, username, userImage, timestamp }) {
	return (
		<div className="flex items-center space-x-2 mb-3">
			<img className="h-7 w-7 rounded-full" src={userImage} alt="" />
			<p className="text-sm flex-1">
				<span className="font-bold mr-1">{username}</span>{" "}
				{comment}
			</p>

            <Moment fromNow className="pr-5 text-xs">
                {timestamp?.toDate()}
            </Moment>
		</div>
	);
}

export default Comment;
