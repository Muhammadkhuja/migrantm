const { errorHandler } = require("../helpers/error_handler");
const Jobinterview = require("../models/jobs_interview.moudels");

const addNewJobinterview = async (req, res) => {
  try {
    const { companyId, jobId, usersId, date, type, notes, status, result, created_at } = req.body;
    const newjobs = await Jobinterview.create({
      companyId,
      jobId,
      usersId,
      date,
      type,
      notes,
      status,
      result,
      created_at,
    });
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllJobinterview = async (req, res) => {
  try {
    const newjobs = await Jobinterview.findAll();
    res.status(200).send({ messgae: "New jobs added", newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdJobinterview = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobinterview.findByPk(id);
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobinterview = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      companyId,
      jobId,
      usersId,
      date,
      type,
      notes,
      status,
      result,
      created_at,
    } = req.body;
    const newjobs = await Jobinterview.update(
      {
        companyId,
        jobId,
        usersId,
        date,
        type,
        notes,
        status,
        result,
        created_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newjobs: newjobs[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobinterview = async (req, res) => {
  try {
    const { id } = req.params;
    const newjobs = await Jobinterview.destroy({ where: { id } });
    res.status(200).send({ newjobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewJobinterview,
  findAllJobinterview,
  findByIdJobinterview,
  updateJobinterview,
  deleteJobinterview,
};
