// The express.Router() function is used to create a new router object. 
// This function is used when you want to create a new router object in your program to handle requests.

const express=require('express');


const router=express.Router();

const startingMessage= require('../controllers/homepagecontroller')


router.get('/',startingMessage.home)


router.use('/',require('./todopagerouter'));

// router.get('./todo',function(req,res){
//     res.end('<h1>"TO DO LIST PAGE IS LOADED</h1>')
// })


router.use('/',require('./formdatarouter'));

router.use('/',require('./deletetaskrouter'));

module.exports=router;