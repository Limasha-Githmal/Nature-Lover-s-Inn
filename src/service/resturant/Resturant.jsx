import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Box,
    Paper,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Your local images import
const images = [
    { id: 1, src: require('src/assets/gallery/1.jpg') },
    { id: 2, src: require('src/assets/gallery/2.jpg') },
    { id: 3, src: require('src/assets/gallery/3.jpg') },
    { id: 4, src: require('src/assets/gallery/4.jpg') },
    { id: 5, src: require('src/assets/gallery/5.jpg') },
    { id: 6, src: require('src/assets/gallery/6.jpg') },
];

const MenuCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '20px',
    boxShadow: theme.shadows[3],
    backgroundColor: '#fafafa',
}));

const Restaurant = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
                Turtle Bay Restaurant
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                Enjoy international and local cuisine prepared by our expert Sinhalese chef. Dine anywhere — beachside or in-house — and savor a fusion of flavors made with fresh local ingredients.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: '20px', overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={images[0].src}
                            alt="Sri Lankan Food"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Turtle Bay offers a variety of vegetarian and white meat curries inspired by India and Sri Lanka,
                                including red beet curry, dhal spinach curry, and banana pepper curry. Choose from the daily
                                catch, or even handpick your own fruits and vegetables nearby.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                Our fully licensed restaurant also serves fine wines, sparklings, and exotic cocktails to pair
                                with your meals. Cooking demonstrations are available for guests on request.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <MenuCard>
                        <Typography variant="h6" gutterBottom>
                            Our Menu Highlights
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Sri Lankan Rice & Curry"
                                    secondary="$6.00 - Traditional veg and non-veg curry set with rice"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Fresh Grilled Fish"
                                    secondary="$8.50 - Catch of the day grilled with local spices"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Banana Pepper Curry"
                                    secondary="$5.50 - Spicy banana pepper in a creamy coconut gravy"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Dhal Spinach Curry"
                                    secondary="$4.00 - Warm lentils simmered with spinach and spices"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Signature Cocktails"
                                    secondary="$3.50 - Classic and tropical drinks from our bar"
                                />
                            </ListItem>
                        </List>
                    </MenuCard>
                </Grid>
            </Grid>

            {/* Gallery Section */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Gallery
                </Typography>
                <Grid container spacing={2}>
                    {images.map(({ id, src }) => (
                        <Grid item xs={6} sm={4} md={2} key={id}>
                            <Card sx={{ borderRadius: '15px', overflow: 'hidden' }}>
                                <CardMedia component="img" height="140" image={src} alt={`Gallery image ${id}`} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    A True Sri Lankan Dining Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    From beachside dining to garden-fresh ingredients, Turtle Bay makes every meal an experience to remember.
                </Typography>
            </Box>
        </Container>
    );
};

export default Restaurant;
