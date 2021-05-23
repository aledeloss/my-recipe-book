const schema = require("../schemas/recipeSchema");

const validateCreate = (req, res, next) => {
  const { error } = schema.create.validate(req.body);
  console.info(error);
  error ? res.status(422).json({ message: error.details[0].message }) : next();
};

module.exports = { validateCreate };
