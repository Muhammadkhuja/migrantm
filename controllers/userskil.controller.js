const { errorHandler } = require("../helpers/error_handler");
const User_skills = require("../models/userskil.model");

const addNewuserskil = async (req, res) => {
  try {
    const { user_id, edu_level, language, experince, bio } = req.body;
    const newuserskil = await User_skills.create({
      user_id,
      edu_level,
      language,
      experince,
      bio,
    });
    res.status(200).send({ messgae: "New userskil added", newuserskil });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAlluserskil = async (req, res) => {
  try {
    const newuserskil = await User_skills.findAll();
    res.status(200).send({ messgae: "New userskil added", newuserskil });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIduserskil = async (req, res) => {
  try {
    const { id } = req.params;
    const newuserskil = await User_skills.findByPk(id);
    res.status(200).send({ newuserskil });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateuserskil = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, edu_level, language, experince, bio } = req.body;
    const newuserskil = await User_skills.update(
      { user_id, edu_level, language, experince, bio },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newuserskil: newuserskil[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteuserskil = async (req, res) => {
  try {
    const { id } = req.params;
    const newuserskil = await User_skills.destroy({ where: { id } });
    res.status(200).send({ newuserskil });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewuserskil,
  findAlluserskil,
  findByIduserskil,
  updateuserskil,
  deleteuserskil
};
