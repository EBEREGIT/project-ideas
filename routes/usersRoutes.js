// external imports
const express = require("express");
const router = express.Router();

// internal imports
const createUser = require("./usersRoutes/createUser");
const readUser = require("./usersRoutes/readUser");

router.post("/create-user", createUser.createUser);
router.post("/read-user", readUser.readUser);

module.exports = router;
