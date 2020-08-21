// external imports
const express = require("express");
const router = express.Router();

// internal imports
const auth = require("../middleware/auth");
const createProject = require("./projectsRoutes/createProject");
const editProject = require("./projectsRoutes/editProject");
const readProject = require("./projectsRoutes/readProject");
const readAllProjects = require("./projectsRoutes/readAllProjects");
const deleteProject = require("./projectsRoutes/deleteProject");
const readUserProjects = require("./projectsRoutes/readUserProjects");
const searchProjects = require("./projectsRoutes/searchProjects");

// project routes
router.post("/create", auth, createProject.createProject);
router.put("/edit/:id", auth, editProject.editProject);
router.delete("/delete/:id", auth, deleteProject.deleteProject);
router.get("/user", auth, readUserProjects.readUserProjects);
router.get("/read/:id", readProject.readProject);
router.post("/search", searchProjects.searchProjects);
router.get("/", readAllProjects.readAllProjects);

module.exports = router;
