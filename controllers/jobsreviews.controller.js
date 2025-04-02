const { errorHandler } = require("../helpers/error_handler");
const Jobsreviews = require("../models/jobs_reviews.moudels");

const addNewJobreviews = async (req, res) => {
  try {
    const { userId, jobId, rating, created_at } = req.body;
    const newjobs = await Jobsreviews.create({
      userId,
      jobId,
      rating,
      created_at,
    });
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllJobreviews = async (req, res) => {
  try {
    const newjobs = await Jobsreviews.findAll();
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdJobreviews = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobsreviews.findByPk(id);
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobreviews = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, jobId, rating, created_at } = req.body;
    const newjobs = await Jobsreviews.update(
      {
        userId,
        jobId,
        rating,
        created_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newjobs: newjobs[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobreviews = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobsreviews.destroy({ where: { id } });
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobreviews,
  findAllJobreviews,
  findByIdJobreviews,
  updateJobreviews,
  deleteJobreviews,
};
