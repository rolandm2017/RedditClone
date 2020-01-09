import React from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "./FullThread.css";

const fullThread = props => {
	console.log(props);
	console.log(props.posts);

	// deliberate exclusion of 2nd parameter in .slice() to make it go til the end
	const number = props.location.pathname.slice(1);
	const threadTitle = props.posts[number].title;
	let flair = null;
	const upVotes = props.posts[number].upvotes;
	const author = props.posts[number].author;
	const age = props.posts[number].age;
	const postText = props.posts[number].postText;

	if (props.posts[number].flair) {
		flair = props.posts[number].flair;
	}

	return (
		<div>
			<div className="MainBody">
				<h4>Thread titled: {threadTitle}</h4>
				<br />
				{flair}
				<p>Upvotes: {upVotes}</p>
				<p>
					Posted by u/{author} {age} ago
				</p>
				<p>{postText}</p>
				<Link to="/">Back to Homepage</Link>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps)(fullThread);
// export default fullThread;
