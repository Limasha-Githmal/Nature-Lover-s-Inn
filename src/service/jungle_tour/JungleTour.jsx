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
    Link,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import HikingIcon from "@mui/icons-material/Hiking";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

/* ✅ IMAGES FROM PUBLIC */

const featureImages = [
    { id: 1, src: "/images/jungel_11.jpeg", alt: "Nine Stupas Temple" },
    { id: 2, src: "/images/jungel_12.jpeg", alt: "Kalametiya Beach" },
    { id: 3, src: "/images/jungel_7.jpeg", alt: "Buffalo Fields" },
];

const galleryImages = [
    { id: 1, src: "/images/jungel_1.jpeg", alt: "Jungle Walking Tour Kalametiya 1" },
    { id: 2, src: "/images/jungel_2.jpeg", alt: "Jungle Walking Tour Kalametiya 2" },
    { id: 3, src: "/images/jungel_3.jpeg", alt: "Jungle Walking Tour Kalametiya 3" },
    { id: 4, src: "/images/jungel_4.jpeg", alt: "Jungle Walking Tour Kalametiya 4" },
    { id: 5, src: "/images/jungel_5.jpeg", alt: "Jungle Walking Tour Kalametiya 5" },
    { id: 6, src: "/images/jungel_6.jpeg", alt: "Jungle Walking Tour Kalametiya 6" },
    { id: 7, src: "/images/jungel_13.jpeg", alt: "Jungle Walking Tour Kalametiya 7" },
    { id: 8, src: "/images/jungel_8.jpeg", alt: "Jungle Walking Tour Kalametiya 8" },
    { id: 9, src: "/images/jungel_9.jpeg", alt: "Jungle Walking Tour Kalametiya 9" },
    { id: 10, src: "/images/jungel_10.jpeg", alt: "Jungle Walking Tour Kalametiya 10" },
    { id: 11, src: "/images/jungel_14.jpeg", alt: "Jungle Walking Tour Kalametiya 11" },
    { id: 12, src: "/images/jungel_15.jpeg", alt: "Jungle Walking Tour Kalametiya 12" },
    { id: 13, src: "/images/jungle_16.jpeg", alt: "Jungle Walking Tour Kalametiya 13" },
    { id: 14, src: "/images/jungel_M.jpg", alt: "Jungle Walking Tour Kalametiya 14" },
    { id: 15, src: "/images/lagoon_28.jpg", alt: "Jungle Walking Tour Kalametiya 15" },
];

/* Button */
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

