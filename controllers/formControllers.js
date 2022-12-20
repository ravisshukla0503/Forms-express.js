/** @format */

const formControllers = {
  get: (req, res, next) => {
    res.render("form");
    next();
  },
};
module.exports = formControllers;


