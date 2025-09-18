import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
    Container
} from '@mui/material';

const services = [
    {
        icon: '🦜',
        title: 'Bird Watching & Lagoon Tours',
        description:
            'Discover the beauty of Kalametiya Bird Sanctuary with guided bird watching tours, peaceful boat rides, and nature walks through mangroves and lagoons. Perfect for wildlife lovers and nature seekers.',
    },
    {
        icon: '🍽️',
        title: 'Delicious Sri Lankan Food',
        description:
            'Enjoy tasty, home-cooked Sri Lankan meals at our restaurant. We use fresh local ingredients to give you an authentic island flavor.',
    },
    {
        icon: '👨‍🍳',
        title: 'Traditional Cooking Classes',
        description:
            'Learn to prepare famous Sri Lankan dishes with our hands-on cooking experience – fun, educational, and unforgettable for visitors.',
    },
    {
        icon: '🛏️',
        title: 'Comfortable Rooms with A/C & Hot Water',
        description:
            'Stay in clean, air-conditioned rooms with modern bathrooms and hot water – ideal for relaxing after a day of adventure.',
    },
    {
        icon: '🌿',
        title: 'Jungle Walking Tour',
        description:
            'Explore the wild beauty of Kalametiya on a guided jungle walk. Visit the Nine Stupas Temple, hike to Kema Rock viewpoint, see buffalo fields, and spot monkeys, peafowls, and 120+ bird species. Includes local snacks, herbal drinks, and water bottles.',
    },
];

export default function Services() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#000',
                        mb: 5,
                        fontSize: { xs: '28px', sm: '32px', md: '36px' },
                    }}
                >
                    Our Services – Experience Nature, Culture & Comfort in Kalametiya
                </Typography>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {services.map((service, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            key={index}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    maxWidth: 400,
                                    p: 2,
                                    borderRadius: 4,
                                    boxShadow: 3,
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '20px',
                                            color: '#000',
                                        }}
                                    >
                                        <Box component="span" sx={{ fontSize: '28px', mr: 1 }}>
                                            {service.icon}
                                        </Box>
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: '#333', fontSize: '16px', lineHeight: 1.6 }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
