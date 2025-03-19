import { Box, Container, Grid, Link, Paper, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Article, VideoLibrary } from '@mui/icons-material';
import { useState, useRef } from 'react';

interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  paperUrl: string;
  videoPath?: string;
}

const publications: Publication[] = [
  {
    title: "Multi-contact Stochastic Predictive Control for Legged Robots with Contact Locations Uncertainty",
    authors: "A. Gazar, M. Khadiv, A. Del Prete, L. Righetti",
    conference: "arXiv preprint arXiv:2309.04469",
    year: "2023",
    paperUrl: "https://arxiv.org/abs/2309.04469",
    videoPath: "/videos/SNMPC.m4v",
  },
  {
    title: "Nonlinear Stochastic Trajectory Optimization for Centroidal Momentum Motion Generation of Legged Robots",
    authors: "A. Gazar, M. Khadiv, S. Kleff, A. Del Prete, L. Righetti",
    conference: "Robotics Research. ISRR 2022",
    year: "2022",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-25555-7_29",
    videoPath: "/videos/ISRR_submission_video.MOV",
  },
  {
    title: "Stochastic and Robust MPC for Bipedal Locomotions: A comparative result on robustness and performance",
    authors: "A. Gazar, M. Khadiv, A. Del Prete, L. Righetti",
    conference: "IEEE-RAS 20th International Conference on Humanoid Robots (Humanoids)",
    year: "2021",
    paperUrl: "https://ieeexplore.ieee.org/document/9555783",
    videoPath: "/videos/humanoids.mov",
  },
  {
    title: "Jerk Control of Floating Base Systems with Contact-Stable Parameterised Force Feedback",
    authors: "A. Gazar, G. Nava, F. J. A. Chavez, D. Pucci",
    conference: "IEEE Transactions on Robotics",
    year: "2021",
    paperUrl: "https://ieeexplore.ieee.org/document/9237133",
    videoPath: "/videos/TRO2019_jerkControl.mp4",
  },
  {
    title: "On the Use of Torque Measurement in Centroidal State Estimation",
    authors: "S. Khorshidi, A. Gazar, N. Rotella, M. Naveau, L. Righetti, M. Bennewitz, M. Khadiv",
    conference: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: "2023",
    paperUrl: "https://ieeexplore.ieee.org/document/10160823"
  }
];

const Publications = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoName = `${publications[index].year}_${file.name}`;
      // Here you would typically handle the file upload to your server
      // For now, we'll just update the local state
      const publications_copy = [...publications];
      publications_copy[index].videoPath = `/videos/${videoName}`;
      // You would need to implement the actual file upload logic here
      console.log(`Video ${videoName} selected for publication ${index}`);
    }
  };

  return (
    <Box
      id="publications"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Publications
          </Typography>

          <Grid container spacing={3}>
            {publications.map((pub, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: 'background.default',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            color: 'text.primary',
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
                        >
                          {pub.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 1,
                            fontSize: '0.95rem',
                          }}
                        >
                          {pub.authors}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 2,
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                          }}
                        >
                          {pub.conference}, {pub.year}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                          <Link
                            href={pub.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 1,
                              color: 'secondary.main',
                              textDecoration: 'none',
                              fontSize: '0.9rem',
                              '&:hover': {
                                color: 'secondary.light',
                              },
                            }}
                          >
                            <Article sx={{ fontSize: '1.1rem' }} />
                            View Paper
                          </Link>

                          {pub.videoPath ? (
                            <Button
                              startIcon={<VideoLibrary />}
                              onClick={() => setSelectedVideo(pub.videoPath || null)}
                              sx={{
                                color: 'secondary.main',
                                fontSize: '0.9rem',
                                '&:hover': {
                                  backgroundColor: 'transparent',
                                  color: 'secondary.light',
                                },
                              }}
                            >
                              Watch Video
                            </Button>
                          ) : (
                            <>
                              <input
                                type="file"
                                accept="video/*"
                                style={{ display: 'none' }}
                                ref={(el) => {
                                  if (fileInputRefs.current) {
                                    fileInputRefs.current[index] = el;
                                  }
                                }}
                                onChange={(e) => handleVideoUpload(e, index)}
                              />
                              <Button
                                startIcon={<VideoLibrary />}
                                onClick={() => fileInputRefs.current[index]?.click()}
                                sx={{
                                  color: 'text.secondary',
                                  fontSize: '0.9rem',
                                  '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'secondary.light',
                                  },
                                }}
                              >
                                Upload Video
                              </Button>
                            </>
                          )}
                        </Box>

                        {selectedVideo === pub.videoPath && pub.videoPath && (
                          <Box sx={{ mt: 2, width: '100%', maxWidth: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                            <video
                              controls
                              width="100%"
                              style={{ borderRadius: '8px' }}
                              preload="metadata"
                              onLoadedMetadata={(e) => {
                                if (pub.videoPath === "/videos/TRO2019_jerkControl.mp4") {
                                  (e.target as HTMLVideoElement).currentTime = 40;
                                }
                              }}
                            >
                              <source src={pub.videoPath} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </Box>
                        )}
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Publications;