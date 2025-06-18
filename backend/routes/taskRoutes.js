const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUserDashboardData } = require("../controllers/taskController");

const router = express.Router();

// Task Management Routes
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // Get all tasks (Admin: all, User: assigned)

module.exports = router;