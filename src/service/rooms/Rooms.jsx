import React from 'react';
import {
    Typography,
    Grid,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Box,
    Divider,
    Paper,
    useTheme,
    Container
} from '@mui/material';
import {
    KingBed,
    AcUnit,
    LocalBar,
    Restaurant,
    NaturePeople,
    Star,
    BeachAccess,
    Wifi,
    LocalDining,
    Bathtub,
    Tv,
    CoffeeMaker
} from '@mui/icons-material';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

/* ---------------------------------------------------------
   ✅ IMPORT ROOM IMAGES PROPERLY (Fix broken paths)
---------------------------------------------------------- */
import room1 from "../../assets/image/room_1.jpeg";

const Rooms = () => {
    const theme = useTheme();

    /* Replace "src/assets/image/room_1.jpeg" with imported room1 */
    const image1 = room1;

    const rooms = [
        {
            title: "Kingfisher Deluxe Room",
            description:
                "Experience relaxing comfort in our Deluxe Room, equipped with a king-size bed, air conditioning, hot water, and a hot kettle with tea and sugar bags. Ideal for guests who value both convenience and a cozy stay near the serene Kalametiya Bird Lagoon.",
            price: "$25 per night",
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
            image: image1,
            highlight: true
        },
        {
            title: "Painted Stork Standard Room",
            description:
                "Our comfortable Standard Room provides all the basic amenities you need for a relaxing stay. Enjoy a clean and peaceful space with warm Sri Lankan hospitality at an affordable rate.",
            price: "$17 per night",
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
            image: image1,
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
            py: 6,
            minHeight: 'calc(100vh - 200px)', // Adjust based on your header/footer heights
            display: 'flex',
            flexDirection: 'column'
        }}>

            <Helmet>
                {/* 🔹 SEO Title */}
                <title>Hotel Rooms in Kalametiya | Affordable Accommodation | Nature Lover’s Inn</title>

                {/* 🔹 Meta Description */}
                <meta
                    name="description"
                    content="Book affordable rooms near Kalametiya Bird Sanctuary. Enjoy A/C rooms, hot water, WiFi, bird watching tours & authentic Sri Lankan hospitality at Nature Lover’s Inn."
                />

                {/* 🔹 Keywords */}
                <meta
                    name="keywords"
                    content="Kalametiya hotel rooms, Nature Lovers Inn rooms, Kalametiya accommodation, Tangalle hotels, Sri Lanka eco stay, bird watching hotel"
                />

                {/* 🔹 Canonical URL */}
                <link rel="canonical" href="https://www.natureloversinn.com/rooms" />

                {/* 🔹 Open Graph (Facebook / WhatsApp / Instagram / LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Hotel Rooms in Kalametiya | Nature Lover’s Inn" />
                <meta
                    property="og:description"
                    content="Stay in comfortable, budget-friendly rooms near Kalametiya Bird Sanctuary. Perfect for bird watchers, nature lovers & families."
                />
                <meta property="og:url" content="https://www.natureloversinn.com/rooms" />
                <meta property="og:image" content="https://www.natureloversinn.com/rooms" />

                {/* 🔹 Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hotel Rooms in Kalametiya | Nature Lover’s Inn" />
                <meta
                    name="twitter:description"
                    content="Comfortable rooms near the Kalametiya Bird Lagoon with modern amenities and eco-friendly activities."
                />
                <meta name="twitter:image" content="https://www.natureloversinn.com/rooms" />

                {/* 🔹 JSON-LD Schema (Hotel) */}
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Nature Lover’s Inn",
            "image": "https://www.natureloversinn.com/rooms",
            "description": "Comfortable and affordable hotel rooms located near the Kalametiya Bird Sanctuary with modern amenities and nature activities.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kalametiya",
                "addressRegion": "Southern Province",
                "addressCountry": "Sri Lanka"
            },
            "telephone": "+94-760169518",
            "url": "https://www.natureloversinn.com/rooms",
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Hot Water", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "On-site Restaurant", "value": true }
            ]
        }
        `}
                </script>
            </Helmet>



            {/* Header Section with proper spacing */}
            <Box sx={{
                mb: 6,
                textAlign: 'center',
                px: { xs: 2, sm: 0 }
            }}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: 'primary.main',
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3rem',
                        },
                        lineHeight: 1.2
                    }}
                >
                    Our Accommodations
                </Typography>

                <Typography variant="h6" component="h2" sx={{
                    color: 'text.secondary',
                    maxWidth: '700px',
                    mx: 'auto',
                    fontSize: {
                        xs: '1rem',
                        sm: '1.1rem'
                    }
                }}>
                    Experience authentic Sri Lankan hospitality in our comfortable rooms, just minutes from Kalametiya Bird Lagoon and peaceful beaches.
                </Typography>
            </Box>

            {/* Room Cards Section */}
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
                {rooms.map((room, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Paper elevation={room.highlight ? 8 : 4} sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            border: `2px solid ${theme.palette.primary.main}`,
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: theme.shadows[8]
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
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    zIndex: 1
                                }}>
                                    <Star sx={{ mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        POPULAR
                                    </Typography>
                                </Box>
                            )}

                            <CardMedia
                                component="img"
                                height="280"
                                image={room.image}
                                alt={room.title}
                                sx={{
                                    objectFit: 'cover',
                                    borderBottom: `1px solid ${theme.palette.divider}`
                                }}
                            />

                            <CardContent sx={{ px: 3, pt: 3, pb: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2
                                }}>
                                    <Typography variant="h5" component="h3" sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main'
                                    }}>
                                        {room.title}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main'
                                    }}>
                                        {room.price}
                                    </Typography>
                                </Box>

                                <Typography variant="body1" color="text.secondary" sx={{
                                    mb: 3,
                                    lineHeight: 1.6
                                }}>
                                    {room.description}
                                </Typography>

                                <Divider sx={{ my: 3 }} />

                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" component="h4" sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        color: 'text.secondary'
                                    }}>
                                        ROOM FEATURES
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {room.features.map((feature, i) => (
                                            <Grid item xs={12} sm={6} key={i}>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <Box sx={{
                                                        minWidth: '24px',
                                                        color: 'primary.main',
                                                        mt: '2px',
                                                        mr: 1.5
                                                    }}>
                                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
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

                            <CardActions sx={{ px: 3, pb: 3 }}>
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="contained"
                                    size="large"
                                    color="success"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        borderRadius: '8px',
                                        fontWeight: 'bold'
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
            <Box sx={{ width: '100%', mb: 8 }}>
                <Typography variant="h3" component="h2" gutterBottom align="center" sx={{
                    fontWeight: 'bold',
                    mb: 6
                }}>
                    Hotel Amenities & Services
                </Typography>

                <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
                    {amenities.map((amenity, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 2,
                                textAlign: 'center'
                            }}>
                                <Box sx={{
                                    color: 'primary.main',
                                    mb: 2,
                                    fontSize: '2.5rem',
                                    width: '70px',
                                    height: '70px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {amenity.icon}
                                </Box>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {amenity.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Experience Section */}
            <Box sx={{
                width: '100%',
                maxWidth: '1000px',
                mx: 'auto',
                backgroundColor: theme.palette.background.paper,
                p: { xs: 3, md: 4 },
                borderRadius: '12px',
                mb: 6,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[2]
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <BeachAccess sx={{
                        fontSize: '2.5rem',
                        color: 'primary.main',
                        mr: 3
                    }} />
                    <Typography variant="h3" component="h3" sx={{
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}>
                        Experience Kalametiya
                    </Typography>
                </Box>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 3
                }}>
                    Nestled just 200 meters from the breathtaking Kalametiya Bird Lagoon, our hotel offers unparalleled access to one of Sri Lanka's most important wetland ecosystems. Join our expert-guided tours to observe over 150 bird species, including migratory flocks that visit seasonally.
                </Typography>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 4
                }}>
                    Immerse yourself in authentic Sri Lankan culture with our hands-on cooking classes, specially designed for international visitors. Learn to prepare traditional dishes using fresh local ingredients.
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    gap: 3
                }}>
                    <Button
                        component={Link}
                        to="/lagoon-tour"
                        variant="contained"
                        size="large"
                        color="success"
                        endIcon={<NaturePeople />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        Bird Watching Tours
                    </Button>
                    <Button
                        component={Link}
                        to="/cooking"
                        variant="contained"
                        size="large"
                        color="success"
                        endIcon={<LocalDining />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        Cooking Classes
                    </Button>
                    <Button
                        component={Link}
                        to="/jungle"
                        variant="contained"
                        size="large"
                        color="success"
                        endIcon={<LocalDining />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        Jungle Walking
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Rooms;
