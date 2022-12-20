/** @format */

const { check, validationResult } = require("express-validator");

module.exports = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name must have more than 5 characters"),
  check("email", "Your email is not valid").not().isEmpty(),
  check("password", "Your password must be at least 5 characters")
    .not()
    .isEmpty(),
];

