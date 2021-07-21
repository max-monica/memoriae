const main = document.querySelector('main');
const { getPostData, createNewPost } = require('./fetch');
const { createFormHTML, createPost } = require('./helpers');

async function handlePostFormSubmit(e) {
	try {
		e.preventDefault();
		const body = Object.fromEntries(new FormData(e.target));
		const postData = await createNewPost(body);
		if (!postData.id) {
			throw new Error('New post has no id.');
		}
		window.location.hash = postData.id;
	} catch (err) {
		console.error(err);
	}
}

async function updateMain(hash) {
	main.textContent = '';
	let child;
	if (hash) {
		const postData = await getPostData(hash.slice(1));
		child = createPost(postData);
	} else {
		child = createFormHTML(handlePostFormSubmit);
	}
	main.append(child);
}

function updateConent() {
	const hash = window.location.hash;
	updateMain(hash);
}

function initPageBindings() {
	document.addEventListener('DOMContentLoaded', updateConent);
	window.addEventListener('hashchange', updateConent);
}

module.exports = { initPageBindings };
