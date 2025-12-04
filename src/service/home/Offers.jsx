import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import KingBedIcon from "@mui/icons-material/KingBed";
import { Link } from "react-router-dom"; // 👈 import Link
import dayPackageImg from "../../assets/image/daypackage.png";
import dayNightPackageImg from "../../assets/image/daynightpackage.png";
import {Helmet} from "react-helmet";

const offers = [
    {
        id: 1,
        title: "Day Experience Package",
        description:
            "Enjoy a full day in Kalametiya with 3 activities:\n\n✔️ Bird Watching Tour\n✔️ Cooking Class\n✔️ Jungle Walking Tour\n\nAll in one day for an unforgettable eco-tourism adventure.",
        image: dayPackageImg,
        buttonText: "Book Now",
    },
    {
        id: 2,
        title: "Day + Night Deluxe Package",
        description:
            "Make it a memorable getaway with our complete package:\n\n✔️ Bird Watching Tour\n✔️ Cooking Class\n✔️ Jungle Walking Tour\n✔️ Deluxe Double Room (1 Night)\n✔️ Breakfast for Next Morning",
        image:dayNightPackageImg,
        buttonText: "Book Deluxe Package",
    },
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

const Offers = () => {
    return (
        <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
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
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        mb: 5,
                        fontSize: { xs: "28px", sm: "32px", md: "36px" },
                        color: "#2e2e2e",
                    }}
                >
                    Special Offers 🌟
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {offers.map((offer) => (
                        <Grid item xs={12} md={6} key={offer.id}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    boxShadow: 4,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={offer.image}
                                    alt={offer.title}
                                    sx={{ objectFit: "cover" }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        fontWeight={700}
                                        gutterBottom
                                        sx={{ display: "flex", alignItems: "center" }}
                                    >
                                        {offer.id === 1 ? (
                                            <LocalOfferIcon color="success" sx={{ mr: 1 }} />
                                        ) : (
                                            <KingBedIcon color="primary" sx={{ mr: 1 }} />
                                        )}
                                        {offer.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ whiteSpace: "pre-line", lineHeight: 1.8 }}
                                    >
                                        {offer.description}
                                    </Typography>
                                </CardContent>
                                <Stack sx={{ p: 3 }} alignItems="center">
                                    {/* 👇 Contact page link */}
                                    <StyledButton
                                        component={Link}
                                        to="/contact"
                                        variant="contained"
                                        color="primary"
                                    >
                                        {offer.buttonText}
                                    </StyledButton>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Offers;
