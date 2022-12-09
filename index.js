//use npm start 

// install express server using npm install express
//package-lock json will be created once we install express and it contains all express dependencies.

//fire up the server using express
//now we need to import express module by require functionconst 

const express= require('express');

const port=9000;


//acquire the configurartuions of mongoose before firing up the server
const db = require('./configs/mongoose');
const Todo=require('./models/todomodel')

const app=express();
app.use('/assets',express.static('assets'))


//install ejs and use set to the values as below

app.set('view engine','ejs');
app.set('views','./views');



//install mongoose to connect to mongodb



//now instead of using the routing in app we use express router
app.use('/',require('./routes'));






//use listen() function to listen the connections on the specified host and port
app.listen(port,function(err){
    if(err){
        console.log(`"ERROR:${err}"`)
        return;
    }
    console.log(`Server is running at port :${port}`)
})