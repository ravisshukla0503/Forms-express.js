/** @format */

const configMongoose = require("../model/configMongoose");
const usersModel = require("../model/usersModel");
const { validator, validationResult } = require("express-validator");

const addUsersDataControllers = {
  add: async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(422).send(error);
    } else {
      let data = new usersModel(req.body);
      data = await data.save();
      if (data) {
        res.redirect("/home");
        next();
      } else {
        res.send("there is any problem to save data on database");
        next();
      }
    }
  },
};

module.exports = addUsersDataControllers;


