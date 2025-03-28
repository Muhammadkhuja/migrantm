const { findAlluserskil, addNewuserskil, findByIduserskil, updateuserskil, deleteuserskil } = require("../controllers/userskil.controller");


const router = require("express").Router()

router.post("/", addNewuserskil);
router.get("/", findAlluserskil);
router.get("/:id", findByIduserskil);
router.put("/:id", updateuserskil)
router.delete("/:id", deleteuserskil)

module.exports = router 