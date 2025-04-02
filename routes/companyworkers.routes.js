const { addNewCompanyworkers, findAllCompanyworkers, findByIdcompanyworkers, updateCompanyworkers, deleteCompanyworkers } = require("../controllers/companyworker.controller");



const router = require("express").Router()

router.post("/", addNewCompanyworkers);
router.get("/", findAllCompanyworkers)
router.get("/:id", findByIdcompanyworkers)
router.put("/:id", updateCompanyworkers)
router.delete("/:id", deleteCompanyworkers)

module.exports = router 