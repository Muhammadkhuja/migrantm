const { errorHandler } = require("../helpers/error_handler");
const Requirements = require("../models/requirements.moudels");

const addNewRequirements = async (req, res) => {
  try {
    const {
      obligations,
      work_type,
      work_location,
      work_time,
      worker_residence,
      worker_gender,
      age_requirement,
      experience,
      education_level,
      spoken_language,
      trial_period,
      knowledge_and_usage,
      personal_qualities,
      other_requirement,
    } = req.body;
    const newRequirementss = await Requirements.create({
      obligations,
      work_type,
      work_location,
      work_time,
      worker_residence,
      worker_gender,
      age_requirement,
      experience,
      education_level,
      spoken_language,
      trial_period,
      knowledge_and_usage,
      personal_qualities,
      other_requirement,
    });
    res.status(200).send({ messgae: "New Requirementss added", newRequirementss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllRequirements = async (req, res) => {
  try {
    const newRequirementss = await Requirements.findAll();
    res.status(200).send({ messgae: "New Requirementss added", newRequirementss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdRequirements = async (req, res) => {
  try {
    const { id } = req.params;
    const newRequirementss = await Requirements.findByPk(id);
    res.status(200).send({ newRequirementss });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateRequirements = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      obligations,
      work_type,
      work_location,
      work_time,
      worker_residence,
      worker_gender,
      age_requirement,
      experience,
      education_level,
      spoken_language,
      trial_period,
      knowledge_and_usage,
      personal_qualities,
      other_requirement,
    } = req.body;
    const newRequirementss = await Requirements.update(
      {
        obligations,
        work_type,
        work_location,
        work_time,
        worker_residence,
        worker_gender,
        age_requirement,
        experience,
        education_level,
        spoken_language,
        trial_period,
        knowledge_and_usage,
        personal_qualities,
        other_requirement,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newRequirementss: newRequirementss[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteRequirements = async (req, res) => {
  try {
    const { id } = req.params;
    const newRequirementss = await Requirements.destroy({ where: { id } });
    res.status(200).send({ newRequirementss });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewRequirements,
  findAllRequirements,
  findByIdRequirements,
  updateRequirements,
  deleteRequirements,
};
