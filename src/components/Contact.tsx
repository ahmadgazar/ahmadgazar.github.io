import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, School, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4,
            }}
          >
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            For scientific collaborations, exchanging ideas, or questions about my research.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              href="mailto:a.gazar@tudelft.nl"
              size="large"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'secondary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Email sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton
              href="https://github.com/ahmadgazar"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'secondary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <GitHub sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/ahmad-gazar-13721b247/"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'secondary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <LinkedIn sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton
              href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'secondary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <School sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 