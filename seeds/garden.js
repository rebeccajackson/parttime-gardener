
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('garden').del()
    .then(function () {
      // Inserts seed entries
      return knex('garden').insert([
        {veg_id: 1, user_id: 1},
        {veg_id: 1, user_id: 2},
        {veg_id: 2, user_id: 2},
        {veg_id: 3, user_id: 2}
      ]);
    });
};
