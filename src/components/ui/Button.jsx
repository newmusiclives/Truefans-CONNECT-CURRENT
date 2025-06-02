import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme, size }) => 
    size === 'sm' ? `${theme.space.xs} ${theme.space.sm}` :
    size === 'lg' ? `${theme.space.md} ${theme.space.xl}` :
    `${theme.space.sm} ${theme.space.md}`
  };
  font-size: ${({ theme, size }) => 
    size === 'sm' ? theme.fontSizes.sm :
    size === 'lg' ? theme.fontSizes.lg :
    theme.fontSizes.md
  };
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  onClick,
  className,
  as,
  to,
  ...props 
}) => {
  return (
    <StyledButton
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      as={as}
      to={to}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
