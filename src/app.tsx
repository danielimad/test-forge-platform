import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/header'
import Sidebar from './components/layout/sidebar'
import Footer from './components/layout/footer'
import Dashboard from './pages/dashboard'
import TestsIndex from './pages/tests/index'
import TestsCreate from './pages/tests/create'
import TestsEdit from './pages/tests/edit'
import TestsResults from './pages/tests/results'
import Login from './pages/auth/login'
import Register from './pages/auth/register'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tests" element={<TestsIndex />} />
            <Route path="/tests/create" element={<TestsCreate />} />
            <Route path="/tests/edit/:id" element={<TestsEdit />} />
            <Route path="/tests/results/:id" element={<TestsResults />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App