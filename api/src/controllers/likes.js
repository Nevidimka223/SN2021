const db = require('../services/db');

const getLikes = async (req, res) => {
  const likes = await db.select().from('likes').orderBy('id');
  res.status(200).json(likes);
};

const getLike = async (req, res) => {
  const like = await db.select().from('likes').where({ id: req.params.id });
  res.status(200).json(like);
};

const createLike = async (req, res) => {
  await db.insert(req.body).into('likes');
  res.status(201).send('Like this article!');
};

const deleteLike = async (req, res) => {
  await db.select().from('likes').where({ id: req.params.id }).del();
  res.status(200).send('Like is deleted!');
};

module.exports = { getLike, getLikes, createLike, deleteLike };
