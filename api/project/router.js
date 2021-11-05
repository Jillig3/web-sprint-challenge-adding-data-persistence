const express = require('express')
const router = express.Router()

const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (res, req, next) => {
    Projects.getById(req.params.id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.create(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;