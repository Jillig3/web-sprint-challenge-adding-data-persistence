const express = require('express')
const router = express.Router()

const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Resources.getById(req.params.id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

module.exports = router;
