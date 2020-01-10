import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Thread from "../Thread/Thread";
import { render } from "@testing-library/react";

class Home extends Component {
	state = {
		posts: [
			{
				id: 0,
				upvotes: 831,
				flair: null,
				title: "New? READ ME FIRST!",
				author: "michael0x2a",
				age: "2 years",
				comments: 15
			},
			{
				id: 1,
				upvotes: 1000,
				flair: null,
				title:
					"You guys interested in a website that focuses on learning design / ux / ui / css ?",
				author: "web_dev1996",
				age: "13 hours",
				comments: 130
			},
			{
				id: 2,
				upvotes: 23,
				flair: null,
				title:
					"How would you learn to code if you had all the free time? (Enough savings to sustain yourself)",
				author: "hakerys23",
				age: "6 hours",
				comments: 9
			},
			{
				id: 3,
				upvotes: 3300,
				flair: "Resource",
				title:
					"Learn the syntax of any programming language really fast, like in minutes",
				author: "1TMission",
				age: "1 day",
				comments: 91
			},
			{
				id: 4,
				upvotes: 16,
				flair: null,
				title:
					"What tool do you use to plan your projects from scratch?",
				author: "wulfgar4president",
				age: "10 hours",
				comments: 6
			}
		],
		loggedIn: false
	};

	upVote = id => {
		console.log(1);
		// spread the posts out into an immutable object
		let posts = [...this.state.posts];

		// Look for the correct post to modify
		for (let i = 0; i < posts.length; i++) {
			if (posts[i].id === id) {
				// Modify it with +1 upvotes
				// console.log(posts[i]);
				posts[i].upvotes += 1;
				// console.log(posts[i]);
			}
		}

		this.setState({
			posts: posts
		});
	};

	downVote = id => {
		console.log(2);
		// spread the posts out into an immutable object
		let posts = [...this.state.posts];

		// Look for the correct post to modify
		for (let i = 0; i < posts.length; i++) {
			if (posts[i].id === id) {
				// Modify it with -1 upvotes (+1 downvotes)
				// console.log(posts[i]);
				posts[i].upvotes -= 1;
				// console.log(posts[i]);
			}
		}

		this.setState({
			posts: posts
		});
	};

	openThread = id => {
		console.log(id);
	};

	render() {
		const isLoggedIn = this.state.loggedIn;

		let postBox;
		if (isLoggedIn) {
			postBox = (
				<div>
					<p>Post something!</p>
					<p>Post Title:</p>
					<input
						type="text"
						name="title"
						onChange={this.postTitle}
					></input>
					<p>Message (Optional)</p>
					<input
						type="text"
						name="msg"
						onChange={this.postMsg}
					></input>
					<button onClick={this.postThread}>Post</button>
				</div>
			);
		} else {
			postBox = null;
		}

		const threads = (
			<div style={{ width: "750px" }}>
				{this.props.posts.map((post, index) => {
					return (
						<div key={index}>
							{/* <Link to={"/" + index}> */}
							<Thread
								className="ThreadContainer"
								upvotes={post.upvotes}
								flair={post.flair}
								title={post.title}
								author={post.author}
								age={post.age}
								comments={post.comments}
								upVote={this.upVote.bind(this, post.id)}
								downVote={this.downVote.bind(this, post.id)}
								openThread={this.openThread.bind(this, post.id)}
								id={post.id}
							/>
							{/* </Link> */}
						</div>
					);
				})}
			</div>
		);

		return (
			<div>
				<div style={{ margin: "20px" }}> {threads}</div>
				{postBox}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps)(Home);
// export default Home;
