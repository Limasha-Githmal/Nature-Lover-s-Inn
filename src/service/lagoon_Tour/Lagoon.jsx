import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Button,
    Stack,
    useMediaQuery,
    Link,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

const images = [
    { id: 1, src: 'src/assets/lagoon/boat-ride1.jpg', alt: 'Boat Ride on Lagoon' },
    { id: 2, src: 'src/assets/lagoon/bird-watching1.jpg', alt: 'Bird Watching' },
    { id: 3, src: 'src/assets/lagoon/lagoon-view.jpg', alt: 'Scenic Lagoon View' },
];

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '30px',
    padding: '10px 25px',
    textTransform: 'none',
    fontWeight: 600,
    boxShadow: theme.shadows[3],
    '&:hover': {
        boxShadow: theme.shadows[6],
    },
}));

const Lagoon = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant={isSm ? 'h4' : 'h3'} fontWeight={700} gutterBottom align="center">
                Escape into nature at the breathtaking Kalametiya Bird Lagoon! 🌊
            </Typography>

            <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ maxWidth: 800, mx: 'auto', mb: 4, whiteSpace: 'pre-line' }}
            >
                {`Join us for an unforgettable Boat Ride & Bird Watching experience amidst the serene beauty of the lagoon. Spot native and migratory birds, soak in the tranquility, and enjoy:

✔️ Binoculars for birdwatching
✔️ Life Jackets for safety
✔️ Refreshments (Chips, Fruits, and Water Bottles)

📍 Location: Kalametiya Bird Sanctuary
💰 30$ per person per ride (2-3 hours | Max 4 people)

You too can now travel by boat in a bird sanctuary while enjoying the beauty of the environment 🦩🍃

We will take you to the Kalamatiya Bird Sanctuary through the Kalamatiya Lagoon 👀🕊

We can see more than 120+ species of local and foreign birds in the Kalametiya Bird Sanctuary 🦜

This is an Eco-tourism program.

This is a beautiful trip of between 2 and 3 hours.

1) We will take you on our boat. (We will provide life jackets). We will not use motor boats, because we are going inside a bird sanctuary.
2) We will give you a simple description of the birds you will see.
3) We will provide you with water, some chips, and a fruit for the trip.
4) We will provide you with binoculars to watch the birds and two large umbrellas if the sun is too strong.`}
            </Typography>

            <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
                {images.map(({ id, src, alt }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={src}
                                alt={alt}
                                sx={{ objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <StyledButton
                    variant="contained"
                    color="success"
                    startIcon={<WhatsAppIcon />}
                    component={Link}
                    href="https://wa.me/yourWhatsAppNumber" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener"
                >
                    WhatsApp
                </StyledButton>

                <StyledButton
                    variant="outlined"
                    color="primary"
                    startIcon={<EmailIcon />}
                    component={Link}
                    href="mailto:youremail@example.com" // Replace with your Gmail
                    target="_blank"
                    rel="noopener"
                >
                    Gmail
                </StyledButton>

                <StyledButton
                    variant="contained"
                    color="primary"
                    startIcon={<DirectionsBoatIcon />}
                    onClick={() => alert('Booking functionality coming soon!')}
                >
                    Book Tour
                </StyledButton>
            </Stack>
        </Container>
    );
};

export default Lagoon;
