const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.moudels");
const Users = require("./users.model");
const Company = require("./company.model");

const Jobinterview = sequelize.define(
  "jobs_inteview",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    result: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Jobinterview.belongsTo(Jobs);
Jobs.hasMany(Jobinterview);

Jobinterview.belongsTo(Company);
Company.hasMany(Jobinterview);

Jobinterview.belongsTo(Users);
Users.hasMany(Jobinterview);

module.exports = Jobinterview;
