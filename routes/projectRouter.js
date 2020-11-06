const express = require('express');
const Project = require('../models/project.js');
const db = require('../data/config');

const router = express.Router();

router.get('/resources', (req, res, next)=>{
    Project.getResources()
    .then(data=>{
        console.log('good', res)
        res.status(200).json(data)
    })
    .catch(err=>{
        console.log('bad', err.message);
        res.status(500).json({message: 'sorry no good'})
    })
})

router.post('/resources', (req, res, next)=>{
    Project.addResource(req.body)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(500).json(err.message)
    })
})

router.post('/', (req, res, next)=>{
    Project.addProject(req.body)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(500).json({message: 'sorry charlie'})
    })
})

router.get('/', (req, res, next)=>{
    db('projects')
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})

router.get('/tasks', (req, res, next)=>{
    Project.getAllTasks()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json({message:err.message})
    })
})

router.post('/tasks', (req, res, next)=>{
    Project.addTask(req.body)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})

router.get('/tasks/:id', (req, res, next)=>{
    Project.getSpecificTasks(req.params.id)
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        console.log(req.params.id)
        res.status(500).json({message: err.message})
    })
})

module.exports = router;