import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterBrand>
            <FooterLogo>TrueFans CONNECT™</FooterLogo>
            <FooterTagline>Connecting artists with their supporters</FooterTagline>
            <FooterSocial>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <SocialIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </SocialIcon>
                <span>Twitter</span>
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <SocialIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </SocialIcon>
                <span>Instagram</span>
              </SocialLink>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <SocialIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </SocialIcon>
                <span>Facebook</span>
              </SocialLink>
            </FooterSocial>
          </FooterBrand>
          
          <FooterLinks>
            <FooterLinkGroup>
              <FooterLinkTitle>Platform</FooterLinkTitle>
              <FooterLink as={Link} to="/">Home</FooterLink>
              <FooterLink as={Link} to="/about">About Us</FooterLink>
              <FooterLink as={Link} to="/artist-signup">Artist Signup</FooterLink>
              <FooterLink as={Link} to="/venue-signup">Venue Signup</FooterLink>
              <FooterLink as={Link} to="/donation-system">Donation System</FooterLink>
            </FooterLinkGroup>
            
            <FooterLinkGroup>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink as={Link} to="/help-center">Help Center</FooterLink>
              <FooterLink as={Link} to="/blog">Blog</FooterLink>
              <FooterLink as={Link} to="/api-docs">API Documentation</FooterLink>
              <FooterLink as={Link} to="/success-stories">Success Stories</FooterLink>
            </FooterLinkGroup>
            
            <FooterLinkGroup>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink as={Link} to="/about">About Us</FooterLink>
              <FooterLink as={Link} to="/careers">Careers</FooterLink>
              <FooterLink as={Link} to="/press">Press</FooterLink>
              <FooterLink as={Link} to="/contact">Contact</FooterLink>
            </FooterLinkGroup>
          </FooterLinks>
        </FooterGrid>
        
        <FooterBottom>
          <FooterCopyright>
            © {currentYear} TrueFans CONNECT™. All rights reserved.
          </FooterCopyright>
          <FooterLegal>
            <LegalLink as={Link} to="/terms">Terms of Service</LegalLink>
            <LegalLink as={Link} to="/privacy">Privacy Policy</LegalLink>
            <LegalLink as={Link} to="/cookies">Cookie Policy</LegalLink>
          </FooterLegal>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  padding: ${({ theme }) => theme.space.xl} 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const FooterBrand = styled.div``

const FooterLogo = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FooterTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FooterSocial = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.md};
`

const SocialIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.xs};
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: white;
  opacity: 0.8;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 1;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.space.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterLinkTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FooterLink = styled.a`
  color: white;
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.space.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 1;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
    align-items: flex-start;
  }
`

const FooterCopyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
`

const FooterLegal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.md};
`

const LegalLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: white;
  opacity: 0.6;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 1;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default Footer
