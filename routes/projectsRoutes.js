// external imports
const express = require("express");
const router = express.Router();

// internal imports
const auth = require("../middleware/auth");
const createProject = require("./projectsRoutes/createProject");
const editProject = require("./projectsRoutes/editProject");
const readProject = require("./projectsRoutes/readProject");

// project routes
router.post("/create", auth, createProject.createProject);
router.put("/edit/:id", auth, editProject.editProject);
router.get("/read/:id", auth, readProject.readProject);

module.exports = router;
