exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username').unique()
    table.string('first_name')
    table.string('last_name')
    table.string('hash')
    table.string('email')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
