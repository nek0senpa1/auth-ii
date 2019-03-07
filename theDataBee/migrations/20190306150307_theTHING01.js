exports.up = function(knex) {
    return knex.schema.createTable('user', users => {
      users.increments();
  
      users.string('username').notNullable().unique();

      users.string('password').notNullable();

      users.string('department').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
  };
  