import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery, useTheme, keyframes, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';

// Define the bubble animation
const bubbleAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
`;

const ContactBar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                backgroundColor: '#f4f4f4',
                width: '100%',
                py: 1,
                px: 2,
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: isSmallScreen ? 1 : 0,
                    width: '100%',
                }}
            >
                {/* Left Section: Contact Details Only */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    gap: isSmallScreen ? 1 : 2,
                    flexWrap: 'wrap',
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <WhatsAppIcon color="success" fontSize={isSmallScreen ? 'small' : 'medium'} />
                        <Typography variant={isSmallScreen ? 'body2' : 'body1'}>
                            +94 71 234 5678
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Email color="primary" fontSize={isSmallScreen ? 'small' : 'medium'} />
                        <Typography variant={isSmallScreen ? 'body2' : 'body1'}>
                            info@example.com
                        </Typography>
                    </Box>
                </Box>

                {/* Right Section: Social Media + Booking Button */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column-reverse' : 'row',
                    alignItems: 'center',
                    gap: isSmallScreen ? 1 : 2,
                }}>
                    {/* Social Media Icons */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isSmallScreen ? 0.5 : 1,
                    }}>
                        <IconButton
                            aria-label="Facebook"
                            sx={{
                                backgroundColor: 'white',
                                p: 1,
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: 'white',
                                },
                            }}
                        >
                            <Facebook sx={{ color: '#0b233b', fontSize: '28px', borderRadius: '50%' }} />
                        </IconButton>

                        <IconButton
                            aria-label="Email"
                            sx={{
                                backgroundColor: 'white',
                                p: 1,
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: 'white',
                                },
                            }}
                        >
                            <Email sx={{ color: '#0b233b', fontSize: '28px' }} />
                        </IconButton>




                        <img
                            src="/src/assets/image/tripadvisorlogo.png" // Adjust the path if hosted or bundled
                            alt="TripAdvisor Logo"
                            style={{ height: '40px', cursor: 'pointer', borderRadius: '50%' }}
                            onClick={() => window.open('https://www.tripadvisor.com', '_blank')}
                        />
                    </Box>

                    {/* Booking Button with continuous animation */}
                    <Button
                        variant="contained"
                        size={isSmallScreen ? 'small' : 'medium'}
                        sx={{
                            width: isSmallScreen ? '100%' : 'auto',
                            backgroundColor: '#11c24c',
                            color: 'white',
                            animation: `${bubbleAnimation} 2s ease-in-out infinite`,
                            '&:hover': {
                                backgroundColor: '#003366',
                                boxShadow: '0 0 8px #0074D9',
                                animation: `${bubbleAnimation} 0.5s ease-in-out infinite`,
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Booking Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactBar;
