const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.moudels");
const Requirements = require("./requirements.moudels");

const Jobrequirements = sequelize.define(
  "job_requirements",
  {},
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Jobs.belongsToMany(Requirements, {through: Jobrequirements})
Requirements.belongsToMany(Jobs, {through: Jobrequirements})

Jobrequirements.belongsTo(Jobs)
Jobrequirements.belongsTo(Requirements)

module.exports = Jobrequirements;
