const express = require('express')
const router = express.Router()

const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.get()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Tasks.getById(req.params.id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

module.exports = router;