import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Array of 20 photos for the gallery
const galleryImages = [
    { id: 1, src: "src/assets/image/jungel_1.jpeg", alt: "Jungle Scenery" },
    { id: 2, src: "src/assets/image/jungel_2.jpeg", alt: "Trail Path" },
    { id: 3, src: "src/assets/image/jungel_3.jpeg", alt: "Local Wildlife" },
    { id: 4, src: "src/assets/image/jungel_4.jpeg", alt: "Lush Greenery" },
    { id: 5, src: "src/assets/lagoon/featured1.jpg", alt: "Lagoon View" },
    { id: 6, src: "src/assets/lagoon/featured2.jpg", alt: "Boat Safari" },
    { id: 7, src: "src/assets/lagoon/featured3.jpg", alt: "Bird Watching" },
    { id: 8, src: "src/assets/lagoon/featured4.jpg", alt: "Rock Formation" },
    { id: 9, src: "src/assets/image/jungel_5.jpeg", alt: "Jungle Flora" },
    { id: 10, src: "src/assets/image/jungel_6.jpeg", alt: "Exploring Nature" },
    { id: 11, src: "src/assets/image/jungel_7.jpeg", alt: "Buffalo in a Field" },
    { id: 12, src: "src/assets/image/jungel_8.jpeg", alt: "Jungle River" },
    { id: 13, src: "src/assets/lagoon/featured5.jpg", alt: "Peaceful Walk" },
    { id: 14, src: "src/assets/lagoon/featured6.jpg", alt: "Beautiful Sunset" },
    { id: 15, src: "src/assets/lagoon/featured7.jpg", alt: "Scenic Waters" },
    { id: 16, src: "src/assets/lagoon/featured8.jpg", alt: "Photography Spot" },
    { id: 17, src: "src/assets/image/jungel_9.jpeg", alt: "Hidden Temple" },
    { id: 18, src: "src/assets/image/jungel_10.jpeg", alt: "Ancient Ruins" },
    { id: 19, src: "src/assets/image/jungel_11.jpeg", alt: "Local Culture" },
    { id: 20, src: "src/assets/image/jungel_12.jpeg", alt: "Sandy Beach" },
];

const PhotoGallery = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ bgcolor: "#f8fbfc", pb: 8 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    py: 8,
                    px: 2,
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    color: "#fff",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    mb: 6,
                }}
            >
                <Typography variant={isSm ? "h4" : "h3"} fontWeight={800} gutterBottom>
                    Our Photo Gallery 📸
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, opacity: 0.95 }}
                >
                    Explore moments captured at Nature Lover's Inn and our beautiful surroundings in Kalametiya.
                </Typography>
            </Box>

            <Container maxWidth="lg">
                {/* Photo Grid */}
                <Grid container spacing={2}>
                    {galleryImages.map(({ id, src, alt }) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    "&:hover": { transform: "scale(1.03)", boxShadow: 8 },
                                    transition: "all 0.3s ease-in-out",
                                    height: '250px'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PhotoGallery;
