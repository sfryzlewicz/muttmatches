'use client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login.jsx'
import Loading from './pages/loading.jsx'

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    
  )
}
