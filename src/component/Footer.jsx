import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Email } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0b233b',
                color: 'white',
                py: 4,
                px: { xs: 2, sm: 4, md: 8 },
                width: '100%',
                mt: 'auto',
            }}
        >
            {/* Outer container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    position: 'relative',
                }}
            >
                {/* Left Section: Location */}
                <Box
                    sx={{
                        flex: 1,
                        mb: { xs: 4, md: 0 },
                        pr: { md: 4 },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        paddingLeft: '10%',
                        color: '#11c24c' // Added green color
                    }}>
                        Location
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '350px',
                            height: '200px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            margin: { xs: '0 auto', md: '0' },
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.1705870874653!2d79.93307297403024!3d6.819048919660284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247bbdb73d83f%3A0xa9760ac35f65e17c!2sArtistic%20Insights%20Studios!5e1!3m2!1sen!2slk!4v1749889033459!5m2!1sen!2slk"
                            style={{ border: 0, paddingLeft: '10%' }}
                            width={'80%'}
                            height={'100%'}
                            allowFullScreen=""
                            loading="lazy"
                            title="Map Location"
                        ></iframe>
                    </Box>
                </Box>

                {/* Center Section: Contact Us */}
                <Box
                    sx={{
                        flex: 1,
                        mb: { xs: 4, md: 0 },
                        px: { md: 2 },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: '#11c24c' // Added green color
                    }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                        <b>Kalametiya Bird Watching & Ecotourism</b>
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                        No: 95/1, Bata Atha South<br />
                        Hungama, Sri Lanka<br />
                        82120
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                        Phone / WhatsApp: +94 77 706 0920<br />
                        Email: kalametiyasafari@gmail.com
                    </Typography>
                </Box>

                {/* Right Section: Follow Us */}
                <Box
                    sx={{
                        flex: 1,
                        pl: { md: 4 },
                        textAlign: { xs: 'center', md: 'left' },
                        position: { md: 'relative' },
                        right: { md: '5%' },
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: '#11c24c' // Added green color
                    }}>
                        Follow Us
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        gap: 2,
                        mb: 3
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
                            <Facebook sx={{ color: '#0b233b', fontSize: '28px' }} />
                        </IconButton>

                        {/* TripAdvisor Logo */}
                        <img
                            src="/src/assets/image/tripadvisorlogo.png"
                            alt="TripAdvisor Logo"
                            style={{
                                height: '40px',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                            onClick={() => window.open('https://www.tripadvisor.com', '_blank')}
                        />

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
                    </Box>
                    <Box>
                        <Typography variant="caption" sx={{
                            display: 'block',
                            mb: 1,
                            color: '#11c24c',
                            fontWeight: 'bold'
                        }}>
                            RECOMMENDED ON
                        </Typography>
                        <img
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0c/49/2c/2b/the-commercial-hotel.jpg"
                            alt="TripAdvisor Recommended"
                            style={{
                                height: '50px',
                                width: 'auto',
                                maxWidth: '120px'
                            }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Kalametiya Bird Watching & Ecotourism
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;