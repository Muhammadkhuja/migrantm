const { errorHandler } = require("../helpers/error_handler");
const CompanyWorkers = require("../models/companyworkers.model");
const Users = require("../models/users.model");

const addNewCompanyworkers = async (req, res) => {
  try {
    const { companyId, userId, role} =
      req.body;
    const newCompany = await CompanyWorkers.create({
      companyId,
      userId,
      role,
    });
    res.status(200).send({ messgae: "New company added", newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllCompanyworkers = async (req, res) => {
  try {
    const newCompany = await CompanyWorkers.findAll({include: [Users]});
    res.status(200).send({ messgae: "New company added", newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdcompanyworkers = async (req, res) => {
  try {
    const { id } = req.params;
    const newCompany = await CompanyWorkers.findByPk(id);
    res.status(200).send({ newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCompanyworkers = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyId, userId, role } = req.body;
    const newCompany = await CompanyWorkers.update(
      {
        companyId,
        userId,
        role,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newCompany: newCompany[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCompanyworkers = async (req, res) => {
  try {
    const { id } = req.params;
    const newCompany = await CompanyWorkers.destroy({ where: { id } });
    res.status(200).send({ newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCompanyworkers,
  findAllCompanyworkers,
  findByIdcompanyworkers,
  updateCompanyworkers,
  deleteCompanyworkers,
};
