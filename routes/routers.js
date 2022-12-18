/** @format */

const express = require("express");
const router = express.Router();
const formControllers = require("../controllers/formControllers");
const addUsersDataControllers = require("../controllers/addUsersDataControllers");
const homeControllers = require("../controllers/homeControllers");
const { validator, validationResult } = require("express-validator");

router.get("/", formControllers.get);

router.post("/", validator, addUsersDataControllers.add);

router.get("/home", homeControllers.get);

module.exports = router;

