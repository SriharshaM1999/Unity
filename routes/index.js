const express = require("express");

const homeController = require("../controllers/home")




const router = express.Router();



router.get('/', homeController.home);
router.use('/users',require("./users"))





module.exports = router;