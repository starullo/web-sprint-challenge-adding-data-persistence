
exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, project_name: 'do homework'},
        {id: 2, project_name: 'make dinner'},
        {id: 3, project_name: 'fix things'}
      ]);
};
