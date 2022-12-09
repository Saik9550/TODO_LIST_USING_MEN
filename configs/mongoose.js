//first install mongoose by npm install mongoose --save


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolistdb');

//define our database
const db=mongoose.connection;

//to know if their is a connection error on connection

db.on('error', function(err) { console.log(err.message); });


//if up and running then print the message on console
db.once('open', function() {
console.log("Successfully connected to the database");});
