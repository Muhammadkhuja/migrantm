const { addNewuser, findAll, findById, updateUser, deleteUsers, login, logoutuser, refreshTokenUser } = require("../controllers/users.controller")


const router = require("express").Router()

router.post("/", addNewuser);
router.post("/login", login);
router.post("/logout", logoutuser);
router.post("/refresh", refreshTokenUser);
router.get("/", findAll)
router.get("/:id", findById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUsers)

module.exports = router 