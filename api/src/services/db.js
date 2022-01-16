const config = require('./config');

module.exports = require('knex')({
  client: 'pg',
  connection: {
    user: config.dbUser,
    password: config.dbPassword,
    host: config.dbHost,
    database: config.dbDatabase,
    port: config.dbPort,
  },
});
