const { addNewuser, findAll, findById, updateUser, deleteUsers, login, logoutuser, refreshTokenUser } = require("../controllers/users.controller");
const userAdminGuard = require("../guards/user.admin.guard");
const userGuard = require("../guards/user.guard");
const userSelfGuard = require("../guards/user.self.guard");


const router = require("express").Router()

router.post("/login", login);
router.post("/logout", logoutuser);
router.post("/refresh", refreshTokenUser);

router.post("/",userGuard, userAdminGuard, addNewuser);
router.get("/",userGuard, userAdminGuard, findAll)
router.get("/:id",userGuard, userSelfGuard, findById)
router.put("/:id", userGuard, userAdminGuard, updateUser);
router.delete("/:id", userGuard, userAdminGuard, deleteUsers);

module.exports = router 