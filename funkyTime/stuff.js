const dbee = require('');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return dbee('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return dbee('users').where(filter);
}

async function add(user) {
  const [id] = await dbee('users').insert(user);

  return findById(id);
}

function findById(id) {
  return dbee('users')
    .where({ id })
    .first();
}
