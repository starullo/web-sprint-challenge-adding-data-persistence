
exports.seed = function(knex) {
  return knex('tasks').insert([
    {id: 1, description: 'buy groceries', project_id: 2},
    {id: 2, description: 'get sleep', project_id: 1},
    {id: 3, description: 'find fixers manual', project_id:3}
  ]);
};
