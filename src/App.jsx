import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/HomePage'
import About from './pages/About'
import ArtistSignup from './pages/ArtistSignup'
import VenueSignup from './pages/VenueSignup'
import DonationSystem from './pages/DonationSystem'
import AffiliateProgram from './pages/AffiliateProgram'
import Login from './pages/Login'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import ArtistsDirectory from './pages/ArtistsDirectory'
import VenuePortalInfo from './pages/VenuePortalInfo'
import ArtistProfile from './pages/ArtistProfile'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist-signup" element={<ArtistSignup />} />
        <Route path="/venue-signup" element={<VenueSignup />} />
        <Route path="/donation-system" element={<DonationSystem />} />
        <Route path="/affiliate-program" element={<AffiliateProgram />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/artists-directory" element={<ArtistsDirectory />} />
        <Route path="/venue-portal" element={<VenuePortalInfo />} />
        <Route path="/venue-portal-info" element={<Navigate to="/venue-portal" replace />} />
        <Route path="/artist-profile/:id" element={<ArtistProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
