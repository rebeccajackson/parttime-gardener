
exports.up = function(knex, Promise) {
  return knex.schema.createTable('garden', (table) => {
    table.integer('veg_id')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('garden')
};
