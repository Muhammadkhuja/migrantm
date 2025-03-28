const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(30),
    },
    last_name: {
      type: DataTypes.STRING(30),
    },
    phone_number: {
      type: DataTypes.STRING(15),
      validate: {
        is: /^\d{2}-\d{3}-\d{2}-\d{2}$/,
      },
    },
    password: {
      type: DataTypes.STRING(90),
    },
    role: {
      type: DataTypes.STRING()
    },
    refresh_token: {
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

module.exports = Users;
