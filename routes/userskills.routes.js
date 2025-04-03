const { findAlluserskil, addNewuserskil, findByIduserskil, updateuserskil, deleteuserskil } = require("../controllers/userskil.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");


const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewuserskil);
router.get("/",userGuard, findAlluserskil);
router.get("/:id",userGuard, findByIduserskil);
router.put("/:id",userGuard, userAdminGuard, updateuserskil)
router.delete("/:id",userGuard, userAdminGuard, deleteuserskil)

module.exports = router 