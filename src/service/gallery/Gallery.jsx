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

/* ----------------------------------------------------
   ✅ IMPORT ALL IMAGES (ONLY CHANGE)
---------------------------------------------------- */

const galleryImages = [
    { id: 1, src: "/images/gallery1.png", alt: "Jungle Scenery" },
    { id: 2, src: "/images/gallery_7.jpeg", alt: "Jungle" },
    { id: 3, src: "/images/gallery_6.jpeg", alt: "Local Wildlife" },
    { id: 4, src: "/images/gallery_4.jpeg", alt: "Lush Greenery" },
    { id: 5, src: "/images/gallery_5.jpeg", alt: "Lagoon View" },
    { id: 6, src: "/images/gallery_3.jpeg", alt: "Boat Safari" },
    { id: 7, src: "/images/gallery_2.jpeg", alt: "Bird Watching" },
    { id: 8, src: "/images/gallery_8.jpeg", alt: "Rock Formation" },
    { id: 9, src: "/images/gallery_9.jpeg", alt: "Jungle Flora" },
    { id: 10, src: "/images/gallery_10.jpeg", alt: "Exploring Nature" },
    { id: 11, src: "/images/gallery_11.jpeg", alt: "Buffalo in a Field" },
    { id: 12, src: "/images/gallery_12.jpeg", alt: "Jungle River" },
    { id: 13, src: "/images/gallery_14.jpeg", alt: "Peaceful Walk" },
    { id: 14, src: "/images/gallery_13.jpeg", alt: "Beautiful Sunset" },
    { id: 15, src: "/images/gallery_15.jpeg", alt: "Scenic Waters" },
    { id: 16, src: "/images/gallery_16.jpeg", alt: "Photography Spot" },
    { id: 17, src: "/images/gallery_17.jpeg", alt: "Hidden Temple" },
    { id: 18, src: "/images/gallery_18.jpeg", alt: "Ancient Ruins" },
    { id: 19, src: "/images/gallery_19.jpeg", alt: "Local Culture" },
    { id: 20, src: "/images/gallery_20.jpeg", alt: "Sandy Beach" },
    { id: 21, src: "/images/gallery_21.jpeg", alt: "Jungle Scenery" },
    { id: 22, src: "/images/gallery_22.jpeg", alt: "Trail Path" },
    { id: 23, src: "/images/gallery_23.jpeg", alt: "Local Wildlife" },
    { id: 24, src: "/images/gallery_24.jpeg", alt: "Lush Greenery" },
    { id: 25, src: "/images/gallery_25.jpeg", alt: "Lagoon View" },
    { id: 26, src: "/images/gallery_26.jpeg", alt: "Boat Safari" },
    { id: 27, src: "/images/gallery_27.jpeg", alt: "Bird Watching" },
    { id: 28, src: "/images/gallery_28.jpeg", alt: "Rock Formation" },
    { id: 29, src: "/images/gallery_29.jpeg", alt: "Jungle Flora" },
    { id: 30, src: "/images/gallery_30.jpeg", alt: "Jungle Flora" },
];

/* ----------------------------------------------------
   ⭐ YOUR ORIGINAL CODE (UNCHANGED)
---------------------------------------------------- */

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
            <Helmet>
                {/* Page Title */}
                <title>Nature Lover’s Inn | Kalametiya Bird Sanctuary Eco Stay in Sri Lanka</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Nature Lover’s Inn is located next to the Kalametiya Bird Sanctuary in Sri Lanka. Enjoy bird watching tours, lagoon safaris, jungle walking, cooking classes, and peaceful beachfront accommodation."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="Kalametiya Bird Sanctuary hotel, Nature Lovers Inn, bird watching Sri Lanka, Kalametiya lagoon tour, eco stay Sri Lanka, Tangalle nature tours"
                />

                {/* Robots */}
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.natureloversinn.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Nature Lover’s Inn | Next to Kalametiya Bird Sanctuary" />
                <meta
                    property="og:description"
                    content="Stay at Nature Lover’s Inn, located right next to the famous Kalametiya Bird Sanctuary. Enjoy lagoon tours, bird watching, jungle trekking and authentic Sri Lankan hospitality."
                />
                <meta property="og:url" content="https://www.natureloversinn.com/" />

                {/* ✔️ EXACTLY AS YOU REQUESTED — DO NOT CHANGE THIS */}
                <meta property="og:image" content="https://www.natureloversinn.com/" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Nature Lover’s Inn | Kalametiya Bird Sanctuary" />
                <meta
                    name="twitter:description"
                    content="Eco-friendly stays, bird watching tours, lagoon boat rides and jungle walks at Kalametiya Bird Sanctuary."
                />
                <meta name="twitter:image" content="https://www.natureloversinn.com/" />

                {/* JSON-LD Schema */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Nature Lover’s Inn",
      "description": "Eco hotel near Kalametiya Bird Sanctuary with bird watching tours, lagoon boat rides, and jungle walking experiences.",
      "url": "https://www.natureloversinn.com/",
      "image": "https://www.natureloversinn.com/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalametiya",
        "addressLocality": "Tangalle",
        "addressRegion": "Southern Province",
        "addressCountry": "Sri Lanka"
      },
      "telephone": "+94-760169518"
    }
    `}
                </script>
            </Helmet>
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
                    }}
                >
                    {/* Close */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "#fff",
                            bgcolor: "rgba(0,0,0,0.5)",
                        }}
                        onClick={closeLightbox}
                    >
                        <CloseIcon fontSize={isSm ? "medium" : "large"} />
                    </IconButton>

                    {/* Prev */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            left: 20,
                            color: "#fff",
                            bgcolor: "rgba(0,0,0,0.5)",
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
                        }}
                    />

                    {/* Next */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            right: 20,
                            color: "#fff",
                            bgcolor: "rgba(0,0,0,0.5)",
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
