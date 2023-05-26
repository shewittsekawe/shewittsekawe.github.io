"use strict";

const express = require("express");

const loginController = require("../controllers/loginController");

const router = express.Router();

router.post("/", loginController.login);

module.exports = router;
