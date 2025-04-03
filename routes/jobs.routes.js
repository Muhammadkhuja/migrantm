const { addNewJobs, findAllJobs, findByIdJobs, updateJobs, deleteJobs } = require("../controllers/jobs.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");


const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewJobs);
router.get("/",userGuard,  findAllJobs);
router.get("/:id",userGuard,  findByIdJobs);
router.put("/:id",userGuard, userAdminGuard, updateJobs)
router.delete("/:id",userGuard, userAdminGuard, deleteJobs)

module.exports = router 