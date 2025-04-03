const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Applications = require("./applications.moudels");

const Contracts = sequelize.define(
  "contracts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contractfile: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    terms: {
      type: DataTypes.STRING,
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

Contracts.belongsTo(Applications);
Applications.hasMany(Contracts);


module.exports = Contracts;
