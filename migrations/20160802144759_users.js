exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username').unique()
    table.string('hash')
    table.string('email')
    table.boolean('subscribe').defaultTo('true')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
