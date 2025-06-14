import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const FooterBottom = () => {
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
                        {['Contact Us', 'Terms of Use', 'Privacy Policy', 'About Us'].map((item) => (
                            <Typography
                                key={item}
                                component="a"
                                href="#"
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                    <Typography variant="body2">
                        Copyright © {new Date().getFullYear()} {' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#00bfff',
                                fontWeight: 'bold'
                            }}
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