import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Box,
    Divider,
    Paper,
    useTheme
} from '@mui/material';
import {
    KingBed,
    AcUnit,
    LocalBar,
    Restaurant,
    Water,
    NaturePeople,
    Class,
    Star,
    BeachAccess,
    Wifi,
    LocalDining,
    Bathtub,
    Tv,
    CoffeeMaker
} from '@mui/icons-material';

const Rooms = () => {
    const theme = useTheme();

    const rooms = [
        {
            title: "Kingfisher Deluxe Room",
            description: "Experience relaxing comfort in our Deluxe Room, equipped with a king-size bed, air conditioning, hot water, and a hot kettle with tea and sugar bags. Ideal for guests who value both convenience and a cozy stay near the serene Kalametiya Bird Lagoon.",
            price: "$35 per night",
            features: [
                "Air Conditioning",
                "24/7 Hot Water",
                "King Size Bed (6'6″ x 6'3″)",
                "Basic Tea/Coffee Facilities",
                "Free WiFi",
                "Spacious Clothes Rack",
                "Housekeeping",
                "Friendly On-Site Assistance",
                "Flexible Check-in/Check-out Times (on request)"
            ],
            image: "https://cdn.prod.website-files.com/661d42779f9c94a059f533cf/6717b0e0300215278d929e60_the-home-hotel-zurich-rooms-overview-hero-p-1600.jpg",
            highlight: true
        },
        {
            title: "Standard Room",
            description: "Our comfortable Standard Room provides all the basic amenities you need for a relaxing stay. Enjoy a clean and peaceful space with warm Sri Lankan hospitality at an affordable rate.",
            price: "$25 per night",
            features: [
                "Ceiling Fan Cooling",
                "King Size Bed (6'6″ x 6'3″)",
                "Private Attached Bathroom",
                "Spacious Clothes Rack",
                "Basic Tea/Coffee Facilities",
                "Free WiFi",
                "Housekeeping",
                "Friendly On-Site Assistance",
                "Flexible Check-in/Check-out Times (on request)"
            ],
            image: "https://cdn.prod.website-files.com/661d42779f9c94a059f533cf/6717b0e0300215278d929e60_the-home-hotel-zurich-rooms-overview-hero-p-1600.jpg",
            highlight: false
        }
    ];

    const amenities = [
        { icon: <AcUnit fontSize="large" />, text: "A/C Rooms Available" },
        { icon: <Bathtub fontSize="large" />, text: "Hot Water Showers" },
        { icon: <KingBed fontSize="large" />, text: "King Size Beds" },
        { icon: <CoffeeMaker fontSize="large" />, text: "Tea/Coffee Facilities" },
        { icon: <Wifi fontSize="large" />, text: "Free WiFi" },
        { icon: <Restaurant fontSize="large" />, text: "On-Site Restaurant" },
        { icon: <NaturePeople fontSize="large" />, text: "Bird Watching Tours" },
        { icon: <LocalDining fontSize="large" />, text: "Cooking Classes" },
        { icon: <Tv fontSize="large" />, text: "Entertainment" },
        { icon: <LocalBar fontSize="large" />, text: "Refreshments" }
    ];

    return (
        <Container maxWidth="lg" sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Header Section */}
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                align="center"
                sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 5,
                    mt: {
                        xs: 6,  // mobile
                        sm: 8,  // tablets
                        md: 10, // desktop
                    },
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '3rem',
                    },
                }}
            >
                Our Accommodations
            </Typography>



            <Typography variant="subtitle1" component="h2" gutterBottom align="center" sx={{
                mb: 6,
                maxWidth: '700px',
                color: 'text.secondary',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem'
                }
            }}>
                Experience authentic Sri Lankan hospitality in our comfortable rooms, just minutes from Kalametiya Bird Lagoon and peaceful beaches.
            </Typography>

            {/* Room Cards Section */}
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
                {rooms.map((room, index) => (
                    <Grid item xs={12} md={5} key={index}>
                        <Paper elevation={room.highlight ? 8 : 4} sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            border: `2px solid ${theme.palette.primary.main}`,
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '16px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: theme.shadows[room.highlight ? 12 : 8]
                            }
                        }}>
                            {room.highlight && (
                                <Box sx={{
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    px: 2,
                                    py: 1,
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    zIndex: 1,
                                    boxShadow: theme.shadows[2]
                                }}>
                                    <Star sx={{ mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>
                                        MOST POPULAR
                                    </Typography>
                                </Box>
                            )}

                            <CardMedia
                                component="img"
                                height="300"
                                image={room.image}
                                alt={room.title}
                                sx={{
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '16px',
                                    borderTopRightRadius: '16px'
                                }}
                            />

                            <CardContent sx={{
                                flexGrow: 1,
                                px: 4,
                                pt: 4,
                                pb: 2
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2
                                }}>
                                    <Typography variant="h5" component="h3" sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main' ,
                                        fontSize: '1.5rem'
                                    }}>
                                        {room.title}
                                    </Typography>

                                    <Typography variant="h6" component="div" sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main',
                                        fontSize: '1.3rem'
                                    }}>
                                        {room.price}
                                    </Typography>
                                </Box>

                                <Typography variant="body1" color="text.secondary" sx={{
                                    mb: 3,
                                    lineHeight: 1.6,
                                    fontSize: '1rem'
                                }}>
                                    {room.description}
                                </Typography>

                                <Divider sx={{ my: 3, borderColor: theme.palette.divider }} />

                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" component="h4" sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        color: 'text.secondary',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontSize: '0.8rem'
                                    }}>
                                        Room Features
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {room.features.map((feature, i) => (
                                            <Grid item xs={12} sm={6} key={i}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start'
                                                }}>
                                                    <Box sx={{
                                                        minWidth: '24px',
                                                        color: 'primary.main',
                                                        mt: '2px',
                                                        mr: 1.5
                                                    }}>
                                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="3" cy="3" r="3" fill="currentColor"/>
                                                        </svg>
                                                    </Box>
                                                    <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </CardContent>

                            <CardActions sx={{
                                justifyContent: 'center',
                                pb: 4,
                                px: 4
                            }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="success"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </CardActions>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Amenities Section */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 8
            }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: 6,
                    color: 'text.primary',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1.8rem'
                    }
                }}>
                    Hotel Amenities & Services
                </Typography>

                <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1000px' }}>
                    {amenities.map((amenity, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 2,
                                textAlign: 'center',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}>
                                <Box sx={{
                                    color: 'primary.main',
                                    mb: 2,
                                    fontSize: '2.8rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    bgcolor: theme.palette.mode === 'light' ? '#f5f5f5' : '#1e1e1e'
                                }}>
                                    {amenity.icon}
                                </Box>
                                <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1rem' }}>
                                    {amenity.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Experience Kalametiya Section */}
            <Box sx={{
                backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#1a1a1a',
                p: { xs: 3, md: 6 },
                borderRadius: '16px',
                width: '100%',
                maxWidth: '1000px',
                mb: 8,
                border: `1px solid ${theme.palette.divider}`,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: theme.shadows[2],
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '100%',
                    bgcolor: 'primary.main'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4
                }}>
                    <BeachAccess sx={{
                        fontSize: '3rem',
                        color: 'primary.main',
                        mr: 3,
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '2rem',
                            mr: 2
                        }
                    }} />
                    <Typography variant="h4" component="h3" sx={{
                        fontWeight: 'bold',
                        color: 'primary.main',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '1.5rem'
                        }
                    }}>
                        Experience Kalametiya
                    </Typography>
                </Box>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 3,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1rem'
                    }
                }}>
                    Nestled just 200 meters from the breathtaking Kalametiya Bird Lagoon, our hotel offers unparalleled access to one of Sri Lanka's most important wetland ecosystems. Join our expert-guided tours to observe over 150 bird species, including migratory flocks that visit seasonally. The nearby pristine beach is perfect for sunrise walks and peaceful moments by the Indian Ocean.
                </Typography>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 3,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1rem'
                    }
                }}>
                    Immerse yourself in authentic Sri Lankan culture with our hands-on cooking classes, specially designed for international visitors. Learn to prepare traditional dishes like hoppers, kottu roti, and coconut sambol using fresh local ingredients. Our chef will guide you through the flavors and techniques that make Sri Lankan cuisine unique.
                </Typography>

                <Typography variant="body1" sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 4,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1rem'
                    }
                }}>
                    After your adventures, return to our tranquil property featuring a Sri Lankan-style restaurant serving both traditional and contemporary dishes. Enjoy your meals in our open-air dining area surrounded by tropical greenery, or relax in our comfortable rooms designed with your comfort in mind.
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        endIcon={<NaturePeople />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Bird Watching Tours
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        endIcon={<LocalDining />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Cooking Classes
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Rooms;