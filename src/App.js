import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import FullThread from "./FullThread/FullThread";
import Home from "./Home/Home";

// const APP_ID = "m9eXdciVGsQDqw";
// const APP_SECRET = "h9cVbWML9Tf59nWu0vaBAukMYD8";
// const hard_url =
// "https://www.reddit.com/r/learnprogramming/new/.json?count=25&after=";

class App extends Component {
	state = {
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
			comments: 0,
			postText: this.state.tempMsg
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
		// dispatches the new post into redux state
		makeNewPost: post => dispatch({ type: "ADD_POST", newPost: { post } })
	};
};

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
