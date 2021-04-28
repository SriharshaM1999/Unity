// importing the necessary modules;
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("./config/mongoose");
const dB = require("./models/Users")
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("./config/passport");


// importing the userdefined Modules
 

const port =8000;


const app= express();


app.set("view engine","ejs");
app.set("views","./views")
app.use(express.static('./assets'))
app.use(expressLayouts)

app.set("layout ExtractStyles",true)
app.set("layout ExtractScript",true)

app.use(express.static('./assets'))
app.use(expressLayouts)
app.use(express.urlencoded())


// inorder to read/set cookie
app.use(cookieParser()); 











app.use('/', require("./routes"))






app.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(`Server is listening on the port no ${port}`);
})