import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Chat from './components/Chat'
import Contact from './components/Contact'

export default function ProfileRoutes() {
  return (
    <div>
      <MainLayout />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
