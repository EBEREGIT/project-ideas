const express = require('express');
const router = express.Router();
const createUser = require("./usersRoutes/createUser");

router.post("/create-user", createUser.createUser);

module.exports = router;