const JungleTour = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );

    const nextImage = () =>
        setCurrentIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );

    return (
        <Box sx={{ bgcolor: "#f8fbfc", pb: 8 }}>

            {/* ✅ PERFECT SEO FIXED */}
            <Helmet>
                <title>Jungle Walking Tour in Kalametiya | Nature Lover’s Inn Sri Lanka</title>

                <meta
                    name="description"
                    content="Join the Kalametiya Jungle Walking Tour with Nature Lover’s Inn. Explore wildlife, ancient temples, beaches, and hidden forest trails with expert local guides."
                />

                <meta
                    name="keywords"
                    content="Kalametiya jungle walk, Sri Lanka jungle tour, eco jungle trekking, Tangalle nature tour, Nature Lovers Inn jungle walk, walking tours sri lanka"
                />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.natureloversinn.com/jungle" />

                {/* ✅ Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jungle Walking Tour | Nature Lover’s Inn" />
                <meta
                    property="og:description"
                    content="Explore Sri Lanka’s untouched jungle landscapes with our guided Kalametiya jungle walking experience."
                />
                <meta property="og:url" content="https://www.natureloversinn.com/jungle" />
                <meta property="og:image" content="https://www.natureloversinn.com/images/jungel_10.jpeg" />

                {/* ✅ Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kalametiya Jungle Walk | Nature Lover’s Inn" />
                <meta
                    name="twitter:description"
                    content="A guided jungle trekking tour in Kalametiya with wildlife, temples and beach views."
                />
                <meta name="twitter:image" content="https://www.natureloversinn.com/images/jungel_10.jpeg" />

                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "TouristAttraction",
                  "name": "Kalametiya Jungle Walking Tour",
                  "description": "A guided jungle walking tour in Kalametiya, Sri Lanka. Explore wildlife, temples, lagoon views and hidden forest trails with Nature Lover’s Inn.",
                  "url": "https://www.natureloversinn.com/jungle",
                  "image": "https://www.natureloversinn.com/images/jungel_10.jpeg",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kalametiya",
                    "addressRegion": "Southern Province",
                    "addressCountry": "Sri Lanka"
                  },
                  "provider": {
                    "@type": "Organization",
                    "name": "Nature Lover's Inn",
                    "url": "https://www.natureloversinn.com/"
                  }
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
                    background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
                    color: "#fff",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    mb: 6,
                }}
            >
                <Typography variant={isSm ? "h5" : "h3"} fontWeight={800} gutterBottom>
                    Kalametiya Jungle Walking Tour 🌿
                </Typography>
                <Typography
                    variant={isSm ? "body1" : "h6"}
                    sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, opacity: 0.95 }}
                >
                    A walk into the heart of Sri Lanka’s wild beauty, from historic temples to untouched beaches.
                </Typography>
            </Box>

            <Container maxWidth="lg">
                {/* Featured Images */}
                <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
                    {featureImages.map(({ id, src, alt }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: 5,
                                    overflow: "hidden",
                                    transition: "0.3s",
                                    "&:hover": { transform: "scale(1.03)", boxShadow: 10 },
                                    height: "100%",
                                }}
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

                {/* What's Included */}
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
                        What’s Included in Your Tour
                    </Typography>

                    <List>
                        {[
                            "Guided walk with a local expert",
                            "Refreshing herbal drink (Belimal tea)",
                            "Traditional food pack (Coconut roti, sambol, etc.)",
                            "Fresh water in coconut shells & water bottles",
                            "First-aid kit for safety",
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
                        {[
                            { icon: <PlaceIcon color="primary" />, label: "Starting Point", value: "Nine Stupas Temple, Kalametiya" },
                            { icon: <AccessTimeIcon color="primary" />, label: "Duration", value: "~2 hours" },
                            { icon: <DirectionsWalkIcon color="primary" />, label: "Distance", value: "6–10 km (flexible)" },
                        ].map((detail, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <Box display="flex" alignItems="center">
                                    {detail.icon}
                                    <Typography variant="body1" sx={{ ml: 1.5 }}>
                                        <b>{detail.label}:</b> {detail.value}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" fontWeight={700} gutterBottom>
                        Highlights
                    </Typography>
                    <List>
                        {[
                            "Nine Stupas Temple & Kalametiya Beach",
                            "Tsunami Remains & Buffalo Fields",
                            "Kema Rock viewpoint & Bird Lagoon",
                            "Spot monkeys, peafowls, and wild pigs",
                        ].map((highlight, i) => (
                            <ListItem key={i} disableGutters>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={highlight} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" fontWeight={700} gutterBottom>
                        Packages
                    </Typography>
                    <Grid container spacing={2}>
                        {[
                            { persons: "1 Person", price: "24$" },
                            { persons: "2 Persons", price: "27$" },
                            { persons: "3 Persons", price: "30$" },
                            { persons: "4 Persons", price: "34$" },
                        ].map((pkg, i) => (
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
                        href="mailto:natureloversinn10@gmail.com?subject=Booking Inquiry&body=Hello, I would like to know more about your tours."
                    >
                        Email
                    </StyledButton>

                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<HikingIcon />}
                        onClick={() => navigate("/contact")}
                    >
                        Book Tour
                    </StyledButton>
                </Stack>

                {/* Photo Gallery */}
                <Typography
                    variant="h5"
                    fontWeight={700}
                    align="center"
                    sx={{ color: "#2e7d32", mb: 4 }}
                >
                    📸 Jungle Walk Moments
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
                                onClick={() => openLightbox(index)}
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
                        {/* Close button */}
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                color: "#fff",
                                zIndex: 10000,
                            }}
                            onClick={closeLightbox}
                        >
                            <CloseIcon fontSize={isSm ? "medium" : "large"} />
                        </IconButton>

                        {/* Previous arrow */}
                        <IconButton
                            sx={{
                                position: "absolute",
                                left: isSm ? 10 : 40,
                                color: "#fff",
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
                                maxHeight: "85vh",
                                maxWidth: "95vw",
                                borderRadius: 2,
                            }}
                        />

                        {/* Next arrow */}
                        <IconButton
                            sx={{
                                position: "absolute",
                                right: isSm ? 10 : 40,
                                color: "#fff",
                            }}
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

export default JungleTour;
