
exports.up = function(knex, Promise) {
  return knex.schema.createTable('months', (table) => {
    table.increments('id')
    table.string('name')
    table.string('season')
 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('months')

};