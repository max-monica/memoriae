(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { initPageBindings } = require('./lib/handlers');

},{"./lib/handlers":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
