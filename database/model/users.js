const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  
  userName: {
    type: String,
    required: [true, "Please provide a User Name!"],
    unique: true,
    trim: true,
    maxlength: [30, "Name too long!"],
  },

  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: true,
    trim: true,
    maxlength: [30, "Name too long!"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
    trim: true,
    maxlength: [100, "Name too long!"],
  },

}, {timestamps: {}});

mongoose.models = {};
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
