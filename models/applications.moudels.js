const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Users = require("./users.model");
const Jobs = require("./jobs.moudels");

const Applications = sequelize.define(
  "applications",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
    },
    create_date: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Applications.belongsTo(Users);
Users.hasMany(Applications);

Applications.belongsTo(Jobs);
Jobs.hasMany(Applications);


module.exports = Applications;
