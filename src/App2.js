import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

const APP_ID = "m9eXdciVGsQDqw";
const APP_SECRET = "h9cVbWML9Tf59nWu0vaBAukMYD8";
const hard_url =
	"https://www.reddit.com/r/learnprogramming/new/.json?count=25&after=";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.wallpaperSubreddits =
	// 		"wallpapers+wallpaper+widescreenwallpaper+wqhd_wallpaper";
	// 	this.portraitSubreddits =
	// 		"mobilewallpapers+amoledbackgrounds+verticalwallpapers";
	// 	this.memesSubreddits = "memes+dankmemes+memeeconomy+animemes";
	// 	this.subredditsArray = [
	// 		"wallpaper",
	// 		"wallpapers",
	// 		"widescreenwallpaper",
	// 		"wqhd_wallpaper",
	// 		"memes",
	// 		"dankmemes",
	// 		"memeeconomy",
	// 		"animemes",
	// 		"mobilewallpapers",
	// 		"amoledbackgrounds",
	// 		"verticalwallpapers"
	// 	];
	// 	this.url = "https://www.reddit.com/r/";
	// 	this.sorts = ["hot", "new", "top", "controversial", "rising"];
	// }

	state = {
		currentSubreddit: "learnprogramming",
		sort: "new",
		files: [],
		after: null,
		before: null,
		page: 1
	};

	getJSON = () => {
		fetch(hard_url)
			.then(results => results.text())
			.then(
				data => console.log(data)

				// this.setState(() => ({
				// 	files: data
				// 	// after: data.data.after,
				// 	// before: data.data.before
				// }));
			);
	};

	// nextPage = () => {
	// 	fetch(
	// 		this.url +
	// 			this.state.currentSubreddit +
	// 			"/" +
	// 			this.state.sort +
	// 			".json?count=" +
	// 			this.state.page * 25 +
	// 			"&after=" +
	// 			this.state.after
	// 	)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			this.setState(() => ({
	// 				files: data.data.children,
	// 				after: data.data.after,
	// 				before: data.data.before,
	// 				page: this.state.page + 1
	// 			}));
	// 			window.scrollTo(0, 0);
	// 		})
	// 		.catch(console.log);
	// };

	checkContents = () => {
		console.log(typeof this.state.files);
	};

	render() {
		// axios.get({
		// 	url: "/r/learnprogramming/top/.json?count=20",
		// 	data: {
		// 		client_id: APP_ID,
		// 		client_secret: APP_SECRET,
		// 		user_agent: "My Knockoff App"
		// 	}
		// });
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<button onClick={this.getJSON}>Make Data</button>
					<button onClick={this.checkContents}>Show Data</button>
				</header>
			</div>
		);
	}
}

export default App;
