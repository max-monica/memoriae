const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Post = require('./models/post');
const app = express();
const { validate } = require('uuid');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.post('/posts', async (req, res) => {
	try {
		const post = await Post.create(req.body);
		res.status(201).json(post);
	} catch (err) {
		res.status(422).send(err);
	}
});

app.get('/posts/:id', async (req, res) => {
	try {
		const id = req.params.id;
		if (!validate(id)) {
			throw new Error('Invalid post id');
		}
		const post = await Post.findById(id);
		res.status(200).json(post);
	} catch (error) {
		res.status(404).send({ error });
	}
});

module.exports = app;
