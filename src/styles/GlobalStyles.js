import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.colors.darkText};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.5;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
  
  img {
    max-width: 100%;
    height: auto;
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
`
