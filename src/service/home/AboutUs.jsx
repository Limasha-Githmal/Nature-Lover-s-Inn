import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const App = () => {

    const tourData = [
        {
            id: 1,
            image: '',
            title: 'Lagoon Tour',
            description: 'One of best  lagoon tour to watching birds',
        },
        {
            id: 2,
            image: '',
            title: 'Rooms',
            description: 'Peaceful, and incredibly comfortable room',
        },
        {
            id: 3,
            image: '',
            title: 'Restaurant',
            description: 'Fresh, flavorful meals every day',
        },
    ];

    return (
        <Box sx={{
            minHeight: '60%',
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
                    Discover nature and coastal charm at Kalametiya.
                </Typography>
                <Typography variant="h3" sx={{
                    fontWeight: 'semibold',
                    lineHeight: 'tight'
                }}>
                    Your Local Experts in Kalametiya
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