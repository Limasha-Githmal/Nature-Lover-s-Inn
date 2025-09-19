import React from "react";
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
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import HikingIcon from "@mui/icons-material/Hiking";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const featureImages = [
    { id: 1, src: "src/assets/image/jungel_11.jpeg", alt: "Nine Stupas Temple" },
    { id: 2, src: "src/assets/image/jungel_12.jpeg", alt: "Kalametiya Beach" },
    { id: 3, src: "src/assets/image/jungel_7.jpeg", alt: "Buffalo Fields" },
];

const galleryImages = [
    { id: 1, src: "src/assets/image/jungel_1.jpeg", alt: "Jungle Walk Experience 1" },
    { id: 2, src: "src/assets/image/jungel_2.jpeg", alt: "Jungle Walk Experience 2" },
    { id: 3, src: "src/assets/image/jungel_3.jpeg", alt: "Jungle Walk Experience 3" },
    { id: 4, src: "src/assets/image/jungel_4.jpeg", alt: "Jungle Walk Experience 4" },
    { id: 5, src: "src/assets/image/jungel_5.jpeg", alt: "Jungle Walk Experience 5" },
    { id: 6, src: "src/assets/image/jungel_6.jpeg", alt: "Jungle Walk Experience 6" },
    { id: 7, src: "src/assets/image/jungel_13.jpeg", alt: "Jungle Walk Experience 7" },
    { id: 8, src: "src/assets/image/jungel_8.jpeg", alt: "Jungle Walk Experience 8" },
    { id: 9, src: "src/assets/image/jungel_9.jpeg", alt: "Jungle Walk Experience 9" },
    { id: 10, src: "src/assets/image/jungel_10.jpeg", alt: "Jungle Walk Experience 10" },
    { id: 11, src: "src/assets/image/jungel_14.jpeg", alt: "Jungle Walk Experience 11" },
    { id: 12, src: "src/assets/image/jungel_15.jpeg", alt: "Jungle Walk Experience 12" },
    { id: 13, src: "src/assets/image/jungle_16.jpeg", alt: "Jungle Walk Experience 13" },
];

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

    return (
        <Box sx={{ bgcolor: "#f8fbfc", pb: 8 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    py: 8,
                    px: 2,
                    background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
                    color: "#fff",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    mb: 6,
                }}
            >
                <Typography variant={isSm ? "h4" : "h3"} fontWeight={800} gutterBottom>
                    Kalametiya Jungle Walking Tour 🌿
                </Typography>
                <Typography
                    variant="h6"
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
                                    height: '100%' // Ensure card fills the grid space
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: "100%",
                                        height: 300, // Increased height for more width/presence
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

                <Card
                    sx={{
                        borderRadius: 4,
                        p: 4,
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
                            { persons: "1 Person", price: "10$" },
                            { persons: "2 Persons", price: "15$" },
                            { persons: "3 Persons", price: "20$" },
                            { persons: "4 Persons", price: "40$" },
                        ].map((pkg, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 2,
                                        p: 2,
                                        textAlign: "center",
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
                    sx={{ mb: 6 }}
                >
                    <StyledButton
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
                        variant="outlined"
                        color="primary"
                        startIcon={<EmailIcon />}
                        component={Link}
                        href="mailto:natureloversinn10@gmail.com"
                        target="_blank"
                        rel="noopener"
                    >
                        Email
                    </StyledButton>

                    <StyledButton
                        variant="contained"
                        color="primary"
                        startIcon={<HikingIcon />}
                        onClick={() => alert("Booking functionality coming soon!")}
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
                <Grid container spacing={2}>
                    {galleryImages.map(({ id, src, alt }) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
                                    transition: "0.3s",
                                    height: '250px' // Set a fixed height for all gallery cards
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
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

export default JungleTour;
