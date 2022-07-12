const express = require('express');
const http =  require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRoutes');
const leaderRouter =require('./routes/leaderRouter');




const hostname = 'localhost';
const port = 3000;

const app = express();

//dishes and dishesid mount here
//app.use('/dishes' , dishRouter );
app.use('/dishes/dishesId' , dishRouter);

//promoRouter and id mount here
app.use('/promotions' , promoRouter);
app.use('/promotions/promoId' , promoRouter);

//leaderRouter mount code here 

app.use('/leaders' , leaderRouter);
app.use('/leaders/:leaderId' , leaderRouter);

app.use(bodyParser.json());
app.use(morgan('dev'));

const server = http.createServer(app);

server.listen(port , hostname , ()=>{
    console.log(`The server running at https://${hostname}:${port}/`)
})