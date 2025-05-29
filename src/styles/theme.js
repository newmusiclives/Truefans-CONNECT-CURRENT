export const theme = {
  colors: {
    primary: '#FFD700', // Gold
    primaryDark: '#E6C200',
    primaryLight: '#FFF0B3',
    secondary: '#FF6B6B', // Coral
    secondaryDark: '#FF5252',
    secondaryLight: '#FFADAD',
    trustworthyNavy: '#1A2B4C', // Dark blue
    trustworthyNavyLight: '#2A3B5C',
    background: '#F9F9F9',
    lightGray: '#F0F0F0',
    mediumGray: '#DDDDDD',
    darkGray: '#999999',
    darkText: '#333333',
    lightText: '#666666',
    success: '#4CAF50',
    successDark: '#3B9C3F',
    successLight: '#E8F5E9',
    warning: '#FFC107',
    warningDark: '#FFA000',
    warningLight: '#FFF8E1',
    error: '#F44336',
    errorDark: '#D32F2F',
    errorLight: '#FFEBEE',
    info: '#2196F3',
    infoDark: '#1976D2',
    infoLight: '#E3F2FD',
  },
  
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  
  space: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '4rem',    // 64px
    '3xl': '8rem',    // 128px
  },
  
  radii: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(255, 215, 0, 0.5)',
    none: 'none',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
  
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  borders: {
    none: 'none',
    thin: '1px solid',
    medium: '2px solid',
    thick: '4px solid',
  },
}
