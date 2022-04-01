const express= require("express")
const usercontroller= require("../controller/user.controller")
const router= express.Router();

router.post("/sigin",usercontroller.sigin);
router.post("/siginup",usercontroller.singup);

module.exports= router;