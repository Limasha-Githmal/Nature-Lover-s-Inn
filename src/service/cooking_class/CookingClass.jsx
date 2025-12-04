import React, { useState } from "react";
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    Stack,
    useMediaQuery,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
    Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Helmet } from "react-helmet";

/* -----------------------------------------------------------
   ✅ IMAGES FROM PUBLIC FOLDER (NO IMPORTS)
------------------------------------------------------------*/

// Feature images
const featureImages = [
    { id: 1, src: "/images/jungel_11.jpeg", alt: "Fresh Ingredients" },
    { id: 2, src: "/images/jungel_12.jpeg", alt: "Hands-On Cooking" },
    { id: 3, src: "/images/jungel_7.jpeg", alt: "Delicious Meal" },
];

// Gallery images
const galleryImages = [
    { id: 1, src: "/images/jungel_1.jpeg", alt: "Cooking Class Kalametiya 1" },
    { id: 2, src: "/images/jungel_2.jpeg", alt: "Cooking Class Kalametiya 2" },
    { id: 3, src: "/images/jungel_3.jpeg", alt: "Cooking Class Kalametiya 3" },
    { id: 4, src: "/images/jungel_4.jpeg", alt: "Cooking Class Kalametiya 4" },
    { id: 5, src: "/images/jungel_5.jpeg", alt: "Cooking Class Kalametiya 5" },
    { id: 6, src: "/images/jungel_6.jpeg", alt: "Cooking Class Kalametiya 6" },
    { id: 7, src: "/images/jungel_13.jpeg", alt: "Cooking Class Kalametiya 7" },
    { id: 8, src: "/images/jungel_8.jpeg", alt: "Cooking Class Kalametiya 8" },
    { id: 9, src: "/images/jungel_9.jpeg", alt: "Cooking Class Kalametiya 9" },
    { id: 10, src: "/images/jungel_10.jpeg", alt: "Cooking Class Kalametiya 10" },
    { id: 11, src: "/images/jungel_14.jpeg", alt: "Cooking Class Kalametiya 11" },
    { id: 12, src: "/images/jungel_15.jpeg", alt: "Cooking Class Kalametiya 12" },
    { id: 13, src: "/images/jungle_16.jpeg", alt: "Cooking Class Kalametiya 13" },
    { id: 14, src: "/images/jungel_M.jpg", alt: "Cooking Class Kalametiya 14" },
    { id: 15, src: "/images/lagoon_28.jpg", alt: "Cooking Class Kalametiya 15" },
];

/* -----------------------------------------------------------
   Styled Button
------------------------------------------------------------*/
const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "25px",
    padding: "12px 26px",
    fontWeight: 600,
    textTransform: "none",
    transition: "all 0.3s ease",
    boxShadow: theme.shadows[3],
    "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: theme.shadows[8],
    },
}));

/* -----------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------*/

