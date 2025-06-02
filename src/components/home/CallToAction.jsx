import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <CallToActionContent>
        <CallToActionTitle>Ready to Transform Your Music Career?</CallToActionTitle>
        <CallToActionText>
          Join thousands of independent artists who are taking control of their careers and building sustainable income streams with TrueFans CONNECT™.
        </CallToActionText>
        <CallToActionButtons>
          <PrimaryButton as={Link} to="/artist-signup">Join as an Artist</PrimaryButton>
          <SecondaryButton as={Link} to="/venue-signup">Partner as a Venue</SecondaryButton>
        </CallToActionButtons>
      </CallToActionContent>
      
      <CallToActionImage src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg" alt="Artist performing" />
    </CallToActionContainer>
  )
}

const CallToActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const CallToActionContent = styled.div`
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space.xl};
  }
`

const CallToActionTitle = styled.h2`
  font-size: clamp(1.875rem, 3vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.2;
`

const CallToActionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`

const CallToActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.sm};
  }
`

const PrimaryButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const SecondaryButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const CallToActionImage = styled.img`
  flex: 1;
  max-width: 500px;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export default CallToAction
