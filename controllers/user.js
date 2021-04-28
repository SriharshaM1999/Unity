const Users = require("../models/Users");


module.exports.signUp = async function(req, res){






    return res.render("signup");

}



module.exports.signIn = function(req, res){

    return res.render("signin");

}


module.exports.createAccount= function(req, res){




    


    Users.create(req.body,function(err,user){
        if(err){
            console.log(err)
        }
        console.log("user is successully created")
    })
        

 return res.redirect("/users/sign-in")



}

module.exports.createSession= function(req,res){
    return res.redirect('/');
}
