const knex = require('knex');

const knexConfigyPudding = require('../knexfile.js');

module.exports = knex(knexConfigyPudding.development);
