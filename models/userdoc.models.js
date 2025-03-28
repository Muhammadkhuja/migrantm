const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const User_documents = sequelize.define(
  "user_documents",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
    update_at: {
      type: DataTypes.DATE
     },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User_documents;