const CookingClass = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allImages, setAllImages] = useState([]);

    const openLightbox = (images, index) => {
        setAllImages(images);
        setCurrentIndex(index);
        setLightboxOpen(true);
    };
    const closeLightbox = () => setLightboxOpen(false);
    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrentIndex((prev) =>
            prev === allImages.length - 1 ? 0 : prev + 1
        );

    return (
        <Box sx={{ bgcolor: "#f8fbfc", pb: 8 }}>
            {/* ✅ ✅ ✅ FULL SEO FIXED */}
            <Helmet>
                <title>Nature Lover’s Inn | Kalametiya Bird Sanctuary Eco Stay in Sri Lanka</title>

                <meta
                    name="description"
                    content="Nature Lover’s Inn is located next to the Kalametiya Bird Sanctuary in Sri Lanka. Enjoy bird watching tours, lagoon safaris, jungle walking, cooking classes, and peaceful beachfront accommodation."
                />

                <meta
                    name="keywords"
                    content="Kalametiya Bird Sanctuary hotel, Nature Lovers Inn, bird watching Sri Lanka, Kalametiya lagoon tour, eco stay Sri Lanka, Tangalle nature tours"
                />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.natureloversinn.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Nature Lover’s Inn | Next to Kalametiya Bird Sanctuary" />
                <meta
                    property="og:description"
                    content="Stay at Nature Lover’s Inn, located right next to the famous Kalametiya Bird Sanctuary. Enjoy lagoon tours, bird watching, jungle trekking and authentic Sri Lankan hospitality."
                />
                <meta property="og:url" content="https://www.natureloversinn.com/" />
                <meta property="og:image" content="https://www.natureloversinn.com/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Nature Lover’s Inn | Kalametiya Bird Sanctuary" />
                <meta
                    name="twitter:description"
                    content="Eco-friendly stays, bird watching tours, lagoon boat rides and jungle walks at Kalametiya Bird Sanctuary."
                />
                <meta name="twitter:image" content="https://www.natureloversinn.com/og-image.jpg" />

                {/* Schema */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Nature Lover’s Inn",
              "description": "Eco hotel near Kalametiya Bird Sanctuary with bird watching tours, lagoon boat rides, and jungle walking experiences.",
              "url": "https://www.natureloversinn.com/",
              "image": "https://www.natureloversinn.com/og-image.jpg",
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
                    py: { xs: 5, md: 8 },
                    px: 2,
                    background: "linear-gradient(135deg, #ff8c00, #ffc107)",
                    color: "#fff",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    mb: 6,
                }}
            >
                <Typography variant={isSm ? "h5" : "h3"} fontWeight={800} gutterBottom>
                    Sri Lankan Cooking Experience 🍛
                </Typography>
                <Typography
                    variant={isSm ? "body1" : "h6"}
                    sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, opacity: 0.95 }}
                >
                    Learn, cook, and taste authentic Sri Lankan cuisine in a hands-on, fun-filled class.
                </Typography>
            </Box>


            <Container maxWidth="lg">
                {/* Featured Images */}
                <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
                    {featureImages.map(({ id, src, alt }, index) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: 5,
                                    overflow: "hidden",
                                    transition: "0.3s",
                                    "&:hover": { transform: "scale(1.03)", boxShadow: 10 },
                                    height: "100%",
                                    cursor: "pointer",
                                }}
                                onClick={() => openLightbox(featureImages, index)}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: {xs:300, sm: 330, md: 350 },
                                        height: "auto", // ✅ auto height to remove white gaps
                                        maxHeight: {xs:200, sm: 260, md: 300 },
                                        objectFit: "cover",
                                    }}
                                />
                                <CardContent sx={{ textAlign: "center", py: 2 }}>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {alt}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Details Card */}
                <Card
                    sx={{
                        borderRadius: 4,
                        p: { xs: 2, sm: 3, md: 4 },
                        boxShadow: 5,
                        backgroundColor: "background.paper",
                        mb: 8,
                    }}
                >
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        What’s Included in Your Class
                    </Typography>

                    <List>
                        {[
                            "Hands-on cooking of 1 main dish & 5 vegetable curries",
                            "Learn to make traditional Sri Lankan sweets",
                            "Guidance from experienced local chefs",
                            "All ingredients and spices provided",
                            "Enjoy the delicious meal you prepared",
                            "Recipe booklet to take home",
                        ].map((item, i) => (
                            <ListItem key={i} disableGutters>
                                <ListItemIcon>
                                    <CheckCircleIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 3 }} />

                    <Grid container spacing={2}>
                        {[{ icon: <AccessTimeIcon color="primary" />, label: "Duration", value: "3–4 hours" }].map(
                            (detail, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    <Box display="flex" alignItems="center">
                                        {detail.icon}
                                        <Typography variant="body1" sx={{ ml: 1.5 }}>
                                            <b>{detail.label}:</b> {detail.value}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        )}
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" fontWeight={700} gutterBottom>
                        Packages
                    </Typography>
                    <Grid container spacing={2}>
                        {[{ persons: "1 Person", price: "6$" },
                            { persons: "2 Persons", price: "12$" },
                            { persons: "3 Persons", price: "18$" },
                            { persons: "4 Persons", price: "24$" }].map((pkg, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        p: 2,
                                        textAlign: "center",
                                        "&:hover": { backgroundColor: "action.hover" },
                                    }}
                                >
                                    <Typography variant="body1" fontWeight={600}>
                                        {pkg.persons}
                                    </Typography>
                                    <Typography variant="h6" color="primary.main" fontWeight={700}>
                                        {pkg.price}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Card>

                {/* Contact Buttons */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 6, width: "100%" }}
                >
                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="success"
                        startIcon={<WhatsAppIcon />}
                        component={Link}
                        href="https://wa.me/94760169518"
                        target="_blank"
                        rel="noopener"
                    >
                        WhatsApp
                    </StyledButton>
                    <StyledButton
                        fullWidth
                        variant="outlined"
                        color="primary"
                        startIcon={<EmailIcon />}
                        component={Link}
                        href="mailto:natureloversinn10@gmail.com?subject=Booking Inquiry&body=Hello, I would like to know more about your cooking class."
                    >
                        Gmail
                    </StyledButton>
                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<DirectionsBoatIcon />}
                        component={RouterLink}
                        to="/contact"
                    >
                        Book Class
                    </StyledButton>
                </Stack>

                {/* Gallery */}
                <Typography
                    variant="h5"
                    fontWeight={700}
                    align="center"
                    sx={{ color: "#ff8c00", mb: 4 }}
                >
                    📸 Cooking Class Moments
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {galleryImages.map(({ id, src, alt }, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
                                    transition: "0.3s",
                                    height: "250px",
                                    cursor: "pointer",
                                }}
                                onClick={() => openLightbox(galleryImages, index)}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: {xs:310, sm: 330, md: 360 },
                                        height: "auto", // ✅ auto height to remove white gaps
                                        maxHeight: {xs:300, sm: 280, md: 300 }, // limit too tall images
                                        objectFit: "cover",
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Lightbox Popup */}
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
                        }}
                    >
                        {/* Close */}
                        <IconButton
                            sx={{ position: "absolute", top: 20, right: 20, color: "#fff", zIndex: 10000 }}
                            onClick={closeLightbox}
                        >
                            <CloseIcon fontSize={isSm ? "medium" : "large"} />
                        </IconButton>

                        {/* Previous */}
                        <IconButton
                            sx={{ position: "absolute", left: isSm ? 10 : 40, color: "#fff" }}
                            onClick={prevImage}
                        >
                            <ArrowBackIosNewIcon fontSize={isSm ? "medium" : "large"} />
                        </IconButton>

                        {/* Image */}
                        <Box
                            component="img"
                            src={allImages[currentIndex].src}
                            alt={allImages[currentIndex].alt}
                            sx={{
                                maxHeight: "85vh",
                                maxWidth: "95vw",
                                borderRadius: 2,
                            }}
                        />

                        {/* Next */}
                        <IconButton
                            sx={{ position: "absolute", right: isSm ? 10 : 40, color: "#fff" }}
                            onClick={nextImage}
                        >
                            <ArrowForwardIosIcon fontSize={isSm ? "medium" : "large"} />
                        </IconButton>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default CookingClass;
