const { addNewJobreviews, findAllJobreviews, findByIdJobreviews, updateJobreviews, deleteJobreviews } = require("../controllers/jobsreviews.controller");



const router = require("express").Router()

router.post("/", addNewJobreviews);
router.get("/", findAllJobreviews);
router.get("/:id", findByIdJobreviews);
router.put("/:id", updateJobreviews)
router.delete("/:id", deleteJobreviews)

module.exports = router 