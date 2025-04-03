const { errorHandler } = require("../helpers/error_handler");
const Jobrequirements = require("../models/jobrequirements.moudels");

const addNewJobrequirements = async (req, res) => {
  try {
    const { requirementsId, jobId } = req.body;
    const newjobs = await Jobrequirements.create({
      requirementsId,
      jobId,
    });
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllJobrequirements = async (req, res) => {
  try {
    const newjobs = await Jobrequirements.findAll();
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdJobrequirements = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobrequirements.findByPk(id);
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobrequirements = async (req, res) => {
  try {
    const { id } = req.params;
    const { requirementsId, jobId } = req.body;
    const newjobs = await Jobrequirements.update(
      {
        requirementsId,
        jobId,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newjobs: newjobs[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobrequirements = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobrequirements.destroy({ where: { id } });
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobrequirements,
  findAllJobrequirements,
  findByIdJobrequirements,
  updateJobrequirements,
  deleteJobrequirements,
};
