const schema = require("../schemas/generic");

const validateId = (req, res, next) => {
  const { value } = schema.validateId.validate(parseInt(req.params.id));
  isNaN(value) ? res.json({ message: "El id no es válido" }) : next();
};

module.exports = { validateId };
