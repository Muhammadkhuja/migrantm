const { addNewpassports, findAllpassports, findByIdpassports, updatepassports, deletepassports } = require("../controllers/passport.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");


const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewpassports);
router.get("/",userGuard,  findAllpassports);
router.get("/:id",userGuard,  findByIdpassports);
router.put("/:id",userGuard, userAdminGuard, updatepassports)
router.delete("/:id",userGuard, userAdminGuard, deletepassports)

module.exports = router 