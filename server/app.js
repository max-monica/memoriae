const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Post = require('./models/post');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.post('/posts', async (req, res) => {
	try{
		const post = await Post.create(req.body);
        res.status(201).json(post);
	} catch (err) {
		res.status(422).send(err);
	}
});

app.get('/posts/:id', async (req, res) => {
	try{
		const post = await Post.findById(req.params.id);
        res.status(200).json(post);
	} catch (err) {
		res.status(404).send(err);
	}
});

module.exports = app;
