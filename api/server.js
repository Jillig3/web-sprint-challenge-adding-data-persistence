const express = require('express')
const server = express()
server.use(express.json())

const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the sprint challeng</h1>
    `)
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;