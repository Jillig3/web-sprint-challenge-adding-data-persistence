const resources = [
  {resource_name: 'Generic Resource Name 1', resource_description: 'Generic Resource Description 1'},
  {resource_name: 'Generic Resource Name 2', resource_description: 'Generic Resource Description 2'},
  {resource_name: 'Generic Resource Name 3', resource_description: 'Generic Resource Description 3'},
]
exports.seed = function(knex) {
  return knex('resources').insert(resources)
};
