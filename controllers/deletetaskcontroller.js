// Code for deleteing the data from task list by deleting data from mongodb
const express=require('express');


const router=express.Router();

const db = require('../configs/mongoose');

const Todo=require('../models/todomodel');

//use built in middleware function express.urlencoded() which parses incoming requests
router.use(express.urlencoded());

module.exports.deletetask=function(req, res){
    // get the id from query
    var id = req.query;

    // console.log(id)

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;

    // finding and deleting tasks from the DB one by one
    for(let i=0; i < count ; i++){
        
        // using findByIdAndDelete() function which  is used to find a matching document, 
        // removes it, and passing the found document (if any) to the callback.
        Todo.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })

    }
    return res.redirect('back'); 
    
};