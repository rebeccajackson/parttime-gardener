
exports.up = function(knex, Promise) {
  return knex.schema.createTable('garden', (table) => {
    table.increments('id')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('garden')
};
