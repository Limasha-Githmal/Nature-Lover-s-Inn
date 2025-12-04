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
