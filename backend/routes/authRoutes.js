const express = require("express");
const { registerUser, loginUser} = require("../controllers/authController");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);   // Register User
router.post("/login", loginUser);         // Login User
router.get("/profile", protect, getUserProfile);  // Get User Profile

module.exports = router;