const { addNewuserdocs, findAlluserdocs, findByIduserdocs, updateuserdocs, deleteuserdocs } = require("../controllers/userdoc.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");


const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewuserdocs);
router.get("/",userGuard,  findAlluserdocs);
router.get("/:id",userGuard,  findByIduserdocs);
router.put("/:id",userGuard, userAdminGuard, updateuserdocs)
router.delete("/:id",userGuard, userAdminGuard, deleteuserdocs)

module.exports = router 