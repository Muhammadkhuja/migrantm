const { addNewCompanyworkers, findAllCompanyworkers, findByIdcompanyworkers, updateCompanyworkers, deleteCompanyworkers } = require("../controllers/companyworker.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewCompanyworkers);
router.get("/",userGuard,  findAllCompanyworkers)
router.get("/:id",userGuard,  findByIdcompanyworkers)
router.put("/:id",userGuard, userAdminGuard, updateCompanyworkers)
router.delete("/:id",userGuard, userAdminGuard, deleteCompanyworkers)

module.exports = router 