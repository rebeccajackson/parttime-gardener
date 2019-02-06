
exports.up = function(knex, Promise) {
  return knex.schema.createTable('veg_months', (table) => {
    table.integer('month_id')
    table.integer('veg_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('veg_months')
};
