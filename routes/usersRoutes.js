// external imports
const express = require("express");
const router = express.Router();

// internal imports
const createUser = require("./usersRoutes/createUser");
const readUser = require("./usersRoutes/readUser");
const deleteUser = require("./usersRoutes/deleteUser");

// user routes
router.post("/create-user", createUser.createUser);
router.post("/read-user", readUser.readUser);
router.delete("/delete-user/:id", deleteUser.deleteUser);

module.exports = router;
