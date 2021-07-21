(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { initPageBindings } = require('./lib/handlers');

initPageBindings();

},{"./lib/handlers":3}],2:[function(require,module,exports){
async function getPostData(id) {
	try {
		const url = `http://localhost:5000/posts/${id}`;
		const response = await fetch(url);
		const postData = await response.json();
		return postData;
	} catch (err) {
		console.error(err);
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
	}
}

module.exports = { getPostData, createNewPost };

},{}],3:[function(require,module,exports){
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

},{"./fetch":2,"./helpers":4}],4:[function(require,module,exports){
function createFormHTML(eventHandler) {
	const form = document.createElement('form');
	const fields = ['title', 'author', 'body'];

	fields.forEach((field) => {
		const inputLabel = document.createElement('label');
		inputLabel.for = field;
		inputLabel.innerText = field;
		form.append(inputLabel);

		const input = document.createElement('input');
		input.type = 'text';
		input.id = field;
		input.name = field;
		input.placeholder = field;

		if (field === 'title') {
			input.required = true;
			input.maxLength = 100;
		} else if (field === 'author') {
			input.maxLength = 100;
		} else {
			input.required = true;
			input.maxLength = 1000;
		}
		form.append(input);
	});

	const submit = document.createElement('input');
	submit.type = 'submit';
	submit.value = 'Add Memoriae';
	form.append(submit);

	form.addEventListener('submit', eventHandler);

	return form;
}

function createPost({ title, author, body, date }) {
	const post = document.createElement('article');

	const header = document.createElement('h2');
	header.innerText = title;
	post.append(header);

	const postAuthor = document.createElement('p');
	postAuthor.innerText = author;
	post.append(postAuthor);

	const postDate = document.createElement('p');
	postDate.innerText = new Date(date).toDateString();
	post.append(postDate);

	const postBody = document.createElement('p');
	postBody.innerText = body;
	post.append(postBody);

	return post;
}

module.exports = { createFormHTML, createPost };

},{}]},{},[1]);
