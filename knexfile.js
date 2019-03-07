// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './theDataBee/authHere.db3',
    },
    
    migrations: {
      directory: './theDataBee/migrations',
    },
    seeds: {
      directory: './theDataBee/seeds',
    },
  },
};