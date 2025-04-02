const { addNewCompany, findAllCompany, findByIdcompany, updateCompany, deleteCompany } = require("../controllers/company.controller");



const router = require("express").Router()

router.post("/", addNewCompany);
router.get("/", findAllCompany)
router.get("/:id", findByIdcompany)
router.put("/:id", updateCompany)
router.delete("/:id", deleteCompany)

module.exports = router 