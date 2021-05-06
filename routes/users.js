const express = require("express");
const passport = require("passport");

const UserController = require("../controllers/user")




const router = express.Router();



router.get('/sign-up',UserController.signUp)
router.get('/sign-in',UserController.signIn)
 


router.post('/createAccount',UserController.createAccount)
router.post('/createSession',

passport.authenticate(
    'local',
    {failureRedirect:"/users/sign-in"},
)

,UserController.createSession)




module.exports = router;