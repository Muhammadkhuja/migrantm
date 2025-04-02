const { addNewJobs, findAllJobs, findByIdJobs, updateJobs, deleteJobs } = require("../controllers/jobs.controller");


const router = require("express").Router()

router.post("/", addNewJobs);
router.get("/", findAllJobs);
router.get("/:id", findByIdJobs);
router.put("/:id", updateJobs)
router.delete("/:id", deleteJobs)

module.exports = router 