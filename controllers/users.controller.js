const { errorHandler } = require("../helpers/error_handler");
const Passport_data = require("../models/passport.models");
const User_documents = require("../models/userdoc.models");
const Users = require("../models/users.model");
const User_skills = require("../models/userskil.model");
const bcrypt = require("bcrypt");
const config = require("config");
const jwtService = require("../services/jwt.service");

const addNewuser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      password,
      role,
      refresh_token,
      created_at,
    } = req.body;
    const newUser = await Users.create({
      first_name,
      last_name,
      phone_number,
      password,
      role,
      refresh_token,
      created_at,
    });
    res.status(200).send({ messgae: "New user added", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAll = async (req, res) => {
  try {
    const newUser = await Users.findAll({
      include: [User_documents, Passport_data, User_skills],
    });
    res.status(200).send({ messgae: "New user added", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await Users.findByPk(id);
    res.status(200).send({ newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      phone_number,
      password,
      role,
      refresh_token,
      created_at,
    } = req.body;
    const newUser = await Users.update(
      {
        first_name,
        last_name,
        phone_number,
        password,
        role,
        refresh_token,
        created_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newUser: newUser[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await Users.destroy({ where: { id } });
    res.status(200).send({ newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { phone_number, password } = req.body;

    const user = await Users.findOne({
      where: { phone_number },
    });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Phone number yoki password noto'g'ri" });
    }
        if (!password || password != user.password) {
          return res
            .status(400)
            .send({ message: "Phone number yoki password noto'g'ri" });
        }


    const payload = {
      id: user.id,
      phone_number: user.phone_number,
      role: user.role,
    };

    const tokens = jwtService.generatorTokens(payload);

    await Users.update(
      { refresh_token: tokens.refreshtoken },
      { where: { phone_number } }
    );

    res.cookie("refreshToken", tokens.refreshtoken, {
      httpOnly: true,
      maxAge: config.get("refresh_cookie_time"),
    });

    res.send({
      message: "Tizimga hush kelibsiz",
      accessToken: tokens.accesstoken,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};



const logoutuser = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res
        .status(400)
        .send({ message: "Cookie refresh token topilmadi ?" });
    }

    const user = await Users.findOne({
      where: { refresh_token: refreshToken },
    });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Bunday tokendagi foydalanuvchi topilmadi" });
    }

    await Users.update({ refresh_token: null }, { where: { id: user.id } });

    res.clearCookie("refreshToken");
    res.send({ message: "User successfully logged out" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const refreshTokenUser = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res
        .status(400)
        .send({ message: "Cookie refresh token topilmadi ?" });
    }
    const user = await Users.findOne({
      where: { refresh_token: refreshToken },
    });


    if (!user) {
      return res
        .status(400)
        .send({ message: "Bunday tokendagi foydalanuvchi topilmadi" });
    }
    const payload = {
      id: user._id,
      phone_number: user.phone_number,
      role: user.role,
    };

    const tokens = jwtService.generatorTokens(payload);
    user.refresh_token = tokens.refreshtoken;
    await user.save();


    res.cookie("refreshToken", tokens.refreshtoken, {
      httpOnly: true,
      maxAge: config.get("refresh_cookie_time"),
    });
    res.send({
      message: "Tokenlar yangilandi",
      accessToken: tokens.accesstoken,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};


module.exports = {
  login,
  logoutuser,
  refreshTokenUser,
  addNewuser,
  findAll,
  findById,
  updateUser,
  deleteUsers,
};
