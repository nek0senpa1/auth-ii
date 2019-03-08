const dbee = require('../theDataBee/dataBeeConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return dbee('user').select('id', 'username', 'password', 'department');
}

function findBy(filter) {
  return dbee('user').where(filter);
}

async function add(user) {
  const [id] = await dbee('user').insert(user);

  return findById(id);
}

function findById(id) {
  return dbee('user')
    .where({ id })
    .first();
}
