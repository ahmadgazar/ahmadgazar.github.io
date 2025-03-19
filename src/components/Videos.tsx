import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

interface Video {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
}

const videos: Video[] = [
  {
    title: "Research Presentation 1",
    description: "A detailed presentation about the findings of our latest research paper.",
    thumbnailUrl: "/path-to-thumbnail1.jpg",
    videoUrl: "https://youtube.com/example1",
    date: "March 2024"
  },
  // Add more videos as needed
];

const Videos = () => {
  return (
    <Box
      id="videos"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        borderBottom: '1px solid #333333'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            Video Presentations
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {videos.map((video, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={video.thumbnailUrl}
                      alt={video.title}
                      sx={{
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '60px',
                          height: '60px',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: '50%',
                          backgroundImage: 'url("/play-icon.svg")',
                          backgroundSize: '30px',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {video.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {video.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {video.date}
                      </Typography>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Videos; 