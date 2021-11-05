const tasks = [
  { task_notes: 'Generic Task Notes 1', task_description: 'Generic Task Description 1'},
  { task_notes: 'Generic Task Notes 2', task_description: 'Generic Task Description 2'},
  { task_notes: 'Generic Task Notes 3', task_description: 'Generic Task Description 3'},
]
exports.seed = function(knex) {
  return knex('tasks').insert(tasks)
};
