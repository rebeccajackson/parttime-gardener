
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('months').del()
    .then(function () {
      // Inserts seed entries
      return knex('months').insert([
        {id: 1, name: 'January', season: 'summer'},
        {id: 2, name: 'Febuary', season: 'summer'},
        {id: 3, name: 'March', season: 'autumn'},
        {id: 4, name: 'April', season: 'autumn'},
        {id: 5, name: 'May', season: 'autumn'},
        {id: 6, name: 'June', season: 'winter'},
        {id: 7, name: 'July', season: 'winter'},
        {id: 8, name: 'August', season: 'winter'},
        {id: 9, name: 'September', season: 'spring'},
        {id: 10, name: 'October', season: 'spring'},
        {id: 11, name: 'November', season: 'spring'},
        {id: 12, name: 'December', season: 'summer'}
      ]);
    });
};
