const express = require("express");

const UserController = require("../controllers/user")




const router = express.Router();



router.get('/sign-up',UserController.signUp)
router.get('/sign-in',UserController.signIn)
 


router.post('/createAccount',UserController.createAccount)




module.exports = router;