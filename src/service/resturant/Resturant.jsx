import React from 'react';
import {
    Container,
    Typography,
    Box,
    Divider,
    Paper,
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';

// CORRECTED ICON IMPORTS
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WavesIcon from '@mui/icons-material/Waves';
import ForestIcon from '@mui/icons-material/Forest';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

// Make sure to add these fonts to your project's index.html or theme provider
// <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">


const Restaurants = () => {
    const menuData = {
        featuredItem: {
            name: "Pepper-Crusted Lagoon Crab",
            description: "A magnificent blue swimmer crab, caught fresh from the lagoon, generously crusted with hand-crushed Tellicherry peppercorns and gently pan-seared to perfection.",
            price: "4800",
            category: "From the Lagoon"
        },
        categories: [
            {
                name: "From the Lagoon",
                icon: <WavesIcon sx={{ color: '#000080' }} />,
                items: [
                    {
                        name: "Bird Lagoon Prawns",
                        description: "Jumbo prawns grilled with fragrant garlic, a squeeze of fresh lime, and aromatic green peppercorns.",
                        price: "3500"
                    },
                    {
                        name: "Coastal Pepper Ceviche",
                        description: "Cubes of the day's freshest fish, cured in tangy lime juice with fiery green chilies and a hint of pepper.",
                        price: "2800"
                    }
                ]
            },
            {
                name: "Beachside Specials",
                icon: <BeachAccessIcon sx={{ color: '#000080' }} />,
                items: [
                    {
                        name: "Pepper-Seared Tuna",
                        description: "Yellowfin tuna loin with a crisp sesame crust, served with a delicate wasabi-pepper sauce.",
                        price: "4200"
                    },
                    {
                        name: "Coconut Pepper Shrimp",
                        description: "Tender shrimp simmered in a rich, velvety broth of coconut milk infused with whole peppercorns.",
                        price: "3800"
                    }
                ]
            },
            {
                name: "Forest & Garden",
                icon: <ForestIcon sx={{ color: '#000080' }} />,
                items: [
                    {
                        name: "Wild Mushroom Pepper Pasta",
                        description: "A medley of foraged mushrooms tossed in a creamy parmesan sauce with freshly cracked black pepper.",
                        price: "3200"
                    },
                    {
                        name: "Herb-Crusted Chicken",
                        description: "Supreme of chicken with a crisp herb crust, resting on a bed of greens with a roasted pepper jus.",
                        price: "3500"
                    }
                ]
            }
        ]
    };

    return (
        <Box maxWidth="lg" sx={{
            // CHANGED: Increased bottom padding for more space at the end
            pt: 10,
            pb: 12,
            background: 'url("https://www.transparenttextures.com/patterns/subtle-zebra-3d.png") #fdfdfd',
        }}>
            <Paper elevation={5} sx={{
                p: { xs: 2, sm: 4, md: 6 },
                background: '#F0F8FF',
                border: '2px solid #000080',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                position: 'relative'
            }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 4, borderBottom: '1px solid #2E8B57', pb: 4 }}>
                    <MenuBookIcon sx={{ fontSize: '3rem', color: '#000080', mb: 1 }} />
                    <Typography variant="h3" component="h1" sx={{
                        fontWeight: 700,
                        color: 'black',
                        fontFamily: '"Cinzel", serif',
                        textTransform: 'uppercase',
                        letterSpacing: '3px'
                    }}>
                        Nature Lover's Inn
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                        color: '#2E8B57',
                        fontFamily: '"Lora", serif',
                        fontStyle: 'italic',
                        mt: 1
                    }}>
                        A Field Guide to the Flavors of Mannar
                    </Typography>
                </Box>

                {/* Featured Item */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" component="h2" sx={{
                        fontFamily: '"Cinzel", serif',
                        textAlign: 'center',
                        color: 'black',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        <StarIcon sx={{ color: '#2E8B57', fontSize: '2rem' }} /> Star of the Lagoon <StarIcon sx={{ color: '#2E8B57', fontSize: '2rem' }} />
                    </Typography>
                    <Paper elevation={3} sx={{
                        p: 3,
                        background: 'linear-gradient(135deg, rgba(240, 248, 255, 0.7), rgba(232, 245, 233, 0.7))',
                        border: '1px dashed #000080'
                    }}>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, fontFamily: '"Lora", serif', color: 'black' }}>
                            {menuData.featuredItem.name}
                        </Typography>
                        <Typography variant="body1" sx={{ my: 1, fontFamily: '"Lora", serif', fontStyle: 'italic', color: '#2E8B57' }}>
                            {menuData.featuredItem.description}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: '"Cinzel", serif', color: 'black', textAlign: 'right' }}>
                            LKR {menuData.featuredItem.price}
                        </Typography>
                    </Paper>
                </Box>

                <Divider sx={{ my: 5, borderColor: '#2E8B57', borderWidth: '1px', opacity: 0.5 }} />

                {/* Menu Grid */}
                <Grid container spacing={4}>
                    {menuData.categories.map((category) => (
                        <Grid item xs={12} md={6} key={category.name}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    {category.icon}
                                    <Typography variant="h5" component="h3" sx={{
                                        ml: 1.5,
                                        fontWeight: 700,
                                        fontFamily: '"Cinzel", serif',
                                        color: 'black'
                                    }}>
                                        {category.name}
                                    </Typography>
                                </Box>
                                <List>
                                    {category.items.map((item) => (
                                        <Paper key={item.name} variant="outlined" sx={{
                                            mb: 2,
                                            p: 2,
                                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                                                borderColor: '#2E8B57'
                                            }
                                        }}>
                                            <ListItem sx={{ p: 0 }}>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="h6" sx={{ fontFamily: '"Lora", serif', fontWeight: 600, color: 'black' }}>
                                                            {item.name}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <>
                                                            <Typography component="span" variant="body2" sx={{ display: 'block', my: 0.5, fontStyle: 'italic', color: '#2E8B57' }}>
                                                                {item.description}
                                                            </Typography>
                                                            <Typography component="span" variant="h6" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 600, color: 'black' }}>
                                                                LKR {item.price}
                                                            </Typography>
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                        </Paper>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* --- NEW COOKING CLASS SECTION --- */}
                <Divider sx={{ my: 6, borderColor: '#2E8B57', borderBottomWidth: '2px' }} />
                <Box sx={{ textAlign: 'center' }}>
                    <Paper elevation={3} sx={{
                        p: 4,
                        textAlign: 'center',
                        background: '#ffffff', // Navy gradient
                        color: 'black',
                        borderRadius: '8px'
                    }}>
                        <Typography variant="h3" component="h3" sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            color: '#1E90FF',
                            fontFamily: '"Cinzel", serif'
                        }}>
                            Traditional Cooking Classes
                        </Typography>

                        <Typography variant="body1" paragraph sx={{
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            mb: 3,
                            color: 'black',
                            fontFamily: '"Lora", serif'
                        }}>
                            Learn to prepare authentic Sri Lankan dishes with our expert chefs! Our cooking classes include market visits to select fresh ingredients and hands-on preparation of 5 traditional dishes.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            color= "success"
                            endIcon={<LocalDiningIcon />}
                            sx={{

                                borderRadius: '8px',
                                fontWeight: 'bold',
                                fontSize: '1rem'


                            }}
                        >
                            Book a Cooking Class
                        </Button>
                    </Paper>
                </Box>


                {/* --- FOOTER --- */}
                <Divider sx={{ my: 6, borderColor: '#2E8B57', borderBottomWidth: '2px' }} />
                <Box sx={{ textAlign: 'center' }}>
                    <EnergySavingsLeafIcon sx={{ color: '#2E8B57', mb: 2 }} />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', fontFamily: '"Lora", serif', color: '#000080', mb: 3 }}>
                        Our menu is a celebration of the day's catch and the season's yield. <br/> Offerings may vary to ensure we only serve the freshest ingredients.
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default Restaurants;