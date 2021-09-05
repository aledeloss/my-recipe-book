const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    verificationCode: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    enable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
