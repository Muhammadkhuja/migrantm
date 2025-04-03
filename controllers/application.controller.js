const { errorHandler } = require("../helpers/error_handler");
const Applications = require("../models/applications.moudels");

const addNewApplications = async (req, res) => {
  try {
    const { usersId, jobId, status, create_date } = req.body;
    const newApplicationss = await Applications.create({
      usersId,
      jobId,
      status,
      create_date,
    });
    res.status(200).send({ messgae: "New Applicationss added", newApplicationss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllApplications = async (req, res) => {
  try {
    const newApplicationss = await Applications.findAll();
    res.status(200).send({ messgae: "New Applicationss added", newApplicationss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdApplications = async (req, res) => {
  try {
    const { id } = req.params;
    const newApplicationss = await Applications.findByPk(id);
    res.status(200).send({ newApplicationss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateApplications = async (req, res) => {
  try {
    const { id } = req.params;
    const { usersId, jobId, status, create_date } = req.body;
    const newApplicationss = await Applications.update(
      {
        usersId,
        jobId,
        status,
        create_date,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newApplicationss: newApplicationss[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteApplications = async (req, res) => {
  try {
    const { id } = req.params;
    const newApplicationss = await Applications.destroy({ where: { id } });
    res.status(200).send({ newApplicationss });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewApplications,
  findAllApplications,
  findByIdApplications,
  updateApplications,
  deleteApplications,
};
