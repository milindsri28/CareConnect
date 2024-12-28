import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/Login'
import SignupPage from './Components/Signup'
import OTPVerification from './Components/OtpVerification'
import Homepage from './Components/HomePage'
import UserProfile from './Components/UserPRofile'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

