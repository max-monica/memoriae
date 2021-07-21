function createFormHTML(eventHandler) {
	const form = document.createElement('form');
	form.autocomplete = 'off';
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
