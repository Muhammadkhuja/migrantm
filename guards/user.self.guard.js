const { errorHandler } = require("../helpers/error_handler");

module.exports = function (req, res, next) {
  try {
    const id = req.params.id;
    if (id != req.user.id) {
      return res.status(403).send({
        message: "iy iy shaxs tahsga aralashilmasin !?",
      });
    }
    next();
  } catch (error) {
    errorHandler(error, res);
  }
};
