import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  return (
    <SpinnerWrapper>
      <Spinner size={size} color={color} />
    </SpinnerWrapper>
  )
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space.md};
`

const Spinner = styled.div`
  width: ${({ size, theme }) => 
    size === 'sm' ? '1.5rem' : 
    size === 'lg' ? '3rem' : 
    '2rem'
  };
  height: ${({ size, theme }) => 
    size === 'sm' ? '1.5rem' : 
    size === 'lg' ? '3rem' : 
    '2rem'
  };
  border: ${({ size }) => 
    size === 'sm' ? '2px' : 
    size === 'lg' ? '4px' : 
    '3px'
  } solid rgba(0, 0, 0, 0.1);
  border-top-color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export default LoadingSpinner
