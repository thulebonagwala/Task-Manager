export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Register a new user (Admin or Member)
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
    LOGIN: "/api/auth/login", // Authenticate user & return JWT token
  },
};
