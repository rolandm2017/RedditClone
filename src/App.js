import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Thread from "./Thread/Thread";
import FullThread from "./FullThread/FullThread";
import Home from "./Home/Home";

// const APP_ID = "m9eXdciVGsQDqw";
// const APP_SECRET = "h9cVbWML9Tf59nWu0vaBAukMYD8";
// const hard_url =
// "https://www.reddit.com/r/learnprogramming/new/.json?count=25&after=";

class App extends Component {
	state = {
		// posts: [
		// 	{
		// 		id: 0,
		// 		upvotes: 831,
		// 		flair: null,
		// 		title: "New? READ ME FIRST!",
		// 		author: "michael0x2a",
		// 		age: "2 years",
		// 		comments: 15
		// 	},
		// 	{
		// 		id: 1,
		// 		upvotes: 1000,
		// 		flair: null,
		// 		title:
		// 			"You guys interested in a website that focuses on learning design / ux / ui / css ?",
		// 		author: "web_dev1996",
		// 		age: "13 hours",
		// 		comments: 130
		// 	},
		// 	{
		// 		id: 2,
		// 		upvotes: 23,
		// 		flair: null,
		// 		title:
		// 			"How would you learn to code if you had all the free time? (Enough savings to sustain yourself)",
		// 		author: "hakerys23",
		// 		age: "6 hours",
		// 		comments: 9
		// 	},
		// 	{
		// 		id: 3,
		// 		upvotes: 3300,
		// 		flair: "Resource",
		// 		title:
		// 			"Learn the syntax of any programming language really fast, like in minutes",
		// 		author: "1TMission",
		// 		age: "1 day",
		// 		comments: 91
		// 	},
		// 	{
		// 		id: 4,
		// 		upvotes: 16,
		// 		flair: null,
		// 		title:
		// 			"What tool do you use to plan your projects from scratch?",
		// 		author: "wulfgar4president",
		// 		age: "10 hours",
		// 		comments: 6
		// 	}
		// ],
		checkname: "test",
		username: "",
		loggedIn: false,
		tempTitle: "",
		tempMsg: ""
	};

	postTitle = event => {
		this.setState({ tempTitle: event.target.value });
	};

	postMsg = event => {
		this.setState({ tempMsg: event.target.value });
	};

	postThread = event => {
		// the idea: when the button is clicked, record the contents of input fields
		// into stored state.
		console.log("this.props.posts: ", this.props.posts);
		let newPosts = [...this.props.posts];
		let newId = newPosts.length;

		const tempThread = {
			id: newId,
			upvotes: 1,
			flair: null,
			title: this.state.tempTitle,
			author: this.state.username,
			age: "1 minute [hardcoded]",
			comments: 0
		};

		// newPosts.unshift(tempThread);

		// this.setState({ posts: newPosts });
		console.log("event: ", tempThread);
		this.props.makeNewPost({ tempThread });
	};

	signUp = () => {
		if (this.state.username.length < 3) {
			this.setState({ checkName: "Username is too short" });
			console.log("Too short");
		} else {
			this.setState({ checkName: "Long enough" });
			console.log("Long enough");
			this.setState({ loggedIn: !this.state.loggedIn });
		}
	};

	handleChange = event => {
		this.setState({
			username: event.target.value
		});
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

		return (
			<div className="App">
				<Router>
					<div className="Header">
						<p className="Logo">Reddit Clone</p>
						{this.state.username.length > 2 &&
						this.state.loggedIn ? (
							<p>Logged in as u/{this.state.username}</p>
						) : null}
						{this.state.loggedIn ? null : (
							<div style={{ float: "right" }}>
								<input
									type="text"
									name="Username"
									onChange={this.handleChange}
								></input>
								<button onClick={this.signUp}>Sign Up</button>
								<p>{this.state.checkName}</p>
							</div>
						)}
					</div>
					<Route path="/" exact component={Home}></Route>
					<Route path="/:id" exact component={FullThread}></Route>
					{postBox}
				</Router>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		makeNewPost: post => dispatch({ type: "ADD_POST", newPost: { post } })
	};
};

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
