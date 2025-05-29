import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ArtistDashboard from './pages/ArtistDashboard'
import ArtistsDirectory from './pages/ArtistsDirectory'
import VenuePortal from './pages/VenuePortal'
import ArtistSignup from './pages/ArtistSignup'
import ArtistProfile from './pages/ArtistProfile'
import DonationSystem from './pages/DonationSystem'
import AffiliateProgram from './pages/AffiliateProgram'
import VenueSignup from './pages/VenueSignup'
import VenueSubmissionForm from './pages/VenueSubmissionForm'
import About from './pages/About'
import Blog from './pages/Blog'
import SuccessStories from './pages/SuccessStories'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ErrorBoundary from './components/common/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Admin routes - no header/footer */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        
        {/* Public routes with header/footer */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/artist-dashboard" element={<ArtistsDirectory />} />
                  <Route path="/my-dashboard" element={<ArtistDashboard />} />
                  <Route path="/venue-portal" element={<VenuePortal />} />
                  <Route path="/artist-signup" element={<ArtistSignup />} />
                  <Route path="/artist-profile" element={<ArtistProfile />} />
                  <Route path="/donation-system" element={<DonationSystem />} />
                  <Route path="/affiliate-program" element={<AffiliateProgram />} />
                  <Route path="/venue-signup" element={<VenueSignup />} />
                  <Route path="/venue-submission/:venueId" element={<VenueSubmissionForm />} />
                  <Route path="/login" element={<ArtistDashboard />} />
                  <Route path="/help-center" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/api-docs" element={<About />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<About />} />
                  <Route path="/privacy" element={<About />} />
                  <Route path="/cookies" element={<About />} />
                </Routes>
              </AnimatePresence>
              <Footer />
            </>
          }
        />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
