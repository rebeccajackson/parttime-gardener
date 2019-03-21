exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'aardvark', hash: '0JdqRad4MYS8UGeZVsuSnHb8vS5WAUMPjwQSRxF99a0jqRWfhq', first_name: 'Amitious', last_name: 'Aardvark'},
        {id: 2, username: 'rebecca', hash: '$2b$12$9u/0JdqRad4MYS8UGeZVsuSnHb8vS5WAUMPjwQSRxF99a0jqRWfhq', first_name: 'Rebecca', last_name: 'Jackson'}
      ])
    })
}
