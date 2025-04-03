const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Category = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    parent_category: {
      type: DataTypes.BIGINT,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



module.exports = Category;
