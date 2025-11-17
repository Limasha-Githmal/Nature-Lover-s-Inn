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

import gallery1 from "../../assets/image/gallery1.png";
import gallery2 from "../../assets/image/gallery_7.jpeg";
import gallery3 from "../../assets/image/gallery_6.jpeg";
import gallery4 from "../../assets/image/gallery_4.jpeg";
import gallery5 from "../../assets/image/gallery_5.jpeg";
import gallery6 from "../../assets/image/gallery_3.jpeg";
import gallery7 from "../../assets/image/gallery_2.jpeg";
import gallery8 from "../../assets/image/gallery_8.jpeg";
import gallery9 from "../../assets/image/gallery_9.jpeg";
import gallery10 from "../../assets/image/gallery_10.jpeg";
import gallery11 from "../../assets/image/gallery_11.jpeg";
import gallery12 from "../../assets/image/gallery_12.jpeg";
import gallery13 from "../../assets/image/gallery_14.jpeg";
import gallery14 from "../../assets/image/gallery_13.jpeg";
import gallery15 from "../../assets/image/gallery_15.jpeg";
import gallery16 from "../../assets/image/gallery_16.jpeg";
import gallery17 from "../../assets/image/gallery_17.jpeg";
import gallery18 from "../../assets/image/gallery_18.jpeg";
import gallery19 from "../../assets/image/gallery_19.jpeg";
import gallery20 from "../../assets/image/gallery_20.jpeg";
import gallery21 from "../../assets/image/gallery_21.jpeg";
import gallery22 from "../../assets/image/gallery_22.jpeg";
import gallery23 from "../../assets/image/gallery_23.jpeg";
import gallery24 from "../../assets/image/gallery_24.jpeg";
import gallery25 from "../../assets/image/gallery_25.jpeg";
import gallery26 from "../../assets/image/gallery_26.jpeg";
import gallery27 from "../../assets/image/gallery_27.jpeg";
import gallery28 from "../../assets/image/gallery_28.jpeg";
import gallery29 from "../../assets/image/gallery_29.jpeg";
import gallery30 from "../../assets/image/gallery_30.jpeg";

// Array of gallery images (updated with imported files)
const galleryImages = [
    { id: 1, src: gallery1, alt: "Jungle Scenery" },
    { id: 2, src: gallery2, alt: "Jungle" },
    { id: 3, src: gallery3, alt: "Local Wildlife" },
    { id: 4, src: gallery4, alt: "Lush Greenery" },
    { id: 5, src: gallery5, alt: "Lagoon View" },
    { id: 6, src: gallery6, alt: "Boat Safari" },
    { id: 7, src: gallery7, alt: "Bird Watching" },
    { id: 8, src: gallery8, alt: "Rock Formation" },
    { id: 9, src: gallery9, alt: "Jungle Flora" },
    { id: 10, src: gallery10, alt: "Exploring Nature" },
    { id: 11, src: gallery11, alt: "Buffalo in a Field" },
    { id: 12, src: gallery12, alt: "Jungle River" },
    { id: 13, src: gallery13, alt: "Peaceful Walk" },
    { id: 14, src: gallery14, alt: "Beautiful Sunset" },
    { id: 15, src: gallery15, alt: "Scenic Waters" },
    { id: 16, src: gallery16, alt: "Photography Spot" },
    { id: 17, src: gallery17, alt: "Hidden Temple" },
    { id: 18, src: gallery18, alt: "Ancient Ruins" },
    { id: 19, src: gallery19, alt: "Local Culture" },
    { id: 20, src: gallery20, alt: "Sandy Beach" },
    { id: 21, src: gallery21, alt: "Jungle Scenery" },
    { id: 22, src: gallery22, alt: "Trail Path" },
    { id: 23, src: gallery23, alt: "Local Wildlife" },
    { id: 24, src: gallery24, alt: "Lush Greenery" },
    { id: 25, src: gallery25, alt: "Lagoon View" },
    { id: 26, src: gallery26, alt: "Boat Safari" },
    { id: 27, src: gallery27, alt: "Bird Watching" },
    { id: 28, src: gallery28, alt: "Rock Formation" },
    { id: 29, src: gallery29, alt: "Jungle Flora" },
    { id: 30, src: gallery30, alt: "Jungle Flora" },
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
    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

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
                    sx={{
                        maxWidth: { xs: "95%", sm: 700 },
                        mx: "auto",
                        fontWeight: 400,
                        opacity: 0.95,
                    }}
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
                                        width: { xs: 300, sm: 330, md: 350 },
                                        height: "auto",
                                        maxHeight: { xs: 200, sm: 230, md: 250 },
                                        objectFit: "cover",
                                    }}
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
                        bgcolor: "rgba(0,0,0,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        overflow: "hidden",
                    }}
                >
                    {/* Close button */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "#fff",
                            zIndex: 10000,
                            bgcolor: "rgba(0,0,0,0.5)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                        }}
                        onClick={closeLightbox}
                    >
                        <CloseIcon fontSize={isSm ? "medium" : "large"} />
                    </IconButton>

                    {/* Previous button */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            left: 20,
                            color: "#fff",
                            zIndex: 10000,
                            bgcolor: "rgba(0,0,0,0.5)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                        }}
                        onClick={prevImage}
                    >
                        <ArrowBackIosNewIcon fontSize={isSm ? "medium" : "large"} />
                    </IconButton>

                    {/* Image */}
                    <Box
                        component="img"
                        src={galleryImages[currentIndex].src}
                        alt={galleryImages[currentIndex].alt}
                        sx={{
                            maxHeight: isSm ? "70%" : isMd ? "80%" : "85%",
                            maxWidth: "85%",
                            borderRadius: 2,
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.6)",
                        }}
                    />

                    {/* Next button */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            right: 20,
                            color: "#fff",
                            zIndex: 10000,
                            bgcolor: "rgba(0,0,0,0.5)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                        }}
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
