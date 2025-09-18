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
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const heroImage = "src/assets/cooking/hero-cooking.jpg"; // Replace with real hero image

const featureImages = [
    { id: 1, src: "src/assets/cooking/main-dish.jpg", alt: "Sri Lankan Main Dish" },
    { id: 2, src: "src/assets/cooking/vegetables.jpg", alt: "Traditional Vegetable Curries" },
    { id: 3, src: "src/assets/cooking/sweets.jpg", alt: "Sri Lankan Sweets" },
];

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `src/assets/cooking/gallery/photo${i + 1}.jpg`, // Replace with real paths
    alt: `Cooking Class Experience ${i + 1}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "25px",
    padding: "10px 22px",
    fontWeight: 600,
    textTransform: "none",
    transition: "all 0.3s ease",
    boxShadow: theme.shadows[2],
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: theme.shadows[6],
    },
}));

const CookingClass = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    height: isSm ? "50vh" : "70vh",
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                    px: 2,
                }}
            >
                <Box sx={{ backgroundColor: "rgba(0,0,0,0.5)", p: 3, borderRadius: 3 }}>
                    <Typography variant={isSm ? "h4" : "h2"} fontWeight={800} gutterBottom>
                        Sri Lankan Cooking Experience 🍛
                    </Typography>
                    <Typography variant="h6">
                        Learn. Cook. Taste. Enjoy authentic Sri Lankan cuisine with us.
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ py: 5 }}>
                {/* Intro Features */}
                <Typography
                    variant={isSm ? "h5" : "h4"}
                    fontWeight={800}
                    align="center"
                    sx={{
                        background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        mb: 2, // reduced bottom margin
                        mt: 0.5, // reduced top margin
                    }}
                >
                    What’s Included in the Class
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ mb: 5 }}>
                    {featureImages.map(({ id, src, alt }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: 6,
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 10,
                                    },
                                }}
                            >
                                <CardMedia component="img" height="220" image={src} alt={alt} />
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600} align="center">
                                        {alt}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Details Section */}
                <Box
                    sx={{
                        backgroundColor: "#f4e1d2", // light brown shade
                        borderRadius: 4,
                        p: { xs: 3, md: 5 },
                        boxShadow: 3,
                        mb: 6,
                    }}
                >
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Class Details
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", lineHeight: 1.9 }}>
                        {`👩‍🍳 In this immersive cooking class, you will:
✔️ Cook one authentic Sri Lankan main dish (such as chicken, fish, or lentils)
✔️ Prepare 5 different vegetable curries using seasonal produce
✔️ Learn how to make traditional Sri Lankan sweets & desserts
✔️ Discover the secrets of our famous spices and preparation methods
✔️ Experience hands-on cooking with guidance from local chefs
✔️ Enjoy your freshly cooked meal in our restaurant’s dining area 🍽
✔️ Receive a recipe booklet so you can recreate these dishes at home 📖
✔️ Share stories, culture, and food around the table 🫱🏽‍🫲🏼

⏳ Duration: 3–4 hours (morning or evening sessions available)
💰 Price: 40$ per person
📍 Location: Our restaurant & cooking studio (easily accessible in town)

This is more than a class — it’s a cultural journey into Sri Lankan cuisine. Whether 
you’re a beginner or a passionate foodie, you’ll leave with new skills, memories, 
and the taste of Sri Lanka in your heart! 🌶🥥🍌`}
                    </Typography>
                </Box>

                {/* Photo Gallery */}
                <Typography
                    variant={isSm ? "h5" : "h4"}
                    fontWeight={800}
                    align="center"
                    sx={{ mb: 2, mt: 0.5 }}
                >
                    Cooking Class Moments 📸
                </Typography>

                <Grid container spacing={2} sx={{ mb: 6 }}>
                    {galleryImages.map(({ id, src, alt }) => (
                        <Grid item xs={6} sm={4} md={3} key={id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    "&:hover img": { transform: "scale(1.05)" },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={src}
                                    alt={alt}
                                    sx={{ transition: "transform 0.4s ease", height: 180, objectFit: "cover" }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Buttons */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <StyledButton
                        variant="contained"
                        color="success"
                        startIcon={<WhatsAppIcon />}
                        component={Link}
                        href="https://wa.me/yourWhatsAppNumber"
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
                        href="mailto:youremail@example.com"
                        target="_blank"
                        rel="noopener"
                    >
                        Gmail
                    </StyledButton>

                    <StyledButton
                        variant="contained"
                        color="warning"
                        startIcon={<RestaurantIcon />}
                        onClick={() => alert("Booking functionality coming soon!")}
                    >
                        Book Class
                    </StyledButton>
                </Stack>
            </Container>
        </Box>
    );
};

export default CookingClass;
