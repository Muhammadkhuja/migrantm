const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Company = require("./company.model");
const Countries = require("./countries.moudels");
const Category = require("./category.moudels");

const Jobs = sequelize.define(
  "jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
    },
    job_description: {
      type: DataTypes.STRING(30),
    },
    numvacancies: {
      type: DataTypes.SMALLINT,
    },
    salary: {
      type: DataTypes.BIGINT
    },
    posted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Jobs.belongsTo(Company);
Company.hasMany(Jobs);

Jobs.belongsTo(Countries);
Countries.hasMany(Jobs);

Jobs.belongsTo(Category);
Category.hasMany(Jobs);

module.exports = Jobs;
