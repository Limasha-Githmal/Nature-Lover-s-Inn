import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const App = () => {
    const tourData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
            title: 'Lagoon Tour',
            description: 'Bird watching in Sri Lanka',
        },
        {
            id: 2,
            image: 'https://cdn.prod.website-files.com/661d42779f9c94a059f533cf/6717b0e0300215278d929e60_the-home-hotel-zurich-rooms-overview-hero-p-1600.jpg',
            title: 'Rooms',
            description: 'Comfortable nature views',
        },
        {
            id: 3,
            image: 'https://www.omnihotels.com/-/media/images/hotels/daldtn/restaurants/texas-spice/daldtn_texasspice_kathytran_img.jpg?h=660&iar=0&w=1170',
            title: 'Restaurant',
            description: 'Local ingredients meals',
        },
        {
            id: 4,
            image: 'https://www.falcortravels.com/wp-content/uploads/2018/11/professional_cooking_courses_for_groups_in_italy-1500x900.jpg',
            title: 'Cooking Classes',
            description: 'Learn local recipes',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'Jungle Walking Tour',
            description: 'Explore Kalametiya’s wild beauty',
        },
    ];

    return (
        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
            p: { xs: 2, sm: 3, lg: 4 },
            fontFamily: 'Inter, sans-serif',
            color: 'text.primary'
        }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{
                    fontWeight: '600',
                    mb: 3
                }}>
                    About
                </Typography>
            </Box>

            <Grid container spacing={3} sx={{
                justifyContent: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}>
                {tourData.map((tour) => (
                    <Grid item key={tour.id} xs={12} sm={6} md={3}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 4
                            }
                        }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={tour.image}
                                alt={tour.title}
                                sx={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    aspectRatio: '4/3'
                                }}
                            />
                            <CardContent sx={{
                                p: 2,
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Typography variant="h6" component="h3" sx={{
                                    fontWeight: '600',
                                    mb: 1,
                                    textAlign: 'center',
                                    fontSize: '1.1rem'
                                }}>
                                    {tour.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{
                                    textAlign: 'center',
                                    fontSize: '0.9rem'
                                }}>
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
