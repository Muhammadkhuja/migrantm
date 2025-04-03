const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Countries = sequelize.define(
  "countries",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



module.exports = Countries;
