const { errorHandler } = require("../helpers/error_handler");
const Category = require("../models/category.moudels");

const addNewCategory = async (req, res) => {
  try {
    const { name, description, parent_category } = req.body;
    const newcategorys = await Category.create({
      name, description, parent_category
    });
    res.status(200).send({ messgae: "New categorys added", newcategorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findAllCategory = async (req, res) => {
  try {
    const newcategorys = await Category.findAll();
    res.status(200).send({ messgae: "New categorys added", newcategorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findByIdCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const newcategorys = await Category.findByPk(id);
    res.status(200).send({ newcategorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, parent_category } = req.body;
    const newcategorys = await Category.update(
      {
        name,
        description,
        parent_category,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newcategorys: newcategorys[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const newcategorys = await Category.destroy({ where: { id } });
    res.status(200).send({ newcategorys });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewCategory,
  findAllCategory,
  findByIdCategory,
  updateCategory,
  deleteCategory,
};
