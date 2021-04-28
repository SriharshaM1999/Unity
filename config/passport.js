const passport = require("passprt");

const LocalStrategy = require("passport-local").Strategy;

const Users = require("../models/Users");

passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback:true
},

function(req, email, pass, done){


    User.findOne({email}, function(err,user){
        if(err){
            return done(err);
        }

        if(!user || user.password != password){
            return done(null,false)
        }

        return done(null, user);

    })





}


));




passport.SerializeUser(function(user, done){

    return done(null, user.id);
})

passport.deSerializeUser(function(user_id,done){


if(Users.findById(user_id),function(err,user){

if(err) {
    return done(err);
}

return done(null, user);
});


})


passport.checkAuthentication= function( req, res,next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect("/users/sign-in");
}



passport.setAuthentication= function(req,res,next){

    if(req.isAuthenticated()){
        res.locals.user= req.user;
    }

    next()

}