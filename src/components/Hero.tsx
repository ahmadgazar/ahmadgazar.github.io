import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, School, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/images/profile.jpg"
                alt="Ahmad Gazar"
                sx={{
                  width: '100%',
                  maxWidth: 300,
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
                  filter: 'grayscale(20%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'translateY(-5px)',
                  },
                  mx: 'auto',
                  display: 'block',
                  mb: 2,
                }}
              />
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center"
                sx={{ mb: 4 }}
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
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ maxWidth: 700 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    mb: 2,
                    textAlign: 'justify',
                  }}
                >
                  I am a Post-doctoral researcher at the{' '}
                  <Link
                    href="https://autonomousrobots.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Autonomous Multi-Robot (AMR) lab
                  </Link>{' '}
                  at{' '}
                  <Link
                    href="https://www.tudelft.nl/me/over/afdelingen/cognitive-robotics-cor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    TU Delft
                  </Link>{' '}
                  working on motion planning and prediction under uncertainty for autonomous robots. I received my PhD on stochastic predictive control for legged robots from the{' '}
                  <Link
                    href="https://uni-tuebingen.de/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    University of Tübingen
                  </Link>{' '}
                  , Germany advised by{' '}
                  <Link
                    href="https://engineering.nyu.edu/faculty/ludovic-righetti"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Prof. Ludovic Righetti
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://andreadelprete.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Prof. Andrea Del Prete
                  </Link>{' '}
                  . During my PhD, I was affiliated with the{' '}
                  <Link
                    href="https://is.mpg.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Max-Planck Institute for Intelligent Systems (MPI-IS)
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://www.machinesinmotion.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Machines in Motion Laboratory
                  </Link>{' '}
                  at{' '}
                  New York University (NYU)
                  .
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    mb: 2,
                    textAlign: 'justify',
                  }}
                >
                  Prior to my PhD, I received my master's in AI and Robotics from{' '}
                  <Link
                    href="https://www.uniroma1.it/en/pagina-strutturale/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    La Sapienza University
                  </Link>{' '}
                  in Rome and worked as a research fellow at the{' '}
                  <Link
                    href="https://ami.iit.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Italian Institute of Technology (IIT)
                  </Link>{' '}
                  on Whole-Body Task-Space Inverse Dynamics with force feedback on the humanoid robot iCub advised by{' '}
                  <Link
                    href="https://www.iit.it/people/daniele-pucci"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'secondary.main' }}
                  >
                    Dr. Daniele Pucci
                  </Link>{' '}
                  .
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    textAlign: 'justify',
                  }}
                >
                  My research interests and expertise are in trajectory optimization, model predictive control, and state estimation of legged robots. Currently, I am studying problems that fall into the category of Adaptive Control/Reinforcement learning for optimal decision making under uncertainty for multi-robot autonomous systems.
                </Typography>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 