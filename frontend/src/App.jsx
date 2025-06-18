import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import UserProvider, { UserContext } from "./context/userContext";

import UserDashboard from "./pages/User/UserDashboard";

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
