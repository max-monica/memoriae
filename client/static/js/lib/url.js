const url =
	window.location.hostname === 'localhost'
		? 'http://localhost:5000/'
		: 'https://memoriaes.herokuapp.com/';

module.exports = url;
