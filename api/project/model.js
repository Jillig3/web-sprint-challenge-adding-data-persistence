const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('projects')

    const result = rows.map(row => {
        const hammer = {
            project_id: row.project_id,
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: row.project_completed === 0 ? false : true
        }
        return hammer
    })
    return result
}

async function getById(id) {
    const projectsID = await db('projects')
        .where('project_id', id)
        .first()

    const hammer = {
        project_id: projectsID.project_id,
        project_name: projectsID.project_name,
        project_description: projectsID.project_description,
        project_completed: projectsID.project_completed === 0 ? false : true
    }
    return hammer
}

async function create(newProject) {
    const insert = await db('projects')
        .insert(newProject)    
    return getById(insert)
}

module.exports = {
    get,
    create,
    getById
}