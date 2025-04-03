const { addNewRequirements, findAllRequirements, findByIdRequirements, updateRequirements, deleteRequirements } = require("../controllers/requirements.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewRequirements);
router.get("/",userGuard,  findAllRequirements);
router.get("/:id",userGuard,  findByIdRequirements);
router.put("/:id",userGuard, userAdminGuard, updateRequirements)
router.delete("/:id", userGuard, userAdminGuard, deleteRequirements)

module.exports = router 