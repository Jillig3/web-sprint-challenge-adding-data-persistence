const projects = [
  {project_name: 'Generic Project 1', project_description: 'Generic Description 1'},
  {project_name: 'Generic Project 2', project_description: 'Generic Description 2'},
  {project_name: 'Generic Project 3', project_description: 'Generic Description 3'},
]
exports.seed = function(knex) {
  return knex('projects').insert(projects)
};
