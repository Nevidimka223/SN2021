const db = require('../services/db');

const getComments = async (req, res) => {
	const comments = await db
		.select()
		.from('comments')
		.orderBy('id');
	res.status(200).json(comments);
};

const getComment = async (req, res) => {
	const comment = await db
		.select()
		.from('comments')
		.where({ id: req.params.id });
	res.status(200).json(comment);
};

const createComment = async (req, res) => {
	await db
		.insert(req.body)
		.into('comments');
	res.status(201).send('Created new comment!');
};

const updateComment = async (req, res) => {
	await db
		.select()
		.from('comments')
		.where({ id: req.params.id })
		.update(req.body);
	res.status(200).send('Comment updated!');
};

const deleteComment = async (req, res) => {
	await db
		.select()
		.from('comments')
		.where({ id: req.params.id })
		.del();
	res.status(200).send('Comment deleted!');
};

module.exports = {getComments, getComment, createComment, updateComment, deleteComment};