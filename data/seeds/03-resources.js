
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, name: 'car'},
    {id: 2, name: 'bed'},
    {id: 3, name: 'tools'}
  ]);
};
