import React from 'react';
import {
    Container,
    Typography,
    Grid,
    CardContent,
    CardMedia,
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

    // Sri Lankan food menu items with internet images
    const menuItems = [
        {
            name: "Kottu Roti",
            description: "Chopped roti stir-fried with vegetables, eggs, and your choice of meat",
            price: "$6.50",
            image: "https://source.unsplash.com/random/600x400/?kottu+roti"
        },
        {
            name: "Red Rice & Curry",
            description: "Traditional red rice served with 3 vegetable curries and your choice of protein",
            price: "$7.00",
            image: "https://source.unsplash.com/random/600x400/?sri+lanka+rice+curry"
        },
        {
            name: "Hoppers (Appa)",
            description: "Bowl-shaped pancakes made with fermented rice flour and coconut milk",
            price: "$3.50",
            image: "https://source.unsplash.com/random/600x400/?hoppers+sri+lanka"
        },
        {
            name: "String Hoppers",
            description: "Steamed rice noodles served with coconut sambol and curry",
            price: "$4.00",
            image: "https://source.unsplash.com/random/600x400/?string+hoppers"
        },
        {
            name: "Pittu",
            description: "Steamed cylinders of roasted rice flour and coconut",
            price: "$4.50",
            image: "https://source.unsplash.com/random/600x400/?pittu"
        },
        {
            name: "Lamprais",
            description: "Dutch-influenced dish with rice, meat, and sambols wrapped in banana leaf",
            price: "$8.00",
            image: "https://source.unsplash.com/random/600x400/?lamprais"
        },
        {
            name: "Fish Ambul Thiyal",
            description: "Sour fish curry with goraka (tamarind) and spices",
            price: "$9.00",
            image: "https://source.unsplash.com/random/600x400/?fish+curry+sri+lanka"
        },
        {
            name: "Chicken Curry",
            description: "Traditional Sri Lankan chicken curry with rich coconut gravy",
            price: "$7.50",
            image: "https://source.unsplash.com/random/600x400/?sri+lanka+chicken+curry"
        },
        {
            name: "Dhal Curry",
            description: "Lentil curry with coconut milk and tempered spices",
            price: "$4.00",
            image: "https://source.unsplash.com/random/600x400/?dhal+curry"
        },
        {
            name: "Pol Sambol",
            description: "Spicy coconut relish with lime, chili and Maldive fish",
            price: "$3.00",
            image: "https://source.unsplash.com/random/600x400/?pol+sambol"
        },
        {
            name: "Wambatu Moju",
            description: "Caramelized eggplant pickle with spices and vinegar",
            price: "$4.00",
            image: "https://source.unsplash.com/random/600x400/?wambatu+moju"
        },
        {
            name: "Gotu Kola Sambol",
            description: "Refreshing pennywort salad with coconut and lime",
            price: "$3.50",
            image: "https://source.unsplash.com/random/600x400/?gotu+kola"
        },
        {
            name: "Mango Curry",
            description: "Sweet and sour mango cooked in coconut milk gravy",
            price: "$4.50",
            image: "https://source.unsplash.com/random/600x400/?mango+curry"
        },
        {
            name: "Parippu Wade",
            description: "Crispy lentil fritters with spices",
            price: "$3.00",
            image: "https://source.unsplash.com/random/600x400/?parippu+wade"
        },
        {
            name: "Kiri Bath",
            description: "Coconut milk rice, traditionally served for special occasions",
            price: "$5.00",
            image: "https://source.unsplash.com/random/600x400/?kiri+bath"
        },
        {
            name: "Watalappan",
            description: "Sri Lankan coconut custard pudding with jaggery and cardamom",
            price: "$4.50",
            image: "https://source.unsplash.com/random/600x400/?watalappan"
        }
    ];

    return (
        <Container maxWidth="lg" sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://source.unsplash.com/random/1920x1080/?sri+lanka+texture)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            {/* Introduction Section with more bottom margin */}
            <Paper elevation={4} sx={{
                p: { xs: 3, md: 6 },
                mb: 10, // Increased bottom margin
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4
                }}>
                    <Restaurant sx={{
                        fontSize: '3rem',
                        color: 'primary.main',
                        mr: 3,
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '2rem'
                        }
                    }} />
                    <Typography variant="h3" component="h1" sx={{
                        fontWeight: 'bold',
                        color: 'primary.main',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '1.8rem'
                        }
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

                <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://source.unsplash.com/random/600x400/?sri+lanka+market"
                            alt="Sri Lankan spices"
                            sx={{ borderRadius: '8px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                    </Grid>
                </Grid>
            </Paper>

            {/* Traditional Menu Section */}
            <Typography variant="h3" component="h2" sx={{
                fontWeight: 'bold',
                mb: 8, // Increased bottom margin
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '2rem',
                    mb: 6
                }
            }}>
                Our Traditional Menu
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}> {/* Increased bottom margin */}
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
                            {/* Food Image */}
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                    objectFit: 'cover',
                                    borderBottom: '2px solid #d4b483'
                                }}
                            />

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
                                    fontSize: '1.5rem',
                                    minHeight: '64px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
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
                                    fontStyle: 'italic',
                                    minHeight: '72px'
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
                                        fontWeight: 'bold',
                                        fontSize: '1rem'
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

            {/* Special Offer Section with more bottom margin */}
            <Paper elevation={4} sx={{
                p: { xs: 3, md: 4 },
                mb: 8, // Increased bottom margin
                width: '100%',
                maxWidth: '800px',
                backgroundColor: 'rgba(139, 0, 0, 0.8)',
                color: 'white',
                borderRadius: '16px',
                textAlign: 'center',
                border: '2px solid #d4b483',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(245,232,201,0.2) 0%, rgba(139,0,0,0) 70%)',
                    transform: 'translate(50px, -50px)'
                }} />

                <Typography variant="h4" component="h3" sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#f5e8c9',
                    position: 'relative',
                    zIndex: 1
                }}>
                    Traditional Cooking Classes
                </Typography>

                <Typography variant="body1" paragraph sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 3,
                    position: 'relative',
                    zIndex: 1
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
                        },
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    Book a Cooking Class
                </Button>
            </Paper>
        </Container>
    );
};

export default Restaurants;