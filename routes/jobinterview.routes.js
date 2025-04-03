const { addNewJobinterview, findAllJobinterview, findByIdJobinterview, updateJobinterview, deleteJobinterview } = require("../controllers/jobinterview.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewJobinterview);
router.get("/",userGuard,  findAllJobinterview);
router.get("/:id",userGuard,  findByIdJobinterview);
router.put("/:id",userGuard, userAdminGuard, updateJobinterview)
router.delete("/:id",userGuard, userAdminGuard, deleteJobinterview)

module.exports = router 