const Recipe = require("../models/Recipe");

const all = async (_, res) => {
  try {
    const data = await Recipe.find();
    res.json(data);
  } catch(e){
    console.error(e)
  };
};

const create = (req, res) => {
  console.log(req.body);
  const { nombre, dificultad } = req.body;
  res.sendStatus(201).json();
};

const find = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Recipe.findById(id);
    res.json(data);
  } catch(e){
    console.error(e);
    res.sendStatus(500);
  };
};

module.exports = { all, create, find };
