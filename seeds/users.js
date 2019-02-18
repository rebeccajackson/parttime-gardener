exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Ambitious Aardvark', hash: 1234, email: 'aardvark@example.org', subscribe: true},
        {id: 2, username: 'Rebecca', hash: 4321, email: 'example@example.org', subscribe: true}
      ])
    })
}
