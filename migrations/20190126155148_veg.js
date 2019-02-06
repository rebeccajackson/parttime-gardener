
exports.up = function(knex, Promise) {
  return knex.schema.createTable('veg', (table) => {
    table.increments('id')
    table.string('name')
    table.string('type')
    table.string('harvest')
    table.string('spaceplants')
    table.string('pest')
    table.string('tips')
    table.string('img_url').defaultTo('/veg.png')
 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('veg')
};
