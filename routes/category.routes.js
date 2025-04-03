const { addNewCategory, findAllCategory, findByIdCategory, updateCategory, deleteCategory } = require("../controllers/category.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");



const router = require("express").Router()

router.post("/",userGuard, userAdminGuard, addNewCategory);
router.get("/",userGuard,  findAllCategory);
router.get("/:id",userGuard,  findByIdCategory);
router.put("/:id",userGuard, userAdminGuard, updateCategory)
router.delete("/:id",userGuard, userAdminGuard, deleteCategory)

module.exports = router 