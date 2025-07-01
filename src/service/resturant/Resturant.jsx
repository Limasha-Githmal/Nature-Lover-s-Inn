import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Divider,
    Paper,
    useTheme,
    Button
} from '@mui/material';
import {
    Restaurant,
    LocalDining,
    EmojiFoodBeverage,
    RiceBowl,
    KebabDining,
    LunchDining
} from '@mui/icons-material';

const Restaurants = () => {
    const theme = useTheme();

    // Sri Lankan food menu items
    const menuItems = [
        { name: "Kottu Roti", description: "Chopped roti stir-fried with vegetables, eggs, and your choice of meat", price: "$6.50" },
        { name: "Red Rice & Curry", description: "Traditional red rice served with 3 vegetable curries and your choice of protein", price: "$7.00" },
        { name: "Hoppers (Appa)", description: "Bowl-shaped pancakes made with fermented rice flour and coconut milk", price: "$3.50" },
        { name: "String Hoppers", description: "Steamed rice noodles served with coconut sambol and curry", price: "$4.00" },
        { name: "Pittu", description: "Steamed cylinders of roasted rice flour and coconut", price: "$4.50" },
        { name: "Lamprais", description: "Dutch-influenced dish with rice, meat, and sambols wrapped in banana leaf", price: "$8.00" },
        { name: "Fish Ambul Thiyal", description: "Sour fish curry with goraka (tamarind) and spices", price: "$9.00" },
        { name: "Chicken Curry", description: "Traditional Sri Lankan chicken curry with rich coconut gravy", price: "$7.50" },
        { name: "Dhal Curry", description: "Lentil curry with coconut milk and tempered spices", price: "$4.00" },
        { name: "Pol Sambol", description: "Spicy coconut relish with lime, chili and Maldive fish", price: "$3.00" },
        { name: "Wambatu Moju", description: "Caramelized eggplant pickle with spices and vinegar", price: "$4.00" },
        { name: "Gotu Kola Sambol", description: "Refreshing pennywort salad with coconut and lime", price: "$3.50" },
        { name: "Mango Curry", description: "Sweet and sour mango cooked in coconut milk gravy", price: "$4.50" },
        { name: "Parippu Wade", description: "Crispy lentil fritters with spices", price: "$3.00" },
        { name: "Kiri Bath", description: "Coconut milk rice, traditionally served for special occasions", price: "$5.00" },
        { name: "Watalappan", description: "Sri Lankan coconut custard pudding with jaggery and cardamom", price: "$4.50" }
    ];

    return (
        <Container maxWidth="lg" sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'url(/images/sri-lanka-texture.jpg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            {/* Introduction Section */}
            <Paper elevation={4} sx={{
                p: { xs: 3, md: 6 },
                mb: 8,
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                borderRadius: '16px'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4
                }}>
                    <Restaurant sx={{
                        fontSize: '3rem',
                        color: 'primary.main',
                        mr: 3
                    }} />
                    <Typography variant="h3" component="h1" sx={{
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}>
                        Our Sri Lankan Restaurant
                    </Typography>
                </Box>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3
                }}>
                    Sri Lankan cuisine is a vibrant fusion of flavors, shaped by the island's rich history and abundant natural resources.
                    Our restaurant brings you authentic tastes passed down through generations, using traditional cooking methods and
                    locally-sourced ingredients. From the fiery heat of our curries to the delicate balance of our sambols, each dish
                    tells a story of our cultural heritage.
                </Typography>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3
                }}>
                    The foundation of Sri Lankan cooking lies in our unique spice blends - roasted curry powders, tempered with mustard seeds,
                    curry leaves, and pandan. Coconut milk adds creaminess to curries, while ingredients like goraka (tamarind) and
                    jaggery (palm sugar) provide the characteristic sweet-sour notes that make our cuisine unforgettable.
                </Typography>

                <Typography variant="body1" sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8
                }}>
                    Our chefs prepare each dish with care, honoring traditional recipes while accommodating modern tastes. Whether you're
                    trying Sri Lankan food for the first time or craving familiar flavors from home, we invite you to experience the
                    diversity of our island's culinary traditions.
                </Typography>
            </Paper>

            {/* Traditional Menu Section */}
            <Typography variant="h3" component="h2" sx={{
                fontWeight: 'bold',
                mb: 6,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                textAlign: 'center'
            }}>
                Our Traditional Menu
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
                {menuItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={4} sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'linear-gradient(to bottom, #f5e8c9, #e8d8a6)',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '8px',
                            border: '1px solid #d4b483',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <CardContent sx={{
                                flexGrow: 1,
                                p: 3,
                                position: 'relative',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: 'linear-gradient(to right, #8b0000, #d4b483)'
                                }
                            }}>
                                <Typography variant="h5" component="h3" sx={{
                                    fontWeight: 'bold',
                                    color: '#8b0000',
                                    mb: 1,
                                    fontFamily: '"Kandy", cursive',
                                    fontSize: '1.5rem'
                                }}>
                                    {item.name}
                                </Typography>

                                <Divider sx={{
                                    my: 2,
                                    borderColor: '#d4b483',
                                    borderWidth: '1px'
                                }} />

                                <Typography variant="body1" sx={{
                                    mb: 3,
                                    lineHeight: 1.6,
                                    color: '#5a3e1f',
                                    fontStyle: 'italic'
                                }}>
                                    {item.description}
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mt: 'auto'
                                }}>
                                    <Box sx={{
                                        width: '40px',
                                        height: '40px',
                                        bgcolor: '#8b0000',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold'
                                    }}>
                                        {index + 1}
                                    </Box>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 'bold',
                                        color: '#8b0000',
                                        fontSize: '1.3rem'
                                    }}>
                                        {item.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Special Offer Section */}
            <Paper elevation={4} sx={{
                p: { xs: 3, md: 4 },
                mb: 8,
                width: '100%',
                maxWidth: '800px',
                backgroundColor: 'rgba(139, 0, 0, 0.8)',
                color: 'white',
                borderRadius: '16px',
                textAlign: 'center',
                border: '2px solid #d4b483'
            }}>
                <Typography variant="h4" component="h3" sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#f5e8c9'
                }}>
                    Traditional Cooking Classes
                </Typography>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 3
                }}>
                    Learn to prepare authentic Sri Lankan dishes with our expert chefs! Our cooking classes include market visits to select fresh ingredients and hands-on preparation of 5 traditional dishes.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    endIcon={<LocalDining />}
                    sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        backgroundColor: '#f5e8c9',
                        color: '#8b0000',
                        '&:hover': {
                            backgroundColor: '#e8d8a6'
                        }
                    }}
                >
                    Book a Cooking Class
                </Button>
            </Paper>
        </Container>
    );
};

export default Restaurants;