const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUserDashboardData } = require("../controllers/taskController");

const router = express.Router();

// Task Management Routes
router.get("/user-dashboard-data", protect, getUserDashboardData);

module.exports = router;