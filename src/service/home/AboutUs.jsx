import { Box, Typography, Grid, Card, CardContent,CardMedia } from "@mui/material";

export default function AboutUs() {
    return (
        <Box sx={{ textAlign: "center", p: 4 }}>
            {/* About Us */}
            <Typography variant="h6" gutterBottom>
                About Us
            </Typography>
            <Typography variant="h4" gutterBottom>
                Welcome to Our Peaceful Getaway
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}>
                Discover a serene escape nestled near the Kalametiya Bird Sanctuary and Fishing Beach.
                Our hotel offers comfortable rooms, exciting tours, and a delightful restaurant experience—all in one place.
            </Typography>

            {/* One Row - 3 Columns */}
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card>
                        <Typography variant="h6"> Lagoon Tours</Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/images/lagoon-tour.jpg" // replace with your image path or URL

                        />
                        <CardContent>

                            <Typography variant="body2">
                                Escape into nature at the breathtaking Kalametiya Bird Lagoon!
                                Join us for an unforgettable Boat Ride and Bird Watching experience amidst the serene
                                beauty of the Kalametiya Lagoon. Glide through calm waters surrounded by mangroves as
                                you spot a variety of native and migratory birds in their natural habitat. To enhance your experience,
                                we provide binoculars for birdwatching, life jackets for your safety, and refreshments including
                                chips, fresh fruits, and bottled water. It's the perfect way to relax, connect with nature, and
                                enjoy the peaceful charm of Kalametiya.


                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card>
                        <Typography variant="h6">Rooms</Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/images/lagoon-tour.jpg" // replace with your image path or URL

                        />
                        <CardContent>

                            <Typography variant="body2">
                                Relax in our cozy, well-furnished rooms designed for comfort and calm.
                                Our comfortable rooms are designed for a relaxing stay, featuring a king-size bed,
                                air conditioning, and hot water for your convenience. Whether you're here for adventure
                                or rest, you’ll enjoy a clean, peaceful environment surrounded by nature. We also
                                provide separate accommodation for guides and drivers, ensuring a hassle-free and
                                welcoming experience for all our guests.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card>
                        <Typography variant="h6">Restaurant</Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/images/lagoon-tour.jpg" // replace with your image path or URL

                        />
                        <CardContent>

                            <Typography variant="body2">
                                Dine Where Nature Meets Flavor
                                At Nature Lover's Inn, we invite you to enjoy a dining experience that blends
                                the authentic taste of Sri Lankan cuisine with select international favorites,
                                all in the heart of Kalametiya’s breathtaking natural beauty.
                                Whether you're seated in our cozy indoor space or relaxing on the open-air patio,
                                you’ll be surrounded by the peaceful sights and sounds of nature. Just moments away
                                from the Kalametiya Bird Sanctuary and fishing beach, our restaurant is the perfect
                                stop for both food lovers and nature explorers.
                                Come discover warm hospitality, fresh local ingredients, and a serene environment—only at Nature Lover's Inn.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
