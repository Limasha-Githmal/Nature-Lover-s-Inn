import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const App = () => {
    const tourData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
            title: 'Lagoon Tour',
            description: 'One of the best lagoon tours for bird watching in Sri Lanka',
        },
        {
            id: 2,
            image: 'https://cdn.prod.website-files.com/661d42779f9c94a059f533cf/6717b0e0300215278d929e60_the-home-hotel-zurich-rooms-overview-hero-p-1600.jpg',
            title: 'Rooms',
            description: 'Peaceful, and incredibly comfortable rooms with nature views',
        },
        {
            id: 3,
            image: 'https://www.omnihotels.com/-/media/images/hotels/daldtn/restaurants/texas-spice/daldtn_texasspice_kathytran_img.jpg?h=660&iar=0&w=1170',
            title: 'Restaurant',
            description: 'Fresh, flavorful meals prepared with local ingredients daily',
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
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>

                <Typography variant="h3" sx={{
                    fontWeight: 'semibold',
                    lineHeight: 'tight'
                }}>
                   About
                </Typography>
            </Box>

            {/* Centered Single Row Grid */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                flexWrap: 'wrap',
                maxWidth: '1200px',
                mx: 'auto'
            }}>
                {tourData.map((tour) => (
                    <Card key={tour.id} sx={{
                        width: { xs: '100%', sm: '320px' },
                        flexShrink: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.03)',
                            boxShadow: 6
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={tour.image}
                            alt={tour.title}
                            sx={{
                                objectFit: 'cover',
                                width: '100%',
                                aspectRatio: '4/3'
                            }}
                        />
                        <CardContent sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            p: 3
                        }}>
                            <Typography variant="h5" component="h3" sx={{
                                fontWeight: 'semibold',
                                mb: 2,
                                textAlign: 'center'
                            }}>
                                {tour.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{
                                textAlign: 'center'
                            }}>
                                {tour.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default App;