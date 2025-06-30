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
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Responsive direction
                }}
            >
                {/* Image Section */}
                <CardMedia
                    component="img"
                    image='https://www.omnihotels.com/-/media/images/hotels/daldtn/restaurants/texas-spice/daldtn_texasspice_kathytran_img.jpg?h=660&iar=0&w=1170'
                    alt="Offer"
                    sx={{
                        width: { xs: '100%', md: '45%' },
                        height: { xs: 200, md: '100%' },
                        objectFit: 'cover',
                    }}
                />

                {/* Description Section */}
                <CardContent sx={{ padding: { xs: 3, md: 4 }, flex: 1 }}>
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

                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            padding: '8px 20px',
                        }}
                    >
                        More Offers
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
