import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

// Import images properly
import image1 from "../../assets/image/lagoonC.jpeg";
import image2 from "../../assets/image/room_1.jpeg";
import image3 from "../../assets/image/gallery_3.jpeg";
import image5 from "../../assets/image/jungel_2.jpeg";

const App = () => {
    const tourData = [
        {
            id: 1,
            image: image1,
            title: "Lagoon Tour",
            description: "Bird watching in Sri Lanka",
            path: "/lagoon-tour",
        },
        {
            id: 2,
            image: image2,
            title: "Rooms",
            description: "Comfortable nature views",
            path: "/rooms",
        },
        {
            id: 3,
            image: image3,
            title: "Restaurant",
            description: "Local ingredients meals",
            path: "/restaurant",
        },
        {
            id: 4,
            image:
                "https://www.falcortravels.com/wp-content/uploads/2018/11/professional_cooking_courses_for_groups_in_italy-1500x900.jpg",
            title: "Cooking Classes",
            description: "Learn local recipes",
            path: "/cooking",
        },
        {
            id: 5,
            image: image5,
            title: "Jungle Walking Tour",
            description: "Explore Kalametiya's wild beauty",
            path: "/jungle",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                p: { xs: 2, sm: 3, lg: 4 },
                fontFamily: "Inter, sans-serif",
                color: "text.primary",

            }}
        >
            {/* Section Title */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "600",
                        mb: 3,
                    }}
                >
                    About
                </Typography>
            </Box>

            {/* Grid of Tours */}
            <Grid
                container
                spacing={3}
                sx={{
                    justifyContent: "center",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                }}
            >
                {tourData.map((tour) => (
                    <Grid item key={tour.id} xs={12} sm={6} md={3}>
                        <Card
                            component={Link}
                            to={tour.path}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s",
                                textDecoration: "none", // remove underline
                                color: "inherit", // keep text color
                                "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={tour.image}
                                alt={tour.title}
                                sx={{
                                    objectFit: "cover",
                                    width: "100%",
                                    aspectRatio: "4/3",
                                }}
                            />
                            <CardContent
                                sx={{
                                    p: 2,
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    sx={{
                                        fontWeight: "600",
                                        mb: 1,
                                        textAlign: "center",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    {tour.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        textAlign: "center",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {tour.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default App;
