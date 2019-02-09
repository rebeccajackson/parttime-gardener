exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: 'Ambitious Aardvark', email: 'aardvark@example.org', subscribe: true},
        {id: 2, name: 'Rebecca', email: 'example@example.org', subscribe: true}
      ])
    })
}
