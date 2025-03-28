const { addNewpassports, findAllpassports, findByIdpassports, updatepassports, deletepassports } = require("../controllers/passport.controller");


const router = require("express").Router()

router.post("/", addNewpassports);
router.get("/", findAllpassports);
router.get("/:id", findByIdpassports);
router.put("/:id", updatepassports)
router.delete("/:id", deletepassports)

module.exports = router 