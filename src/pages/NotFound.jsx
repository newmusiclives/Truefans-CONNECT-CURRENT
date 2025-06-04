import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <ContentBox>
          <ErrorCode>404</ErrorCode>
          <Title>Page Not Found</Title>
          <Description>
            The page you are looking for doesn't exist or has been moved.
          </Description>
          <ButtonGroup>
            <HomeButton to="/">Back to Home</HomeButton>
            <ContactButton to="/contact">Contact Support</ContactButton>
          </ButtonGroup>
        </ContentBox>
        
        <SuggestionsSection>
          <SuggestionsTitle>You might be interested in:</SuggestionsTitle>
          <SuggestionLinks>
            <SuggestionLink to="/artist-signup">Sign up as an Artist</SuggestionLink>
            <SuggestionLink to="/venue-signup">Register your Venue</SuggestionLink>
            <SuggestionLink to="/about">Learn about TrueFans CONNECT™</SuggestionLink>
            <SuggestionLink to="/blog">Read our Blog</SuggestionLink>
          </SuggestionLinks>
        </SuggestionsSection>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentBox = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  width: 100%;
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: ${({ theme }) => theme.space.md} 0;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;
`

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const HomeButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`

const ContactButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
  }
`

const SuggestionsSection = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const SuggestionsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SuggestionLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.space.md};
`

const SuggestionLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
  }
`

export default NotFound
