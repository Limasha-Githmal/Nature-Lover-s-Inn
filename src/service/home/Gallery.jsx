import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';

// Sample images (replace with your real URLs or local paths)
const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://via.placeholder.com/300x200?text=Image+${i + 1}`,
}));

export default function Gallery() {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#f9f9f9', minHeight: '100%' }}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
            >
                Gallery
            </Typography>

            <Grid container spacing={3}>
                {images.map((image) => (
                    <Grid
                        item
                        key={image.id}
                        xs={12}
                        sm={6}
                        md={3} // 4 columns on medium and up
                    >
                        <Card
                            sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={image.src}
                                alt={`Gallery ${image.id + 1}`}
                                sx={{ height: 200, objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Button variant="contained"
                        color="success"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            padding: '8px 20px'
                        }}>
                    More
                </Button>
            </Box>
        </Box>
    );
}
