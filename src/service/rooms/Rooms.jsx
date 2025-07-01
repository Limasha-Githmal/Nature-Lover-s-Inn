import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '20px',
    boxShadow: theme.shadows[4],
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

// Your images array
const images = [
    { id: 1, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 2, src: 'src/assets/gallery/2.jpg' },
    { id: 3, src: 'src/assets/gallery/3.jpg' },
    { id: 4, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 5, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 6, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 7, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 8, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 9, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 10, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 11, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 12, src: 'src/assets/gallery/1.jpg.jpg' },
];

const Rooms = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Typography variant="h4" align="center" gutterBottom fontWeight={600}>
                Comfortable Rooms by Kalametiya Lagoon
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                Experience serenity near Kalametiya Bird Sanctuary and Beach. Enjoy bird watching tours, cooking classes,
                and traditional Sri Lankan cuisine.
            </Typography>

            <Grid container spacing={4}>
                {images.map(({ id, src }) => (
                    <Grid item key={id} xs={12} sm={6} md={4}>
                        <StyledCard>
                            <CardMedia
                                component="img"
                                height="200"
                                image={src}
                                alt={`Room Image ${id}`}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Kingfisher Nest – A/C & Hot Water
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Welcome to Kingfisher Nest. Enjoy a king-size bed, air conditioning, hot water, and a kettle with tea and sugar. We also offer complimentary breakfast for all our guests.
                                    Relax in comfort after a day of exploring Kalametiya Lagoon.
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                                    $35 / Night (with Breakfast)
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" fullWidth>
                                    Book Now
                                </Button>
                            </CardActions>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    Other Experiences
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Join our lagoon bird watching tours and Sri Lankan cooking classes to make your stay unforgettable.
                </Typography>
            </Box>
        </Container>
    );
};

export default Rooms;
