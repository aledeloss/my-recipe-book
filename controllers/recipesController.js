const Recipe = require("../models/Recipe");

const all = async (req, res) => {
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

const find = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  res.json(recipe);
};

module.exports = { all, create, find };
