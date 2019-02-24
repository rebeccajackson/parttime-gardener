exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'aardvark', hash: 1234, first_name: 'Amitious', last_name: 'Aardvark'},
        {id: 2, username: 'rebecca', hash: 4321, first_name: 'Rebecca', last_name: 'Jackson'}
      ])
    })
}
