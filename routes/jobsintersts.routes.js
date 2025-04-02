const { addNewJobsinterests, findAllJobsinterests, findByIdJobsinterests, updateJobsinterests, deleteJobsinterests } = require("../controllers/jobsinteres.controller");



const router = require("express").Router()

router.post("/", addNewJobsinterests);
router.get("/", findAllJobsinterests);
router.get("/:id", findByIdJobsinterests);
router.put("/:id", updateJobsinterests)
router.delete("/:id", deleteJobsinterests)

module.exports = router 