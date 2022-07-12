const express = require('express');
const bodyParser =require('body-parser');
const dishRouter =express.Router();
//const dishRouterId =express.Router();


dishRouter.use(bodyParser.json());
//dishRouterId.use(bodyParser.json());

/*
dishRouter.route('/')
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

*/



//dishes/:dishId code start here


dishRouter.route('/:dishId')
.all((req, res , next)=>{
    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req , res )=>{
    res.end('will  send all the data '+req.body.dishId);
})

.put((req ,res)=>{
    res.write('updating the dish '+req.params.dishId+'\n');
    res.end('Will update the dish: ' + req.body.name + 
    ' with details: ' + req.body.description);
    
})
.post((req, res )=>{

    res.statusCode = 403;
    res.end('POST does not support ');
})
.delete((req , res )=>{
    res.end('Deleting dishId ' +req.params.dishId +' the file in the record ')
});


//export code here

module.exports = dishRouter ;
