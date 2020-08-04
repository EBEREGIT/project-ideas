// external imports
const express = require("express");
const router = express.Router();

// internal imports
const auth = require("../middleware/auth");
const createProject = require("./projectsRoutes/createProject");
const editProject = require("./projectsRoutes/editProject");
const readProject = require("./projectsRoutes/readProject");
const readAllProjects = require("./projectsRoutes/readAllProjects");

// project routes
router.post("/create", auth, createProject.createProject);
router.put("/edit/:id", auth, editProject.editProject);
router.get("/read/:id", readProject.readProject);
router.get("/", readAllProjects.readAllProjects);

module.exports = router;
