const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Requirements = sequelize.define(
  "requirements",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    obligations: {
      type: DataTypes.STRING,
    },
    work_type: {
      type: DataTypes.STRING,
    },
    work_location: {
      type: DataTypes.STRING,
    },
    work_time: {
      type: DataTypes.STRING,
    },
    worker_residence: {
      type: DataTypes.STRING,
    },
    worker_gender: {
      type: DataTypes.STRING,
    },
    age_requirement: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.STRING,
    },
    education_level: {
      type: DataTypes.STRING,
    },
    spoken_language: {
      type: DataTypes.STRING,
    },
    trial_period: {
      type: DataTypes.STRING,
    },
    knowledge_and_usage: {
      type: DataTypes.STRING,
    },
    personal_qualities: {
      type: DataTypes.STRING,
    },
    other_requirement: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Requirements;
