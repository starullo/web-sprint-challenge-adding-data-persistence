
exports.seed = function(knex) {
  return knex('task_resources').insert([
    {id: 1, task_id: 1, resource_id: 1, description: 'car to go to store'},
    {id: 2, task_id: 2, resource_id: 2, description: 'bed for sleeping'},
    {id: 3, task_id: 3, resource_id: 3, description: 'tools for fixing things'}
  ]);
};
