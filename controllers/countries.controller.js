const { errorHandler } = require("../helpers/error_handler");
const Countries = require("../models/countries.moudels");

const addNewCountries = async (req, res) => {
  try {
    const { name, code } = req.body;
    const newCountriess = await Countries.create({
      name,
      code,
    });
    res.status(200).send({ messgae: "New Countriess added", newCountriess });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllCountries = async (req, res) => {
  try {
    const newCountriess = await Countries.findAll();
    res.status(200).send({ messgae: "New Countriess added", newCountriess });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdCountries = async (req, res) => {
  try {
    const { id } = req.params;
    const newCountriess = await Countries.findByPk(id);
    res.status(200).send({ newCountriess });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCountries = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;
    const newCountriess = await Countries.update(
      {
        name,
        code,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newCountriess: newCountriess[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCountries = async (req, res) => {
  try {
    const { id } = req.params;
    const newCountriess = await Countries.destroy({ where: { id } });
    res.status(200).send({ newCountriess });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCountries,
  findAllCountries,
  findByIdCountries,
  updateCountries,
  deleteCountries,
};
