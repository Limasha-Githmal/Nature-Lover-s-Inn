import React from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
    keyframes,
    IconButton
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Facebook from '@mui/icons-material/Facebook';
import Email from '@mui/icons-material/Email';

// Bubble animation
const bubbleAnimation = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
`;

const ContactBar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                backgroundColor: '#f4f4f4',
                width: '100%',
                py: 1,
                px: 2,
                borderBottom: '1px solid #ddd',
                display: { xs: 'block', md: 'block' }
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: isSmallScreen ? 2 : 0,
                    width: '100%',
                }}
            >
                {/* Contact Details */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        alignItems: 'center',
                        gap: isSmallScreen ? 1 : 3,
                        flexWrap: 'wrap',
                        justifyContent: isSmallScreen ? 'center' : 'flex-start',
                        width: isSmallScreen ? '100%' : 'auto',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <WhatsAppIcon color="success" fontSize={isSmallScreen ? 'small' : 'medium'} />
                        <Typography variant={isSmallScreen ? 'body2' : 'body1'}>
                            +94 77 706 0920
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Email color="primary" fontSize={isSmallScreen ? 'small' : 'medium'} />
                        <Typography variant={isSmallScreen ? 'body2' : 'body1'}>
                            kalametiyasafari@gmail.com
                        </Typography>
                    </Box>
                </Box>

                {/* Social Media + Booking Button */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        alignItems: 'center',
                        gap: isSmallScreen ? 1 : 3,
                        justifyContent: isSmallScreen ? 'center' : 'flex-end',
                        width: isSmallScreen ? '100%' : 'auto',
                        mt: isSmallScreen ? 1 : 0,
                    }}
                >
                    {/* Social Icons */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <IconButton
                            aria-label="Facebook"
                            sx={{
                                backgroundColor: 'white',
                                p: 1,
                                borderRadius: '50%',
                                '&:hover': { backgroundColor: 'white' },
                            }}
                        >
                            <Facebook sx={{ color: '#0b233b', fontSize: '28px' }} />
                        </IconButton>

                        <IconButton
                            aria-label="Email"
                            sx={{
                                backgroundColor: 'white',
                                p: 1,
                                borderRadius: '50%',
                                '&:hover': { backgroundColor: 'white' },
                            }}
                        >
                            <Email sx={{ color: '#0b233b', fontSize: '28px' }} />
                        </IconButton>

                        <IconButton
                            aria-label="TripAdvisor"
                            onClick={() => window.open('https://www.tripadvisor.com', '_blank')}
                            sx={{
                                p: 0,
                                '&:hover': { transform: 'scale(1.1)' },
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <img
                                src="/src/assets/image/tripadvisorlogo.png"
                                alt="TripAdvisor"
                                style={{
                                    height: '40px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                        </IconButton>
                    </Box>

                    {/* Booking Button */}
                    <Button
                        variant="contained"
                        size={isSmallScreen ? 'medium' : 'medium'}
                        sx={{
                            backgroundColor: '#11c24c',
                            color: 'white',
                            animation: `${bubbleAnimation} 2s ease-in-out infinite`,
                            minWidth: '150px',
                            '&:hover': {
                                backgroundColor: '#0e9d3d',
                                animation: `${bubbleAnimation} 0.5s ease-in-out infinite`,
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactBar;