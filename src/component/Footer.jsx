import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Email } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0b233b',
                color: 'white',
                py: 4,
                width: '100%',
                overflowX: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    {/* Location Section */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: '#11c24c',
                                fontWeight: 'bold',
                                mb: 2
                            }}
                        >
                            Location
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '350px',
                                height: '200px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                mb: 2
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.502313625129!2d80.9320688147683!3d6.06640599561685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6c7a7b4b3b2d1%3A0x1b2c2b4b4b3b2d1!2sNature%20Lover&#39;s%20Inn!5e0!3m2!1sen!2slk!4v1634564883584!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="Map Location"
                            />
                        </Box>
                    </Grid>

                    {/* Contact Us Section */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: { xs: 3, md: 0 }
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: '#11c24c',
                                fontWeight: 'bold',
                                mb: 2
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1.5 }}>
                            <b>Nature Lover's Inn - Kalametiya</b>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Nature Lover's Inn, Bata Atha South<br />
                            Hungama, Sri Lanka<br />
                            82120
                        </Typography>
                        <Typography variant="body2">
                            Phone / WhatsApp: +94 76 016 9518<br />
                            Email: natureloversinn10@gmail.com
                        </Typography>
                    </Grid>

                    {/* Follow Us Section */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: '#11c24c',
                                fontWeight: 'bold',
                                mb: 2
                            }}
                        >
                            Follow Us
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                mb: 3
                            }}
                        >
                            {/* Facebook Button */}
                            <IconButton
                                aria-label="Facebook"
                                sx={{
                                    backgroundColor: 'white',
                                    p: 1,
                                    borderRadius: '50%',
                                    '&:hover': { backgroundColor: 'white' },
                                }}
                                onClick={() => window.open('https://www.facebook.com/share/1ECGXbyT7n/?mibextid=wwXIfr', '_blank')}
                            >
                                <Facebook sx={{ color: '#0b233b', fontSize: '28px' }} />
                            </IconButton>

                            {/* Email Button */}
                            <IconButton
                                aria-label="Email"
                                sx={{
                                    backgroundColor: 'white',
                                    p: 1,
                                    borderRadius: '50%',
                                    '&:hover': { backgroundColor: 'white' },
                                }}
                                onClick={() => window.location.href = 'mailto:natureloversinn10@email.com'}
                            >
                                <Email sx={{ color: '#0b233b', fontSize: '28px' }} />
                            </IconButton>
                        </Box>


                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 1
                            }}
                        >
                            <img
                                src="src/assets/image/tripadvisorlogo.png"
                                alt="TripAdvisor"
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '120px'
                                }}
                            />
                        </Box>
                        <Typography variant="body2">
                            Nature Lover's Inn - Kalametiya
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
