//to fetch the data from database

const express=require('express');



const router=express.Router();

const todolistController=require('../controllers/todolistcontroller')

router.get('/todo',todolistController.todo)










module.exports=router;