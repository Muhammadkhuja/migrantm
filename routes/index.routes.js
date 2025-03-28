const router = require("express").Router();

const usersROUTE = require("./users.routes");
const userskilROUTE = require("./userskills.routes")
const userdocROUTE = require("./userdoc.routes")
const passportROUTE = require("./passport.routes")

router.use("/users", usersROUTE);
router.use("/user_skills", userskilROUTE)
router.use("/user_documents", userdocROUTE);
router.use("/passport_data", passportROUTE);

module.exports = router;
