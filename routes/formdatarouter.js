
//in this router we are going to fetch  data entered and once the add button is pressed and 
// when add task button is pressed it cretesthe data in database(mongodb)

const express=require('express');


const router=express.Router();



const db = require('../configs/mongoose');

const Todo=require('../models/todomodel');



router.use(express.urlencoded());


router.post('/create-task', function(req, res){
    
    
    Todo.create({
        task: req.body.task,
        category:req.body.category,
        date:req.body.date
    }, 
    function(err, newTask){
        if(err){
            console.log('Error in creating a Task')
            return;
        }
            

        res.redirect('back')
    })
  

});

module.exports=router;