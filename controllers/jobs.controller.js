const { errorHandler } = require("../helpers/error_handler");
const Jobs = require("../models/jobs.moudels");

const addNewJobs = async (req, res) => {
  try {
    const {
      companyId,
      title,
      job_description,
      numvacancies,
      salary,
      posted_at,
    } = req.body;
    const newjobs = await Jobs.create({
      companyId,
      title,
      job_description,
      numvacancies,
      salary,
      posted_at,
    });
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllJobs = async (req, res) => {
  try {
    const newjobs = await Jobs.findAll();
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobs.findByPk(id);
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      companyId,
      title,
      job_description,
      numvacancies,
      salary,
      posted_at,
    } = req.body;
    const newjobs = await Jobs.update(
      {
        companyId,
        title,
        job_description,
        numvacancies,
        salary,
        posted_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newjobs: newjobs[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobs.destroy({ where: { id } });
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobs,
  findAllJobs,
  findByIdJobs,
  updateJobs,
  deleteJobs,
};
