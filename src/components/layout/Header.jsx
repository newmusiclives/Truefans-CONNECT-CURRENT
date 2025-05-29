import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../ui/Button'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }
  
  return (
    <HeaderWrapper scrolled={scrolled}>
      <Container>
        <HeaderContent>
          <LogoContainer>
            <Link to="/">
              <Logo>TrueFans CONNECT™</Logo>
            </Link>
          </LogoContainer>
          
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={mobileMenuOpen} />
          </MobileMenuButton>
          
          <NavLinks open={mobileMenuOpen}>
            <NavItem active={location.pathname === '/'}>
              <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            </NavItem>
            <NavItem active={location.pathname === '/about'}>
              <NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink>
            </NavItem>
            <NavItem active={location.pathname === '/artist-dashboard'}>
              <NavLink to="/artist-dashboard" onClick={closeMobileMenu}>Artists</NavLink>
            </NavItem>
            <NavItem active={location.pathname === '/venue-portal'}>
              <NavLink to="/venue-portal" onClick={closeMobileMenu}>Venue Portal</NavLink>
            </NavItem>
            <NavItem active={location.pathname === '/donation-system'}>
              <NavLink to="/donation-system" onClick={closeMobileMenu}>Donation System</NavLink>
            </NavItem>
            <NavItem active={location.pathname === '/affiliate-program'}>
              <NavLink to="/affiliate-program" onClick={closeMobileMenu}>Affiliate Program</NavLink>
            </NavItem>
            
            {/* Mobile-only auth buttons */}
            <MobileAuthButtons>
              <MobileLoginButton as={Link} to="/my-dashboard" onClick={closeMobileMenu}>Log In</MobileLoginButton>
              <MobileSignupButton as={Link} to="/artist-signup" onClick={closeMobileMenu}>Sign Up</MobileSignupButton>
            </MobileAuthButtons>
          </NavLinks>
          
          <AuthButtons>
            <LoginButton as={Link} to="/my-dashboard">Log In</LoginButton>
            <SignupButton as={Link} to="/artist-signup">Sign Up</SignupButton>
          </AuthButtons>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.colors.trustworthyNavy : 'rgba(26, 43, 76, 0.95)'};
  padding: ${({ theme, scrolled }) => 
    scrolled ? `${theme.space.sm} 0` : `${theme.space.md} 0`};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ theme, scrolled }) => 
    scrolled ? theme.shadows.md : 'none'};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  flex-shrink: 0;
`

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.space.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`

const MenuIcon = styled.div`
  width: 24px;
  height: 3px;
  background-color: ${({ open, theme }) => open ? 'transparent' : theme.colors.primary};
  position: relative;
  transition: all 0.3s ease;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
  }
  
  &::before {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'translateY(-8px)'};
  }
  
  &::after {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'translateY(8px)'};
  }
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 70px; /* Adjust based on header height */
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.trustworthyNavy};
    padding: ${({ theme }) => theme.space.lg};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${({ open }) => open ? 1 : 0};
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    overflow-y: auto;
    z-index: 999;
  }
`

const NavItem = styled.li`
  margin: 0 ${({ theme }) => theme.space.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: ${({ active }) => active ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: ${({ theme }) => `${theme.space.md} 0`};
    
    &::after {
      bottom: -2px;
    }
  }
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    display: block;
    padding: ${({ theme }) => theme.space.sm} 0;
  }
`

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const LoginButton = styled(Button)`
  background: transparent;
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

const SignupButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

// Mobile-only auth buttons
const MobileAuthButtons = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
    margin-top: ${({ theme }) => theme.space.xl};
  }
`

const MobileLoginButton = styled(Button)`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`

const MobileSignupButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border: none;
  padding: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

export default Header
