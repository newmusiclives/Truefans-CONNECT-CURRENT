import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ArtistDashboard from './ArtistDashboard'
import AdminDashboard from './AdminDashboard'

const Dashboard = () => {
  // In a real app, you would check user type from auth context/state
  // For demo purposes, we'll use a simple check based on URL or localStorage
  const userType = localStorage.getItem('userType') || 'artist' // Default to artist dashboard
  
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Routes>
        <Route path="/" element={
          userType === 'admin' 
            ? <Navigate to="/dashboard/admin" replace /> 
            : <Navigate to="/dashboard/artist" replace />
        } />
        <Route path="/artist" element={<ArtistDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
`

export default Dashboard
