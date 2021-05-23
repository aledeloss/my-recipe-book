const Joi = require('@hapi/joi');

const schemas = {
    create : Joi.object({
        nombre: Joi.string().required().messages({
            'any.required' : 'El nombre de la receta es obligatorio',
        }),
        dificultad: Joi.string().required().messages({
            'any.required' : 'La dificultad es obligatoria',
        }),
        // comenzales : Joi.number().integer().positive().required()
    }),
    update : Joi.object({
        id : Joi.number().positive().integer().required(),
        nombre : Joi.string().required(),
        dificultad : Joi.string().required(),
        // comenzales : Joi.number().integer().positive().required()
    })
};

module.exports = schemas;
