const { errorHandler } = require("../helpers/error_handler");
const Jobsinterests = require("../models/jobs_interests.moudels");

const addNewJobsinterests = async (req, res) => {
  try {
    const { userId, jobId, timestamp } = req.body;
    const newjobs = await Jobsinterests.create({
      userId,
      jobId,
      timestamp,
    });
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllJobsinterests = async (req, res) => {
  try {
    const newjobs = await Jobsinterests.findAll();
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdJobsinterests = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobsinterests.findByPk(id);
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobsinterests = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, jobId, timestamp } = req.body;
    const newjobs = await Jobsinterests.update(
      {
        userId,
        jobId,
        timestamp,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newjobs: newjobs[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobsinterests = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobsinterests.destroy({ where: { id } });
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobsinterests,
  findAllJobsinterests,
  findByIdJobsinterests,
  updateJobsinterests,
  deleteJobsinterests,
};
