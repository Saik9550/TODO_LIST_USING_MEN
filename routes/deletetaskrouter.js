//in this router we are going to fetch data once the check boxes are selected and 
// when delete button is pressed it goes to deletetaskcontroller nd deletes the data from database

const express=require('express');


const router=express.Router();



const db = require('../configs/mongoose');

const Todo=require('../models/todomodel');

router.use(express.urlencoded());
const deleteTask=require('../controllers/deletetaskcontroller')

router.get('/delete-task',deleteTask.deletetask);


module.exports=router;