const express = require("express");
const { registerUser} = require("../controllers/authController");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);   // Register User
router.post("/login", loginUser);         // Login User

module.exports = router;