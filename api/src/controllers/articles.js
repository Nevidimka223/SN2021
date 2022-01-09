const db = require('../services/db');

const getArticles = async (req, res) => {
	const articles = await db
		.select()
		.from('articles')
		.orderBy('id');
	res.status(200).json(articles);
};

const getArticle = async (req, res) => {
	const article = await db
		.select()
		.from('articles')
		.where({ id: req.params.id });
	res.status(200).json(article);
};

const getArticleComments = async (req, res) => {
	const articleComments = await db
		.select()
		.from('comments')
		.where({ articleid: req.params.articleid });
	res.status(200).json(articleComments);
};

const getArticleLikes = async (req, res) => {
	const articleLikes = await db
		.select()
		.from('likes')
		.where({ articleid: req.params.articleid });
	res.status(200).json(articleLikes);
};

const createArticle = async (req, res) => {
	await db.insert(req.body).into('articles');
	res.status(201).send('Created new article!');
};

const updateArticle = async (req, res) => {
	await db
		.select()
		.from('articles')
		.where({ id: req.params.id })
		.update(req.body);
	res.status(200).send('Article updated!');
};

const deleteArticle = async (req, res) => {
	await db
		.select()
		.from('articles')
		.where({ id: req.params.id })
		.del();
	res.status(200).send('Article deleted!');
};

module.exports = {getArticle, getArticles, getArticleComments, getArticleLikes, createArticle, updateArticle, deleteArticle};