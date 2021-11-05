const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')

    const result = rows.map(row => {
        const hammer = {
            task_id: row.task_id,
            task_notes: row.task_notes,
            task_description: row.task_description,
            task_completed: row.task_completed === 0 ? false : true,
            project_name: row.project_name,
            project_description: row.project_description
        }
        return hammer
    })
    return result
}

async function getById(id) {
    const tasksId = await db('tasks')
        .where('task_id', id)
        .first()

    const hammer = {
        task_id: tasksId.task_id,
        task_notes: tasksId.task_notes,
        task_description: tasksId.task_description,
        task_completed: tasksId.task_completed === 0 ? false : true,
    }
    return hammer
}

async function create(newTask) {
    const result = await db('tasks')
        .insert(newTask)
    return getById(result)
}

module.exports = {
    get,
    getById,
    create
}
