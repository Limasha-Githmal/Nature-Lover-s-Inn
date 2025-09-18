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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import HikingIcon from "@mui/icons-material/Hiking";

const heroImage = "src/assets/jungle/hero-jungle.jpg"; // Replace with real jungle hero image

const featureImages = [
    { id: 1, src: "src/assets/jungle/nine-stupas.jpg", alt: "Nine Stupas Temple" },
    { id: 2, src: "src/assets/jungle/beach.jpg", alt: "Kalametiya Beach" },
    { id: 3, src: "src/assets/jungle/buffalo.jpg", alt: "Buffalo Fields" },
];

// ✅ Manually listed 12 gallery photos
const galleryImages = [
    { id: 1, src: "src/assets/jungle/gallery/photo1.jpg", alt: "Jungle Walk Experience 1" },
    { id: 2, src: "src/assets/jungle/gallery/photo2.jpg", alt: "Jungle Walk Experience 2" },
    { id: 3, src: "src/assets/jungle/gallery/photo3.jpg", alt: "Jungle Walk Experience 3" },
    { id: 4, src: "src/assets/jungle/gallery/photo4.jpg", alt: "Jungle Walk Experience 4" },
    { id: 5, src: "src/assets/jungle/gallery/photo5.jpg", alt: "Jungle Walk Experience 5" },
    { id: 6, src: "src/assets/jungle/gallery/photo6.jpg", alt: "Jungle Walk Experience 6" },
    { id: 7, src: "src/assets/jungle/gallery/photo7.jpg", alt: "Jungle Walk Experience 7" },
    { id: 8, src: "src/assets/jungle/gallery/photo8.jpg", alt: "Jungle Walk Experience 8" },
    { id: 9, src: "src/assets/jungle/gallery/photo9.jpg", alt: "Jungle Walk Experience 9" },
    { id: 10, src: "src/assets/jungle/gallery/photo10.jpg", alt: "Jungle Walk Experience 10" },
    { id: 11, src: "src/assets/jungle/gallery/photo11.jpg", alt: "Jungle Walk Experience 11" },
    { id: 12, src: "src/assets/jungle/gallery/photo12.jpg", alt: "Jungle Walk Experience 12" },
];

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

const JungleWalk = () => {
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
                        Jungle Walking Tour – Kalametiya 🌿
                    </Typography>
                    <Typography variant="h6">
                        A walk into the heart of Sri Lanka’s wild beauty.
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
                        background: "linear-gradient(90deg, #4caf50, #81c784)",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        mb: 2,
                        mt: 0.5,
                    }}
                >
                    Highlights of the Jungle Walk
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
                        backgroundColor: "#f4e1d2", // light brown
                        borderRadius: 4,
                        p: { xs: 3, md: 5 },
                        boxShadow: 3,
                        mb: 6,
                    }}
                >
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Tour Details
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", lineHeight: 1.9 }}>
                        {`📍 Starting Point: Nine Stupas Temple, Kalametiya
⏱ Duration: ~2 hours
🚶‍♂️ Distance: 6–10 km (you choose!)
🍴 Includes: Food Pack, Herbal drink, Water bottles, Guided walk, First-aid kit

🌿 Our Highlights:
- Nine Stupas Temple: Start your journey at a historic and spiritual site.
- Kalametiya Beach: Walk along a serene, unspoiled stretch of golden sand.
- Tsunami Remains: Witness stories of resilience in the ruins of old houses.
- Buffalo Fields: See buffaloes raised for fresh milk.
- Kema Rock: Climb to a breathtaking viewpoint overlooking Kalametiya village, the bird lagoon & rare plants.
- Kalametiya Bird Lagoon: Home to 120+ species of local & migratory birds.
- Jungle Playground: Spot monkeys, peafowls, buffalos & wild pigs.

🥗 Refreshments Included:
- Food Pack: Coconut roti with sambol, banana & sweet pancake.
- Herbal Drink: Belimal tea with jaggery.
- Fresh Drink: Pure water served in coconut shells.
- Water bottles provided for your walk.

🌍 Why Choose Our Jungle Walk?
✔️ Guided by locals who know the land
✔️ Flexible walking distance (6–10 km)
✔️ Culture, nature & wildlife in one experience
✔️ Traditional Sri Lankan refreshments included
✔️ Perfect for bird watchers, nature lovers & adventure seekers`}
                    </Typography>
                </Box>

                {/* Photo Gallery (12 photos) */}
                <Typography
                    variant={isSm ? "h5" : "h4"}
                    fontWeight={800}
                    align="center"
                    sx={{ mb: 2, mt: 0.5 }}
                >
                    Jungle Walk Moments 📸
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
                        href="https://wa.me/94760169518" // WhatsApp from doc
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
                        color="warning"
                        startIcon={<HikingIcon />}
                        onClick={() => alert("Booking functionality coming soon!")}
                    >
                        Book Tour
                    </StyledButton>
                </Stack>
            </Container>
        </Box>
    );
};

export default JungleWalk;
