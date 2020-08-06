const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  
  projectName: {
    type: String,
    required: [true, "Please provide a Project Name!"],
    unique: [true, "Project Name Taken"],
    trim: true,
    maxlength: [100, "Project Name too long!"],
  },

  sampleURL: {
    type: String,
    trim: true,
  },

  instructionURL: {
    type: String,
    trim: true,
  },

  otherDetails: {
    type: String,
    required: [true, "Please provide a other details!"],
  },

  seniority: {
    type: String,
    trim: true,
    required: [true, "Please provide a Seniority!"],
  },

  uploadedBy: {
    type: String,
    trim: true,
    required: [true, "Please provide id of who is uploading!"],
  },

  userName: {
    type: String,
    trim: true,
    required: [true, "Please provide user name of who is uploading!"],
  },

}, {timestamps: {}});

mongoose.models = {};
module.exports = mongoose.model.Projects || mongoose.model("Projects", ProjectSchema);
