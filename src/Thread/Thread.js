import React from "react";

import { Link } from "react-router-dom";

import "./Thread.css";

const thread = post => {
	return (
		<div
			style={{
				border: "1px solid black",
				float: "left",
				padding: "5px 5px 0px 5px",
				width: "750px"
			}}
		>
			<div style={{ float: "left", padding: "5px" }}>
				<button className="Upvote" onClick={post.upVote}>
					^
				</button>
				<p className="UpvoteText">{post.upvotes}</p>
				<button className="Downvote" onClick={post.downVote}>
					v
				</button>
			</div>
			<Link to={"/" + post.id}>
				<div
					onClick={post.openThread}
					style={{
						float: "left",
						textAlign: "left",
						width: "700px",
						border: "1px solid red"
					}}
				>
					<span>{post.flair}</span>
					<span className="TitleText">{post.title}</span>
					<p className="AuthorText">
						Posted by u/{post.author} {post.age} ago
					</p>
					<p className="CommentText">{post.comments} Comments</p>
				</div>
			</Link>
			<br />
		</div>
	);
};

export default thread;
