// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/Unity");


// const connection = mongoose.connection;


// connection.on('error',console.error.bind(console,"Error in connecting with mongodb"));


// connection.once('open',function(){
//     console.log("connected with mongodb");
// })

// module.exports=connection;


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/UUnity');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;