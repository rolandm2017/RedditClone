const initialPosts = {
	posts: [
		{
			id: 0,
			upvotes: 831,
			flair: null,
			title: "New? READ ME FIRST!",
			author: "michael0x2a",
			age: "2 years",
			comments: 15,
			postText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			id: 1,
			upvotes: 1000,
			flair: null,
			title:
				"You guys interested in a website that focuses on learning design / ux / ui / css ?",
			author: "web_dev1996",
			age: "13 hours",
			comments: 130,
			postText:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco."
		},
		{
			id: 2,
			upvotes: 23,
			flair: null,
			title:
				"How would you learn to code if you had all the free time? (Enough savings to sustain yourself)",
			author: "hakerys23",
			age: "6 hours",
			comments: 9,
			postText:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			id: 3,
			upvotes: 3300,
			flair: "Resource",
			title:
				"Learn the syntax of any programming language really fast, like in minutes",
			author: "1TMission",
			age: "1 day",
			comments: 91,
			postText:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
		},
		{
			id: 4,
			upvotes: 16,
			flair: null,
			title: "What tool do you use to plan your projects from scratch?",
			author: "wulfgar4president",
			age: "10 hours",
			comments: 6,
			postText:
				"Aliquet nibh praesent tristique magna. Arcu cursus vitae congue mauris rhoncus aenean vel."
		}
	],
	loggedIn: false
};

const reducer = (state = initialPosts, action) => {
	if (action.type === "ADD_POST") {
		console.log("HEY: ", action.newPost);
		console.log(state.posts.concat(action.newPost.post.tempThread));
		return {
			...state,
			// receives newPost data from app.js
			posts: state.posts.concat(action.newPost.post.tempThread)
		};
	}
	if (action.type === "RETURN") {
		console.log("RETURNED! ", action.payload);
		console.log("RETURNED: ", state.posts);
		return {
			...state,
			posts: state.posts.concat(action.payload)
		};
	}

	return state;
};

export default reducer;
