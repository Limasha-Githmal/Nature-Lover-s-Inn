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
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";


// Using the same image paths as JungleTour.jsx
const featureImages = [
    { id: 1, src: "src/assets/image/jungel_11.jpeg", alt: "Fresh Ingredients" },
    { id: 2, src: "src/assets/image/jungel_12.jpeg", alt: "Hands-On Cooking" },
    { id: 3, src: "src/assets/image/jungel_7.jpeg", alt: "Delicious Meal" },
];

const galleryImages = [
    { id: 1, src: "src/assets/image/jungel_1.jpeg", alt: "Cooking Class Experience 1" },
    { id: 2, src: "src/assets/image/jungel_2.jpeg", alt: "Cooking Class Experience 2" },
    { id: 3, src: "src/assets/image/jungel_3.jpeg", alt: "Cooking Class Experience 3" },
    { id: 4, src: "src/assets/image/jungel_4.jpeg", alt: "Cooking Class Experience 4" },
    { id: 5, src: "src/assets/image/jungel_5.jpeg", alt: "Cooking Class Experience 5" },
    { id: 6, src: "src/assets/image/jungel_6.jpeg", alt: "Cooking Class Experience 6" },
    { id: 7, src: "src/assets/image/jungel_13.jpeg", alt: "Cooking Class Experience 7" },
    { id: 8, src: "src/assets/image/jungel_8.jpeg", alt: "Cooking Class Experience 8" },
    { id: 9, src: "src/assets/image/jungel_9.jpeg", alt: "Cooking Class Experience 9" },
    { id: 10, src: "src/assets/image/jungel_10.jpeg", alt: "Cooking Class Experience 10" },
    { id: 11, src: "src/assets/image/jungel_14.jpeg", alt: "Cooking Class Experience 11" },
    { id: 12, src: "src/assets/image/jungel_15.jpeg", alt: "Cooking Class Experience 12" },
    { id: 13, src: "src/assets/image/jungle_16.jpeg", alt: "Cooking Class Experience 13" },
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

const CookingClass = () => {
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
                    background: "linear-gradient(135deg, #ff8c00, #ffc107)",
                    color: "#fff",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    mb: 6,
                }}
            >
                <Typography variant={isSm ? "h4" : "h3"} fontWeight={800} gutterBottom>
                    Sri Lankan Cooking Experience 🍛
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, opacity: 0.95 }}
                >
                    Learn, cook, and taste authentic Sri Lankan cuisine in a hands-on, fun-filled class.
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
                                    height: '100%'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{
                                        width: "100%",
                                        height: 300, // Matching the JungleTour featured image height
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
                        {[
                            { icon: <AccessTimeIcon color="primary" />, label: "Duration", value: "3–4 hours" },

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
                        Packages
                    </Typography>
                    <Grid container spacing={2}>
                        {[
                            { persons: "1 Person", price: "40$" },
                            { persons: "2 Persons", price: "70$" },
                            { persons: "3 Persons", price: "100$" },
                            { persons: "4 Persons", price: "120$" },
                        ].map((pkg, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
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
                        startIcon={<RestaurantIcon />}
                        onClick={() => alert("Booking functionality coming soon!")}
                    >
                        Book Class
                    </StyledButton>
                </Stack>

                {/* Photo Gallery */}
                <Typography
                    variant="h5"
                    fontWeight={700}
                    align="center"
                    sx={{ color: "#ff8c00", mb: 4 }}
                >
                    📸 Cooking Class Moments
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
                                    height: '250px' // Matching the JungleTour gallery image height
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

export default CookingClass;
