
//this module is used to fetch the data from db

const db = require('../configs/mongoose');
const Todo=require('../models/todomodel');

module.exports.todo=function(req,res){

    // return res.render('todolists')}

    Todo.find({}, function(err, todo){
                if(err){
                    console.log("error in fetching contacts from db");
                    return;
                }
                return res.render('todolists',{
                    // title: "Todo List",
                    Todo_list: todo
                });
        
            })
    
}