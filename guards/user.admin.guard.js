const ApiError = require("../helpers/api.error");

module.exports = function (req, res, next) {
    if (req.user.role != "admin") {
        throw ApiError.forbidden("kim ko'rvossan o'zini a ");
    }
    next()
};