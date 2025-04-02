const { errorHandler } = require("../helpers/error_handler");
const Company = require("../models/company.model");
const Users = require("../models/users.model");

const addNewCompany = async (req, res) => {
  try {
    const { name, email, phone_number, web_site, description} =
      req.body;
    const newCompany = await Company.create({
      name, email, phone_number, web_site, description
    });
    res.status(200).send({ messgae: "New company added", newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllCompany = async (req, res) => {
  try {
    const newCompany = await Company.findAll();
    res.status(200).send({ messgae: "New company added", newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdcompany = async (req, res) => {
  try {
    const { id } = req.params;
    const newCompany = await Company.findByPk(id);
    res.status(200).send({ newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone_number, web_site, description } =
      req.body;
    const newCompany = await Company.update(
      { name, email, phone_number, web_site, description },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newCompany: newCompany[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const newCompany = await Company.destroy({ where: { id } });
    res.status(200).send({ newCompany });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCompany,
  findAllCompany,
  findByIdcompany,
  updateCompany,
  deleteCompany,
};
