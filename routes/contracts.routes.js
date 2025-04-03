const { addNewContracts, findAllContracts, findByIdContracts, updateContracts, deleteContracts } = require("../controllers/countracts.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewContracts);
router.get("/",userGuard,  findAllContracts);
router.get("/:id",userGuard,  findByIdContracts);
router.put("/:id",userGuard, userAdminGuard, updateContracts)
router.delete("/:id",userGuard, userAdminGuard, deleteContracts)

module.exports = router 