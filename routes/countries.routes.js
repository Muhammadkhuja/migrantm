const { addNewCountries, findAllCountries, findByIdCountries, updateCountries, deleteCountries } = require("../controllers/countries.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewCountries);
router.get("/",userGuard,  findAllCountries);
router.get("/:id",userGuard, findByIdCountries);
router.put("/:id",userGuard, userAdminGuard, updateCountries)
router.delete("/:id",userGuard, userAdminGuard, deleteCountries)

module.exports = router 