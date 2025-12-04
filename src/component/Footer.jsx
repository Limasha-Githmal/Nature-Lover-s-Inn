import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Email, Instagram } from '@mui/icons-material';
import { FaAirbnb } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';

/* ---------------------------------------------------------
   ✅ FIX: Import booking.com logo correctly
---------------------------------------------------------- */
import bookingLogo from "../assets/image/bookinglogo.png";
import {Helmet} from "react-helmet";

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
            <Helmet>
                {/* Organization JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Nature Lover’s Inn",
                        url: "https://www.natureloversinn.com",
                        logo: "https://www.natureloversinn.com/images/logo.png",
                        sameAs: [
                            "https://www.facebook.com/natureloversinn",
                            "https://www.instagram.com/natureloversinn",
                            "https://www.tiktok.com/@natureloversinn"
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+94760169518",
                            contactType: "Customer Service",
                            email: "natureloversinn10@gmail.com",
                        },
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Kalametiya, Tangalle",
                            addressLocality: "Kalametiya",
                            addressRegion: "Tangalle",
                            postalCode: "",
                            addressCountry: "Sri Lanka",
                        },
                    })}
                </script>

                {/* Meta keywords for site-wide relevance */}
                <meta
                    name="keywords"
                    content="Kalametiya Bird Watching, Nature Lover’s Inn, Sri Lanka Tours, Lagoon Bird Watching, Kalametiya Tour, Eco Tourism, Tangalle Safari, Bird Photography, Paddle Boat Safari, Jungle Walk,Jungle Walk Kalametiya, kalametiya Jungle Walk, Kalametiya Restaurant, Kalametiya Rooms, Kalametiya Cookery Class, Eco Tours Sri Lanka, Wetlands Tour, Nature Experiences, Bird Watching Tours, Sri Lanka Nature Lodges"
                />
            </Helmet>
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
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ color: '#11c24c', fontWeight: 'bold', mb: 2 }}
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3878921222135!2d80.93026847542865!3d6.078319528175643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6b1003e1dc213%3A0xed2446fc894fc82d!2sNature%20Lover&#39;s%20Restaurant!5e0!3m2!1sen!2slk!4v1758884496823!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="Map Location"
                            />
                        </Box>
                    </Grid>

                    {/* Contact Us Section */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ color: '#11c24c', fontWeight: 'bold', mb: 2 }}
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
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ color: '#11c24c', fontWeight: 'bold', mb: 2 }}
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
                            {/* Facebook */}
                            <IconButton
                                aria-label="Facebook"
                                sx={{ backgroundColor: 'white', p: 1, borderRadius: '50%' }}
                                onClick={() => window.open('https://www.facebook.com/share/1ECGXbyT7n/?mibextid=wwXIfr', '_blank')}
                            >
                                <Facebook sx={{ color: '#1877F2', fontSize: '28px' }} />
                            </IconButton>

                            {/* Instagram */}
                            <IconButton
                                aria-label="Instagram"
                                sx={{ backgroundColor: 'white', p: 1, borderRadius: '50%' }}
                                onClick={() => window.open('https://www.instagram.com/nature_lovers_inn?igsh=a2pmYnl3ejZieDdi&utm_source=qr', '_blank')}
                            >
                                <Instagram sx={{ color: '#E4405F', fontSize: '28px' }} />
                            </IconButton>

                            {/* Booking.com */}
                            <IconButton
                                aria-label="Booking.com"
                                sx={{ backgroundColor: 'white', p: 1, borderRadius: '50%' }}
                                onClick={() => window.open('https://www.booking.com/Pulse-I4U8ps', '_blank')}
                            >
                                <img
                                    src={bookingLogo}
                                    alt="Booking.com"
                                    style={{ width: 28, height: 28 }}
                                />
                            </IconButton>

                            {/* Airbnb */}
                            <IconButton
                                aria-label="Airbnb"
                                sx={{ backgroundColor: 'white', p: 1, borderRadius: '50%' }}
                                onClick={() => window.open('https://www.airbnb.com/yourlink', '_blank')}
                            >
                                <FaAirbnb size={28} color="#FF385C" />
                            </IconButton>

                            {/* Email */}
                            <IconButton
                                aria-label="Email"
                                sx={{ backgroundColor: 'white', p: 1, borderRadius: '50%' }}
                                onClick={() => window.location.href = 'mailto:natureloversinn10@gmail.com'}
                            >
                                <Email sx={{ color: '#EA4335', fontSize: '28px' }} />
                            </IconButton>
                        </Box>

                        {/* Tripadvisor clickable logo */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 1,
                                cursor: 'pointer'
                            }}
                            onClick={() => window.open('https://www.tripadvisor.com/yourlink', '_blank')}
                        >
                            <SiTripadvisor size={48} color="#34E0A1" />
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
