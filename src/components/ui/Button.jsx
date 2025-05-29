import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme, size }) => 
    size === 'sm' ? `${theme.space.xs} ${theme.space.md}` :
    size === 'lg' ? `${theme.space.md} ${theme.space.xl}` :
    `${theme.space.sm} ${theme.space.lg}`
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
  border: none;
  
  /* Variant styles */
  background-color: ${({ theme, variant }) => 
    variant === 'secondary' ? 'transparent' :
    variant === 'outline' ? 'transparent' :
    variant === 'text' ? 'transparent' :
    theme.colors.primary
  };
  
  color: ${({ theme, variant }) => 
    variant === 'secondary' ? theme.colors.darkText :
    variant === 'outline' ? theme.colors.primary :
    variant === 'text' ? theme.colors.primary :
    theme.colors.trustworthyNavy
  };
  
  border: ${({ theme, variant }) => 
    variant === 'outline' ? `1px solid ${theme.colors.primary}` :
    variant === 'secondary' ? `1px solid ${theme.colors.mediumGray}` :
    'none'
  };
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'secondary' ? theme.colors.lightGray :
      variant === 'outline' ? `${theme.colors.primary}15` :
      variant === 'text' ? `${theme.colors.primary}15` :
      theme.colors.primaryDark
    };
    text-decoration: none;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Icon spacing */
  svg {
    margin-right: ${({ theme, iconPosition }) => 
      iconPosition === 'right' ? '0' : theme.space.sm
    };
    margin-left: ${({ theme, iconPosition }) => 
      iconPosition === 'right' ? theme.space.sm : '0'
    };
  }
`

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  iconPosition = 'left',
  ...props 
}) => {
  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      iconPosition={iconPosition}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </StyledButton>
  )
}

export default Button
