import { AppBar, Box, Container, IconButton, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger, Switch, FormControlLabel } from '@mui/material';
import { GitHub, LinkedIn, School, LightMode, DarkMode } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [value, setValue] = useState(0);
  const { mode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    scrollToSection(newValue === 0 ? 'publications' : 'contact');
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={trigger ? 1 : 0}
      sx={{ 
        backgroundColor: trigger ? 'background.paper' : 'transparent',
        transition: 'background-color 0.3s ease',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container 
        maxWidth="lg"
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: 'text.primary',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              letterSpacing: '0.02em',
            }}
          >
            Ahmad Gazar
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Tabs 
              value={value} 
              onChange={handleChange}
              sx={{
                '& .MuiTab-root': {
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                  minWidth: 100,
                  '&.Mui-selected': {
                    color: 'secondary.main',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: 'secondary.main',
                },
              }}
            >
              <Tab label="Publications" />
              <Tab label="Contact" />
            </Tabs>

            <FormControlLabel
              control={
                <Switch
                  checked={mode === 'dark'}
                  onChange={toggleTheme}
                  sx={{
                    '& .MuiSwitch-thumb': {
                      backgroundColor: mode === 'dark' ? '#64FFDA' : '#0A192F',
                    },
                    '& .MuiSwitch-track': {
                      backgroundColor: mode === 'dark' ? '#112240' : '#F5F5F5',
                    },
                  }}
                />
              }
              label={
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                  {mode === 'dark' ? <DarkMode /> : <LightMode />}
                </IconButton>
              }
              sx={{ m: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <IconButton
                href="https://github.com/ahmadgazar"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
              >
                <GitHub />
              </IconButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconButton
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
              >
                <LinkedIn />
              </IconButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <IconButton
                href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
              >
                <School />
              </IconButton>
            </motion.div>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
