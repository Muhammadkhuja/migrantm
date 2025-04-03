const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Countries = require("./countries.moudels");

const Company = sequelize.define(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(30),
    },
    phone_number: {
      type: DataTypes.STRING(15)
      // validate: {
      //   is: /^\d{2}-\d{3}-\d{2}-\d{2}$/,
      // },
    },
    web_site: {
      type: DataTypes.STRING(90),
    },
    description: {
      type: DataTypes.TEXT
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Company.belongsTo(Countries);
Countries.hasMany(Company);

module.exports = Company ;
