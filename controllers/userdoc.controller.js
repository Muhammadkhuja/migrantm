const { errorHandler } = require("../helpers/error_handler");
const User_documents = require("../models/userdoc.models");
const Users = require("../models/users.model");

const addNewuserdocs = async (req, res) => {
  try {
    const { userId, type, path, update_at } = req.body;
    const neWuserdoc = await User_documents.create({
      userId, type, path, update_at
    });
    res.status(200).send({ messgae: "New userdoc added", neWuserdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAlluserdocs = async (req, res) => {
  try {
    const newuserdoc = await User_documents.findAll({include: Users});
    res.status(200).send({ messgae: "New userdoc added", newuserdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIduserdocs = async (req, res) => {
  try {
    const { id } = req.params;
    const newuserdoc = await User_documents.findByPk(id);
    res.status(200).send({ newuserdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateuserdocs = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, type, path, update_at } = req.body;
    const newuserdoc = await User_documents.update(
      { userId, type, path, update_at },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newuserdoc: newuserdoc[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteuserdocs = async (req, res) => {
  try {
    const { id } = req.params;
    const newuserdoc = await User_documents.destroy({ where: { id } });
    res.status(200).send({ newuserdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewuserdocs,
  findAlluserdocs,
  findByIduserdocs,
  updateuserdocs,
  deleteuserdocs
};
