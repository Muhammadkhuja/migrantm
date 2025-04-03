const { addNewJobrequirements, findAllJobrequirements, findByIdJobrequirements, updateJobrequirements, deleteJobrequirements } = require("../controllers/jobrequirements.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewJobrequirements);
router.get("/",userGuard,  findAllJobrequirements);
router.get("/:id",userGuard,  findByIdJobrequirements);
router.put("/:id",userGuard, userAdminGuard, updateJobrequirements)
router.delete("/:id",userGuard, userAdminGuard, deleteJobrequirements)

module.exports = router 