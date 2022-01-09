const db = require('../services/db');

const getUsers = async (req, res) => {
  const users = await db.select().from('users').orderBy('id');
  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const user = await db
    .select()
    .from('users')
    .where({ id: req.params.id })
    .first();
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  await db.insert(req.body).into('users');
  res.status(201).send('Created new user!');
};

const updateUser = async (req, res) => {
  await db.select().from('users').where({ id: req.params.id }).update(req.body);
  res.status(200).send('User updated!');
};

const deleteUser = async (req, res) => {
  await db.select().from('users').where({ id: req.params.id }).del();
  res.status(200).send('User deleted!');
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
