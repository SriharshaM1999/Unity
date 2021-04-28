// importing the necessary modules;
const express = require("express");






// importing the userdefined Modules




const port =8000;


const app= express();








app.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(`Server is listening on the port no ${port}`);
})