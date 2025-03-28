const { errorHandler } = require("../helpers/error_handler");
const Users = require("../models/users.model");

const addNewuser = async (req, res) => {
  try {
    const { first_name, last_name, phone_number, password, role,refresh_token, created_at } =
      req.body;
    const newUser = await Users.create({
      first_name,
      last_name,
      phone_number,
      password,
      role,
      refresh_token,
      created_at,
    });
    res.status(200).send({ messgae: "New user added", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAll = async (req, res) => {
  try {
    const newUser = await Users.findAll();
    res.status(200).send({ messgae: "New user added", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await Users.findByPk(id);
    res.status(200).send({ newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone_number, password, role,refresh_token, created_at } =
      req.body;
    const newUser = await Users.update(
      { first_name, last_name, phone_number, password, role,refresh_token, created_at },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newUser: newUser[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await Users.destroy({ where: { id } });
    res.status(200).send({ newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewuser,
  findAll,
  findById,
  updateUser,
  deleteUsers,
};
