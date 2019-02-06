
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('garden').del()
    .then(function () {
      // Inserts seed entries
      return knex('garden').insert([
        {id: 1, user_id: '1'}
      ]);
    });
};
