const { addNewuser, findAll, findById, updateUser, deleteUsers } = require("../controllers/users.controller")


const router = require("express").Router()

router.post("/", addNewuser);
router.get("/", findAll)
router.get("/:id", findById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUsers)

module.exports = router 