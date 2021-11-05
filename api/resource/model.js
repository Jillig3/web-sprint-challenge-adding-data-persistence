const db = require('../../data/dbConfig')

function get() {
    return db('resources')
}

function getById(id) {
    return db('resources')
        .where('resource_id', id)
        .first()
}

async function create(newResource) {
    const result = await db('resources')
        .insert(newResource)
    return getById(result)
}

module.exports = {
    get,
    getById,
    create
}
