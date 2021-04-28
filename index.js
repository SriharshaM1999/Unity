// importing the necessary modules;
const express = require("express");
const expressLayouts = require("express-ejs-layouts");






// importing the userdefined Modules


const port =8000;


const app= express();


app.set("view engine","ejs");
app.set("views","./views")
app.use(express.static('./assets'))



app.use('/', require("./routes"))






app.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(`Server is listening on the port no ${port}`);
})