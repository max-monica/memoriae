const main = document.querySelector('main');

function updateMain(hash) {
	main.textContent = '';
	let child;
	if (hash) {
		// fetch post
	} else {
		// create form
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
