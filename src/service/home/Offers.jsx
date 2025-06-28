import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';

export default function Offers() {
    return (
        <Box
            sx={{
                minHeight: '100%',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    maxWidth: 1000,
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: 6,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >
                <Grid container>
                    {/* Image Section */}
                    <Grid item xs={12} md={5}>
                        <CardMedia
                            component="img"
                            image="https://via.placeholder.com/600x400?text=Offer+Image"
                            alt="Offer"
                            sx={{
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>

                    {/* Description Section */}
                    <Grid item xs={12} md={7}>
                        <CardContent sx={{ padding: { xs: 3, md: 4 } }}>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}
                            >
                                Offers
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Lagoon Tour Package – $50
                            </Typography>

                            <Typography sx={{ whiteSpace: 'pre-line', mb: 3, color: '#555' }}>
                                In this offer, there are:
                                {'\n'}• King-size bedroom
                                {'\n'}• Air conditioning (A/C)
                                {'\n'}• Hot water with breakfast (1 night)
                                {'\n'}• Guided lagoon tour
                            </Typography>

                            <Button variant="contained"
                                    color="success"
                                    sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        padding: '8px 20px'
                                    }}>
                                More Offers
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}
