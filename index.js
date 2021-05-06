// importing the necessary modules;
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("./config/mongoose");
const dB = require("./models/Users")
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("./config/passport");
const session = require('express-session');
const db = require("./config/mongoose");
var MongoStore = new require('connect-mongodb-session')(session);


 

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


app.use(session({
    name:'Unity',
    secret:"blahblahblah",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    // store: MongoStore.create({
    //     mongoUrl: 'mongodb://localhost/Unity',
    //     autoRemove:'disabled'   // refer this feauter later
    // },
    store: new MongoStore({
        mongoConnection:db,
        autoRemove:'disabled'
    },
    function(err){
        console.log(err || "connect-mongo setup ok")
    }
    
    )



}))


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthentication);








app.use('/', require("./routes"))






app.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(`Server is listening on the port no ${port}`);
})