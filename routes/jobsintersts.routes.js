const { addNewJobsinterests, findAllJobsinterests, findByIdJobsinterests, updateJobsinterests, deleteJobsinterests } = require("../controllers/jobsinteres.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewJobsinterests);
router.get("/",userGuard,  findAllJobsinterests);
router.get("/:id",userGuard,  findByIdJobsinterests);
router.put("/:id",userGuard, userAdminGuard, updateJobsinterests)
router.delete("/:id",userGuard, userAdminGuard, deleteJobsinterests)

module.exports = router 