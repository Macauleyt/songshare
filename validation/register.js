const validator = require("validator");
import isEmpty from "./is-empty";

module.exports = function validateRegsiterInput(data) {
  let errors = {};

  if ((!validator.isLength(data.name), { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
