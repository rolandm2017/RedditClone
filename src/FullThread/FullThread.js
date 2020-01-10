import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "./FullThread.css";

class fullThread extends Component {
	constructor(props) {
		super(props);
		const stateFromStorage = localStorage.getItem("state");
		if (this.props.posts === null) {
			this.props.returnPostsToState(JSON.parse(stateFromStorage));
		}
		console.log("Message sent from the Constructor method");
	}

	componentDidMount() {
		console.log("300: ", this.props.posts);
		localStorage.setItem("state", JSON.stringify(this.props.posts));
		console.log(this.props.posts);
	}

	render() {
		console.log(this.props.posts);

		// deliberate exclusion of 2nd parameter in .slice() to make it go til the end
		const number = this.props.location.pathname.slice(1);
		const threadTitle = this.props.posts[number]
			? this.props.posts[number].title
			: "";
		// let flair = this.props.posts[number]
		// ? this.props.post[number].flair
		// : "";
		const upVotes = this.props.posts[number]
			? this.props.posts[number].upvotes
			: "";
		const author = this.props.posts[number]
			? this.props.posts[number].author
			: "";
		const age = this.props.posts[number]
			? this.props.posts[number].age
			: "";
		const postText = this.props.posts[number]
			? this.props.posts[number].postText
			: "";

		// if (this.props.posts[number].flair) {
		// 	flair = this.props.posts[number].flair;
		// }

		return (
			<div>
				<div className="MainBody">
					<h4>Thread titled: {threadTitle}</h4>
					<br />
					{/* {flair} */}
					<p>Upvotes: {upVotes}</p>
					<p>
						Posted by u/{author} {age} ago
					</p>
					<p>{postText}</p>

					<Link to="/">Back to Homepage</Link>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		returnPostsToState: stateFromStorage =>
			dispatch({ type: "RETURN", payload: stateFromStorage })
	};
};

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(fullThread);
// export default fullThread;
