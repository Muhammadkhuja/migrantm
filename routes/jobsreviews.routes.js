const { addNewJobreviews, findAllJobreviews, findByIdJobreviews, updateJobreviews, deleteJobreviews } = require("../controllers/jobsreviews.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewJobreviews);
router.get("/",userGuard,  findAllJobreviews);
router.get("/:id",userGuard,  findByIdJobreviews);
router.put("/:id",userGuard, userAdminGuard, updateJobreviews)
router.delete("/:id",userGuard, userAdminGuard, deleteJobreviews)

module.exports = router 