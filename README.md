# Task‑Manager  
_A full‑stack task management application (frontend + backend)_  
**Website:**  https://thulebonagwala-taskapp.netlify.app  

## Demo Login
**Administrator:**  
email: thulebonagwala@gmail.com  
password: Test@123  
**User:**  
email: thule_10@hotmail.com  
Password: Test@123

## Table of Contents  
- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)

## Overview  
This repository provides a complete task‐management application, with both backend and frontend folders:  
- `backend` — the server/API layer  
- `frontend` — the client UI layer  

It enables administartors to create, view, update and delete tasks, and manage them through an intuitive user interface. And users to see their dedicted tasks and complete them. The environment is designed for rapid development and deployment.

## Features  
- Create new tasks  
- Read (view) existing tasks  
- Update task details (e.g., status, description, due date)  
- Delete tasks  
- (Optional/To be built) Filter by status, priority, date  
- Responsive UI that works well on web browsers  
- RESTful API backend for flexibility  

## Tech Stack  
**Backend**  
- Node.js 
- Express
- MongoDB
- REST API endpoints  

**Frontend**  
- React (via Vite)  
- TailwindCSS 
- ESLint for linting and code quality  

## Getting Started  

### Prerequisites  
- Git  
- Node.js 
- npm or Yarn  
-  MongoDB
- Environment variables (see below)  

### Installation  

1. Clone the repository  
   ```bash
   git clone https://github.com/thulebonagwala/Task-Manager.git
   cd Task-Manager
   ```

2. Install backend dependencies  
   ```bash
   cd backend
   npm install
   ```

3. Configure backend environment variables  
   Create a `.env` file (based on `.env.example`) and set variables such as:
   ```env
   DATABASE_URL=<your‑database‑connection‑string>
   PORT=5000
   ```

4. Start the backend  
   ```bash
   npm run dev
   ```

5. Install frontend dependencies  
   ```bash
   cd ../frontend
   npm install
   ```

6. Start the frontend  
   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000` (or whichever port the frontend uses).

## Usage  
- Navigate to the UI in your browser.  
- From the dashboard you can add a new task by clicking "+ Add Task".  
- Enter the task description, due date, status (e.g., "To Do", "In Progress", "Done").  
- View the list of tasks, update or delete them.  
- On the backend, REST endpoints include:  
  - `GET /tasks` — fetch all tasks  
  - `POST /tasks` — create a new task  
  - `PUT /tasks/:id` — update a specific task  
  - `DELETE /tasks/:id` — delete a task  

## Project Structure  
```text
Task‑Manager/
├── backend/              # API layer
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/             # Client UI
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Contributing  
Contributions, issues and feature requests are welcome!  
- Fork the project  
- Create a new branch (`git checkout -b feature/my‑feature`)  
- Commit your changes (`git commit -m 'Add some feature'`)  
- Push to the branch (`git push origin feature/my‑feature`)  
- Open a Pull Request  

Please make sure to update tests as appropriate.

## License  
This project is licensed under the MIT License (or whichever license is present). If no license file is provided, please consider adding one for clarity.

## Acknowledgements  
- Thanks to the open‑source community for the many libraries and frameworks used.  
- Inspired by many task management templates and applications.  
- Additional thanks to anyone who contributes or gives feedback.  
