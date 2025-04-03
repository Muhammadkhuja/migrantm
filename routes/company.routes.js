const { addNewCompany, findAllCompany, findByIdcompany, updateCompany, deleteCompany } = require("../controllers/company.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewCompany);
router.get("/",userGuard,  findAllCompany)
router.get("/:id",userGuard,  findByIdcompany)
router.put("/:id",userGuard, userAdminGuard, updateCompany)
router.delete("/:id",userGuard, userAdminGuard, deleteCompany)

module.exports = router 