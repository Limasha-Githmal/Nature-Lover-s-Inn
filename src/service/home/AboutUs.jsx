import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const App = () => {

    const tourData = [
        {
            id: 1,
            image: '',
            title: 'Room',
            description: 'One of best place to watching water birds',
        },
        {
            id: 2,
            image: '',
            title: 'Paddle Boats Safari',
            description: 'Zero CO2 emissions carbon neutral event',
        },
        {
            id: 3,
            image: '',
            title: 'Lagoon',
            description: 'Climbing rocks middle in the lagoon',
        },
    ];

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.paper',
            p: { xs: 2, sm: 3, lg: 4 },
            fontFamily: 'Inter, sans-serif',
            color: 'text.primary'
        }}>
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="subtitle1" sx={{
                    fontWeight: 'medium',
                    color: 'text.secondary',
                    mb: 1
                }}>
                    The best value tours in Kalametiya Bird Sanctuary
                </Typography>
                <Typography variant="h3" sx={{
                    fontWeight: 'semibold',
                    lineHeight: 'tight'
                }}>
                    Your Local Experts in Sri Lanka
                </Typography>
            </Box>

            {/* Cards Section */}
            <Grid container spacing={4} sx={{
                maxWidth: '1200px',
                mx: 'auto',
                justifyContent: 'center'
            }}>
                {tourData.map((tour) => (
                    <Grid item key={tour.id} xs={12} sm={6} lg={4}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}>
                            {/* Card Media (Image) */}
                            <CardMedia
                                component="img"
                                height="200"
                                image={tour.image}
                                alt={tour.title}
                                sx={{
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px'
                                }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found';
                                }}
                            />
                            {/* Card Content */}
                            <CardContent sx={{
                                textAlign: 'center',
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Typography variant="h5" component="h3" sx={{
                                    fontWeight: 'semibold',
                                    mb: 1
                                }}>
                                    {tour.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {tour.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default App;