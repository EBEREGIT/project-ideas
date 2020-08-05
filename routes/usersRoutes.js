// external imports
const express = require("express");
const router = express.Router();

// internal imports
const createUser = require("./usersRoutes/createUser");
const readUser = require("./usersRoutes/readUser");
const deleteUser = require("./usersRoutes/deleteUser");

// user routes
router.post("/create", createUser.createUser);
router.post("/read", readUser.readUser);
router.delete("/delete/:id", deleteUser.deleteUser);

module.exports = router;
