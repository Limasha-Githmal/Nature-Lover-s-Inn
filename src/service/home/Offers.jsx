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
import dayPackageImg from "../../assets/image/dayPackage.png";
import dayNightPackageImg from "../../assets/image/dayNightPackage.png";

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
