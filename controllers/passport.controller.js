const { errorHandler } = require("../helpers/error_handler");
const Passport_data = require("../models/passport.models");

const addNewpassports = async (req, res) => {
  try {
    const { user_id, type, path, update_at } = req.body;
    const neWpassport = await Passport_data.create({
      user_id, type, path, update_at
    });
    res.status(200).send({ messgae: "New passport added", neWpassport });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllpassports = async (req, res) => {
  try {
    const newpassport = await Passport_data.findAll();
    res.status(200).send({ messgae: "New passport added", newpassport });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdpassports = async (req, res) => {
  try {
    const { id } = req.params;
    const newpassport = await Passport_data.findByPk(id);
    res.status(200).send({ newpassport });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updatepassports = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, type, path, update_at } = req.body;
    const newpassport = await Passport_data.update(
      { user_id, type, path, update_at },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newpassport: newpassport[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deletepassports = async (req, res) => {
  try {
    const { id } = req.params;
    const newpassport = await Passport_data.destroy({ where: { id } });
    res.status(200).send({ newpassport });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewpassports,
  findAllpassports,
  findByIdpassports,
  updatepassports,
  deletepassports
};
