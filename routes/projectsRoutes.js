// external imports
const express = require("express");
const router = express.Router();

// internal imports
const auth = require("../middleware/auth");
const createProject = require("./projectsRoutes/createProject");

// project routes
router.post("/create", auth, createProject.createProject);

module.exports = router;