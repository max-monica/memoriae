const db = require('../dbconfig/init');
const { v4: uuidv4 } = require('uuid');

module.exports = class Post {
	constructor(data) {
		this.id = data.id;
		this.date = data.date;
		this.title = data.title;
		this.author = data.author;
		this.body = data.body;
	}

	static create(data) {
		return new Promise(async (res, rej) => {
			try {
				let id = uuidv4();
				let post = await db.query(
					`INSERT INTO posts (id, title, author, body) VALUES ($1,$2,$3,$4) RETURNING *`,
					[id, data.title, data.author || 'Anonymous', data.body]
				);
				res(new Post(post.rows[0]));
			} catch (e) {
				rej('Post could not be created');
			}
		});
	}
	static findById(id) {
		return new Promise(async (res, rej) => {
			try {
				let postData = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
				res(new Post(postData.rows[0]));
			} catch (e) {
				rej('Post could not be found');
			}
		});
	}
};
