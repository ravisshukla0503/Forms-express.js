/** @format */

const homeControllers = {
  get: (req, res, next) => {
    res.render("home");
    next();
  },
};

module.exports = homeControllers;

