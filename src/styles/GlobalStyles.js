import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 15px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 14px;
    }
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.colors.darkText};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.5;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
  }
  
  input, textarea, select {
    font-family: inherit;
    font-size: 16px; /* Prevents zoom on focus in iOS */
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 16px; /* Maintain 16px to prevent zoom on iOS */
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Ensure main content area takes up at least the full viewport height minus header and footer */
  main {
    min-height: calc(100vh - 200px); /* Adjust based on your header/footer heights */
    padding-bottom: 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      min-height: calc(100vh - 180px);
      padding-bottom: 1.5rem;
    }
  }
  
  /* Container class for consistent page widths */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.space.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 ${({ theme }) => theme.space.md};
    }
  }
  
  /* Section spacing */
  .section {
    padding: ${({ theme }) => theme.space['2xl']} 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.space.xl} 0;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: ${({ theme }) => theme.space.lg} 0;
    }
  }
  
  /* Improve focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.darkGray};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  
  /* Fix for sticky positioning in mobile Safari */
  @supports (-webkit-touch-callout: none) {
    .sticky-column {
      position: -webkit-sticky;
    }
  }
  
  /* Mobile touch improvements */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    button, 
    a, 
    [role="button"],
    input[type="submit"],
    input[type="button"] {
      min-height: 44px; /* Minimum touch target size */
      min-width: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Improve spacing between interactive elements */
    li, 
    .clickable-item {
      margin-bottom: 0.5rem;
    }
  }
  
  /* Responsive table styles */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
  
  /* Responsive grid utilities */
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${({ theme }) => theme.space.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(6, 1fr);
      gap: ${({ theme }) => theme.space.md};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(4, 1fr);
      gap: ${({ theme }) => theme.space.sm};
    }
  }
`
