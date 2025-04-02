const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.moudels");
const Users = require("./users.model");

const Jobsinterests = sequelize.define(
  "jobs_interests",
  {
    timestamps: {
      type: DataTypes.TIME,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Jobs.belongsToMany(Users, {through: Jobsinterests})
Users.belongsToMany(Jobs, {through: Jobsinterests})

Jobsinterests.belongsTo(Jobs)
Jobsinterests.belongsTo(Users)

module.exports = Jobsinterests;
