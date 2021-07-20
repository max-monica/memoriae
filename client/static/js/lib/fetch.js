const mockData = {
	title: 'Made in Abyss',
	date: Date.now(),
	id: 'oiuahdfgasdgioh',
	author: 'max',
	body: 'Made in Abyss is a super awesome anime.',
};

async function getPostData(id) {
	try {
		const url = `http://localhost:5000/posts/${id}`;
		const response = await fetch(url);
		const postData = await response.json();
		return postData;
	} catch (err) {
		console.error(err);
		// for testing
		return mockData;
	}
}

async function createNewPost(body) {
	try {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		};
		const url = 'http://localhost:5000/posts/';
		const response = await fetch(url, options);
		const newPost = response.json();
		return newPost;
	} catch (err) {
		console.error(err);
		// for testing
		return mockData;
	}
}

module.exports = { getPostData, createNewPost };
