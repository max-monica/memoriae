DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id VARCHAR PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) DEFAULT 'anonymous' NOT NULL,
    body VARCHAR(1000) NOT NULL
);