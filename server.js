const express = require('express');
const morgan = require('morgan')


const projectRouter = require('./routes/projectRouter.js')

const server = express();
server.use(morgan('dev'))
server.use(express.json());

server.use('/api/projects', projectRouter)


module.exports = server;