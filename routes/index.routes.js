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
const jobrequirementROUTE = require("./jobrequirements.routes")
const jobinterviewROUTE = require("./jobinterview.routes")
const categoryROUTE = require("./category.routes")
const countrieROUTE = require("./countries.routes")
const contractsROUTE = require("./contracts.routes")
const requirementsROUTE = require("./requirements.routes")


router.use("/users", usersROUTE);
router.use("/user_skills", userskilROUTE)
router.use("/user_documents", userdocROUTE);
router.use("/passport_data", passportROUTE);
router.use("/company", companyROUTE)
router.use("/company_worker", companyworkersROUTE)
router.use("/jobs", jobsROUTE);
router.use("/job_interests", jobinterestsROUTE);
router.use("/job_reviews", jobreviewsROUTE)
router.use("/job_requirements", jobrequirementROUTE);
router.use("/job_interview", jobinterviewROUTE);
router.use("/category", categoryROUTE)
router.use("/countries" , countrieROUTE);
router.use("/contracts", contractsROUTE);
router.use("/requirements", requirementsROUTE);

module.exports = router;
