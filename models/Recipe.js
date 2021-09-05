const { Schema, model } = require("mongoose");

const RecipeSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: Array,
    required: true,
  },
  ingredients: {
    type: Schema.Types.ObjectId,
    ref: "Ingredient",
    required: false,
  },
  procedimiento: {
    type: String,
    required: true,
  },
  dificultad: {
    type: String,
    required: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  ts_create: {
    type: Date,
    default: Date.now,
  },
});

// const getAll = () => {
//   return [
//     {
//       id: 1,
//       título: "Bizcochitos de orégano",
//       dificultad: "muy fácil",
//     },
//     {
//       id: 2,
//       título: "Carne al horno",
//       dificultad: "fácil",
//     },
//   ];
// };

//module.exports = { getAll };
module.exports = model("recipes", RecipeSchema);
