const router = require('express').Router();
const Project = require('../models/project.js');

router.get('/test', (req, res, next)=>{
    res.json({message: 'all good'})
})

module.exports = router;