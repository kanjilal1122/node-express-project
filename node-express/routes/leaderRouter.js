const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res , next)=>{
    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req , res )=>{
    res.end('will  send all the data');
})

.put((req ,res)=>{
    res.statusCode = 403;
    res.end('PUT does not support ');
})
.post((req, res )=>{
    res.end('The post method name = '+ req.body.name + ' and the description is   '+req.body.description);
})
.delete((req , res )=>{
    res.end('Deleting all the file in the record ')
});



leaderRouter.route('/:leaderId')
.all((req, res , next)=>{
    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req , res )=>{
    res.end('will  send all the data ' +req.params.leaderId);
})

.put((req ,res)=>{
    res.write('updating the leader '+req.params.leaderId+'\n');
    res.end('Will update the leader: ' + req.body.name + 
    ' with details: ' + req.body.description);
    
})
.post((req, res )=>{

    res.statusCode = 403;
    res.end('POST does not support ');
})
.delete((req , res )=>{
    res.end('Deleting leaderId ' +req.params.leaderId +' the file in the record ')
});


//export code here

module.exports = leaderRouter ;
