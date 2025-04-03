const { errorHandler } = require("../helpers/error_handler");
const Contracts = require("../models/contracts.moudels");

const addNewContracts = async (req, res) => {
  try {
    const {
      applicationsId,
      contractfile,
      start_date,
      end_date,
      terms,
      created_at,
    } = req.body;
    const newContractss = await Contracts.create({
      applicationsId,
      contractfile,
      start_date,
      end_date,
      terms,
      created_at,
    });
    res.status(200).send({ messgae: "New Contractss added", newContractss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllContracts = async (req, res) => {
  try {
    const newContractss = await Contracts.findAll();
    res.status(200).send({ messgae: "New Contractss added", newContractss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const newContractss = await Contracts.findByPk(id);
    res.status(200).send({ newContractss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      applicationsId,
      contractfile,
      start_date,
      end_date,
      terms,
      created_at,
    } = req.body;
    const newContractss = await Contracts.update(
      {
        applicationsId,
        contractfile,
        start_date,
        end_date,
        terms,
        created_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newContractss: newContractss[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const newContractss = await Contracts.destroy({ where: { id } });
    res.status(200).send({ newContractss });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewContracts,
  findAllContracts,
  findByIdContracts,
  updateContracts,
  deleteContracts,
};
