import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Button from '../components/ui/Button'

const Login = ({ onLogin, onLoginSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    // For demo purposes, hardcode successful logins
    // In a real app, this would be an API call
    if (email === 'admin@example.com' && password === 'admin123') {
      // Admin login
      sessionStorage.setItem('isAdminLoggedIn', 'true')
      
      if (onLoginSuccess) {
        onLoginSuccess()
      } else {
        navigate('/admin')
      }
      
      if (onLogin) {
        onLogin({ email, role: 'admin' })
      }
    } else if (email === 'sarah@example.com' && password === 'password') {
      // Artist login
      if (onLogin) {
        onLogin({ email, role: 'artist' })
      }
      navigate('/artist-portal')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <LoginCard>
          <LoginHeader>
            <LoginTitle>Log in to your account</LoginTitle>
            <LoginSubtitle>Welcome back! Please enter your details.</LoginSubtitle>
          </LoginHeader>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <LoginForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabelContainer>
                <FormLabel htmlFor="password">Password</FormLabel>
                <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>
              </FormLabelContainer>
              <FormInput 
                type="password" 
                id="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            
            <FormGroup>
              <RememberMeContainer>
                <CheckboxContainer>
                  <Checkbox 
                    type="checkbox" 
                    id="remember" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <CheckboxLabel htmlFor="remember">Remember me</CheckboxLabel>
                </CheckboxContainer>
              </RememberMeContainer>
            </FormGroup>
            
            <LoginButton type="submit">Log in</LoginButton>
            
            <DemoCredentials>
              <DemoTitle>Demo Credentials</DemoTitle>
              <DemoText>Artist Login: sarah@example.com / password</DemoText>
              <DemoText>Admin Login: admin@example.com / admin123</DemoText>
            </DemoCredentials>
          </LoginForm>
          
          <SignupPrompt>
            Don't have an account? <SignupLink to="/artist-signup">Sign up</SignupLink>
          </SignupPrompt>
        </LoginCard>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const LoginCard = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const LoginTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const LoginSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const FormLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ForgotPassword = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const FormInput = styled.input`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${({ theme }) => theme.colors.primary};
`

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const LoginButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const DemoCredentials = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
`

const DemoTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const DemoText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SignupPrompt = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space.xl};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const SignupLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export default Login
