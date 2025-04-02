const router = require("express").Router();

const usersROUTE = require("./users.routes");
const userskilROUTE = require("./userskills.routes")
const userdocROUTE = require("./userdoc.routes")
const passportROUTE = require("./passport.routes")
const companyROUTE = require("./company.routes")
const companyworkersROUTE = require("./companyworkers.routes")
const jobsROUTE = require("./jobs.routes")
const jobinterestsROUTE = require("./jobsintersts.routes");
const jobreviewsROUTE = require("./jobsreviews.routes")


router.use("/users", usersROUTE);
router.use("/user_skills", userskilROUTE)
router.use("/user_documents", userdocROUTE);
router.use("/passport_data", passportROUTE);
router.use("/company", companyROUTE)
router.use("/company_worker", companyworkersROUTE)
router.use("/jobs", jobsROUTE);
router.use("/job_interests", jobinterestsROUTE);
router.use("/job_reviews", jobreviewsROUTE)

module.exports = router;
