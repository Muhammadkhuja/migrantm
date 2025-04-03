const { addNewApplications, findAllApplications, findByIdApplications, updateApplications, deleteApplications } = require("../controllers/application.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewApplications);
router.get("/",userGuard,  findAllApplications);
router.get("/:id",userGuard,  findByIdApplications);
router.put("/:id",userGuard, userAdminGuard, updateApplications)
router.delete("/:id",userGuard, userAdminGuard, deleteApplications)

module.exports = router 