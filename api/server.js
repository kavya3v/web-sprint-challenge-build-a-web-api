const express = require('express');
const server = express();
const helmet=require('helmet');
const morgan=require('morgan');
const projectsRouter=require('../api/projects/projects-router');
const actionsRouter=require('../api/actions/actions-router');

// Complete your server here!
// Do NOT `server.listen()` inside this file!
//grab helmet for security and morgan for logging
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

//branch to respective router for the url
server.use('/api/actions',actionsRouter);
server.use('/api/projects',projectsRouter);

server.get('/',(req,res)=>{
    res.status(200).send({message: 'Server running - sprintA api!'})
})

//common error handler function (yay finally learnt to take 4 arg)
function errorHandler(error,req,res,next){
    const code= error.status || error.statusCode || 500;
    res.status(code).json(error.message);
    }
    //error handler middleware
    server.use(errorHandler);

module.exports = server;
