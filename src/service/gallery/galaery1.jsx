import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Array of gallery images
const galleryImages = [
    { id: 1, src: "src/assets/image/gallery_1.jpeg", alt: "Jungle Scenery" },
    { id: 2, src: "src/assets/image/gallery_7.jpeg", alt: "Trail Path" },
    { id: 3, src: "src/assets/image/gallery_6.jpeg", alt: "Local Wildlife" },
    { id: 4, src: "src/assets/image/gallery_4.jpeg", alt: "Lush Greenery" },
    { id: 5, src: "src/assets/image/gallery_5.jpeg", alt: "Lagoon View" },
    { id: 6, src: "src/assets/image/gallery_3.jpeg", alt: "Boat Safari" },
    { id: 7, src: "src/assets/image/gallery_2.jpeg", alt: "Bird Watching" },
    { id: 8, src: "src/assets/image/gallery_8.jpeg", alt: "Rock Formation" },
    { id: 9, src: "src/assets/image/gallery_9.jpeg", alt: "Jungle Flora" },
    { id: 10, src: "src/assets/image/gallery_10.jpeg", alt: "Exploring Nature" },
    { id: 11, src: "src/assets/image/gallery_11.jpeg", alt: "Buffalo in a Field" },
    { id: 12, src: "src/assets/image/gallery_12.jpeg", alt: "Jungle River" },
    { id: 13, src: "src/assets/image/gallery_14.jpeg", alt: "Peaceful Walk" },
    { id: 14, src: "src/assets/image/gallery_13.jpeg", alt: "Beautiful Sunset" },
    { id: 15, src: "src/assets/image/gallery_15.jpeg", alt: "Scenic Waters" },
    { id: 16, src: "src/assets/image/gallery_16.jpeg", alt: "Photography Spot" },
    { id: 17, src: "src/assets/image/gallery_17.jpeg", alt: "Hidden Temple" },
    { id: 18, src: "src/assets/image/gallery_18.jpeg", alt: "Ancient Ruins" },
    { id: 19, src: "src/assets/image/gallery_19.jpeg", alt: "Local Culture" },
    { id: 20, src: "src/assets/image/gallery_20.jpeg", alt: "Sandy Beach" },
    { id: 21, src: "src/assets/image/gallery_21.jpeg", alt: "Jungle Scenery" },
    { id: 22, src: "src/assets/image/gallery_22.jpeg", alt: "Trail Path" },
    { id: 23, src: "src/assets/image/gallery_23.jpeg", alt: "Local Wildlife" },
    { id: 24, src: "src/assets/image/gallery_24.jpeg", alt: "Lush Greenery" },
    { id: 25, src: "src/assets/image/gallery_25.jpeg", alt: "Lagoon View" },
    { id: 26, src: "src/assets/image/gallery_26.jpeg", alt: "Boat Safari" },
    { id: 27, src: "src/assets/image/gallery_27.jpeg", alt: "Bird Watching" },
    { id: 28, src: "src/assets/image/gallery_28.jpeg", alt: "Rock Formation" },
    { id: 29, src: "src/assets/image/gallery_29.jpeg", alt: "Jungle Flora" },
    { id: 30, src: "src/assets/image/gallery_30.jpeg", alt: "Jungle Flora" },
];

const PhotoGallery = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);
    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    const nextImage = () => setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

    return (
        <Box sx={{ bgcolor: "#f8fbfc", pb: { xs: 6, sm: 8, md: 10 } }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    py: { xs: 6, sm: 8, md: 10 },
                    px: { xs: 2, sm: 3 },
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    color: "#fff",
                    borderBottomLeftRadius: { xs: 30, sm: 40 },
                    borderBottomRightRadius: { xs: 30, sm: 40 },
                    mb: { xs: 4, sm: 6, md: 8 },
                }}
            >
                <Typography variant={isSm ? "h4" : "h3"} fontWeight={800} gutterBottom>
                    Our Photo Gallery 📸
                </Typography>
                <Typography
                    variant={isSm ? "body1" : "h6"}
                    sx={{ maxWidth: { xs: "95%", sm: 700 }, mx: "auto", fontWeight: 400, opacity: 0.95 }}
                >
                    Explore moments captured at Nature Lover's Inn and our beautiful surroundings in Kalametiya.
                </Typography>
            </Box>

            {/* Photo Grid */}
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                    {galleryImages.map(({ id, src, alt }, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    "&:hover": { transform: "scale(1.03)", boxShadow: 8 },
                                    transition: "all 0.3s ease-in-out",
                                    height: { xs: 200, sm: 220, md: 250 },
                                    cursor: "pointer",
                                }}
                                onClick={() => openLightbox(index)}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: {xs:300, sm: 330, md: 350 },
                                        height: "auto", // ✅ auto height to remove white gaps
                                        maxHeight: {xs:200, sm: 230, md: 250 },
                                        objectFit: "cover", }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Lightbox */}
            {lightboxOpen && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        bgcolor: "rgba(0,0,0,0.85)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        px: { xs: 1, sm: 3 },
                    }}
                >
                    <IconButton
                        sx={{ position: "absolute", top: 20, right: 20, color: "#fff", zIndex: 10000 }}
                        onClick={closeLightbox}
                    >
                        <CloseIcon fontSize={isSm ? "medium" : "large"} />
                    </IconButton>

                    <IconButton
                        sx={{ position: "absolute", left: isSm ? 10 : 40, color: "#fff" }}
                        onClick={prevImage}
                    >
                        <ArrowBackIosNewIcon fontSize={isSm ? "medium" : "large"} />
                    </IconButton>

                    <Box
                        component="img"
                        src={galleryImages[currentIndex].src}
                        alt={galleryImages[currentIndex].alt}
                        sx={{
                            maxHeight: isSm ? "70%" : isMd ? "75%" : "80%",
                            maxWidth: isSm ? "90%" : isMd ? "85%" : "80%",
                            borderRadius: 2,
                        }}
                    />

                    <IconButton
                        sx={{ position: "absolute", right: isSm ? 10 : 40, color: "#fff" }}
                        onClick={nextImage}
                    >
                        <ArrowForwardIosIcon fontSize={isSm ? "medium" : "large"} />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default PhotoGallery;
