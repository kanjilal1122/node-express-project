const express = require('express');
const bodyParser =require('body-parser');
const promoRouter =express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
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



promoRouter.route('/:promoId')
.all((req, res , next)=>{
    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req , res )=>{
    res.end('will  send all the data ' +req.params.promoId);
})

.put((req ,res)=>{
    res.write('updating the promo '+req.params.promoId+'\n');
    res.end('Will update the promo: ' + req.body.name + 
    ' with details: ' + req.body.description);
    
})
.post((req, res )=>{

    res.statusCode = 403;
    res.end('POST does not support ');
})
.delete((req , res )=>{
    res.end('Deleting promoId ' +req.params.promoId +' the file in the record ')
});


//export code here

module.exports = promoRouter ;
