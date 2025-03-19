import { createTheme, ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#FFFFFF' : '#2D3748',
      light: mode === 'dark' ? '#FFFFFF' : '#4A5568',
      dark: mode === 'dark' ? '#E0E0E0' : '#1A202C',
    },
    secondary: {
      main: mode === 'dark' ? '#64FFDA' : '#2B6CB0',
      light: mode === 'dark' ? '#9EFFEB' : '#4299E1',
      dark: mode === 'dark' ? '#14B8A6' : '#2C5282',
    },
    background: {
      default: mode === 'dark' ? '#0A192F' : '#F7FAFC',
      paper: mode === 'dark' ? '#112240' : '#FFFFFF',
    },
    text: {
      primary: mode === 'dark' ? '#CCD6F6' : '#2D3748',
      secondary: mode === 'dark' ? '#8892B0' : '#718096',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "SF Mono", monospace',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '0.9rem',
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: mode === 'dark' ? '#112240' : '#FFFFFF',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: mode === 'dark' ? '#64FFDA' : '#2B6CB0',
          textDecoration: 'none',
          '&:hover': {
            color: mode === 'dark' ? '#9EFFEB' : '#4299E1',
          },
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode)); 