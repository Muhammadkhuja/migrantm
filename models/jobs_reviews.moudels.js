const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.moudels");
const Users = require("./users.model");

const Jobsreviews = sequelize.define(
  "jobs_reviews",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.ENUM("top", "medium", "low"), allowNull:true
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

Jobs.belongsToMany(Users, { through: Jobsreviews });
Users.belongsToMany(Jobs, { through: Jobsreviews });

Jobsreviews.belongsTo(Jobs);
Jobsreviews.belongsTo(Users);

module.exports = Jobsreviews;
