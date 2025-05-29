import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    // Optionally reload the page or navigate to home
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorContainer>
          <ErrorContent>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>Something went wrong</ErrorTitle>
            <ErrorMessage>
              We're sorry, but an unexpected error has occurred. Our team has been notified.
            </ErrorMessage>
            <ErrorActions>
              <ResetButton onClick={this.handleReset}>
                Return to Home Page
              </ResetButton>
            </ErrorActions>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <ErrorDetails>
                <ErrorDetailsTitle>Error Details:</ErrorDetailsTitle>
                <ErrorDetailsText>{this.state.error.toString()}</ErrorDetailsText>
                <ErrorDetailsStack>
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </ErrorDetailsStack>
              </ErrorDetails>
            )}
          </ErrorContent>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.background};
`

const ErrorContent = styled.div`
  max-width: 600px;
  padding: ${({ theme }) => theme.space.xl};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
`

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ErrorActions = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ResetButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const ErrorDetails = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: left;
  overflow: auto;
`

const ErrorDetailsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ErrorDetailsText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-family: monospace;
`

const ErrorDetailsStack = styled.pre`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
  white-space: pre-wrap;
  font-family: monospace;
`

export default ErrorBoundary
