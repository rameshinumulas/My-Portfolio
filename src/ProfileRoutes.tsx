import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'

export default function ProfileRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
    </div>
  )
}
