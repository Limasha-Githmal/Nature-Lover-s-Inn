import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {Helmet} from "react-helmet";

const FooterBottom = () => {
    const links = [
        { label: 'Contact Us', path: '/contact' },
        { label: 'Terms of Use', path: '/terms' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'About Us', path: '/about' },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#051c33',
                color: 'white',
                py: 3,
                width: '100%',
                overflowX: 'hidden',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
        >
            <Helmet>
                {/* Page Title */}
                <title>Nature Lover’s Inn | Kalametiya Bird Sanctuary Eco Stay in Sri Lanka</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Nature Lover’s Inn is located next to the Kalametiya Bird Sanctuary in Sri Lanka. Enjoy bird watching tours, lagoon safaris, jungle walking, cooking classes, and peaceful beachfront accommodation."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="Kalametiya Bird Sanctuary hotel, Nature Lovers Inn, bird watching Sri Lanka, Kalametiya lagoon tour, eco stay Sri Lanka, Tangalle nature tours"
                />

                {/* Robots */}
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.natureloversinn.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Nature Lover’s Inn | Next to Kalametiya Bird Sanctuary" />
                <meta
                    property="og:description"
                    content="Stay at Nature Lover’s Inn, located right next to the famous Kalametiya Bird Sanctuary. Enjoy lagoon tours, bird watching, jungle trekking and authentic Sri Lankan hospitality."
                />
                <meta property="og:url" content="https://www.natureloversinn.com/" />

                {/* ✔️ EXACTLY AS YOU REQUESTED — DO NOT CHANGE THIS */}
                <meta property="og:image" content="https://www.natureloversinn.com/" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Nature Lover’s Inn | Kalametiya Bird Sanctuary" />
                <meta
                    name="twitter:description"
                    content="Eco-friendly stays, bird watching tours, lagoon boat rides and jungle walks at Kalametiya Bird Sanctuary."
                />
                <meta name="twitter:image" content="https://www.natureloversinn.com/" />

                {/* JSON-LD Schema */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Nature Lover’s Inn",
      "description": "Eco hotel near Kalametiya Bird Sanctuary with bird watching tours, lagoon boat rides, and jungle walking experiences.",
      "url": "https://www.natureloversinn.com/",
      "image": "https://www.natureloversinn.com/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalametiya",
        "addressLocality": "Tangalle",
        "addressRegion": "Southern Province",
        "addressCountry": "Sri Lanka"
      },
      "telephone": "+94-760169518"
    }
    `}
                </script>
            </Helmet>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {links.map(({ label, path }) => (
                            <Typography
                                key={label}
                                component="a"
                                href={path}
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' },
                                    cursor: 'pointer'
                                }}
                            >
                                {label}
                            </Typography>
                        ))}
                    </Box>
                    <Typography variant="body2">
                        Copyright © {new Date().getFullYear()}{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#00bfff',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                            onClick={() => window.open("https://www.facebook.com/YourPageHere", "_blank")}
                        >
                            Kozaa
                        </Box>. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default FooterBottom;
