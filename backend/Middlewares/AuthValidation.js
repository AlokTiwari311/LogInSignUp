const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(), // Name should be 3-100 characters
    email: Joi.string().email().required(), // Email must be valid
    dob: Joi.date().required(), // Date of birth must be a valid date
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .optional(), // Optional field; must be a 10-digit number if provided
    password: Joi.string().min(6).max(100).required(), // Password must be 6-100 characters
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required() // Must match the `password` field
      .messages({ "any.only": "Confirm password must match password." }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message, success: false });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message, success: false });
  }
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
