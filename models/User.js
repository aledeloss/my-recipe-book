const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    tsCreate: {
        type: Date,
        dafalt: Date.now()
    },
    enable: {
        type: Boolean,
        default: false
    }
})


module.exports = model('users', UserSchema);