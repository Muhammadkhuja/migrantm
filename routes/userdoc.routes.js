const { addNewuserdocs, findAlluserdocs, findByIduserdocs, updateuserdocs, deleteuserdocs } = require("../controllers/userdoc.controller");


const router = require("express").Router()

router.post("/", addNewuserdocs);
router.get("/", findAlluserdocs);
router.get("/:id", findByIduserdocs);
router.put("/:id", updateuserdocs)
router.delete("/:id", deleteuserdocs)

module.exports = router 