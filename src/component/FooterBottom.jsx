import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

function FooterBottom() {
    return (
        <Box
            sx={{
                width: '100%',
                fontFamily:'sans-serif,Roboto, Arial',
                backgroundColor: '#051c33',
                color: 'white',
                paddingTop: 3,      // Top padding = 8px (1 * 8px)
                paddingBottom: 8,   // Bottom padding = 40px (5 * 8px)
                display: 'flex',
                alignItems: 'flex-start',
                borderTop: '1px solid #ddd',
                bottom: 0,
                left: 0,
            }}
        >
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Box display="flex" gap={2}>
                            <Link href="#" underline="hover" color="inherit">Contact Us</Link>
                            <Link href="#" underline="hover" color="inherit">Terms of Use</Link>
                            <Link href="#" underline="hover" color="inherit">Privacy Policy</Link>
                            <Link href="#" underline="hover" color="inherit">About Us</Link>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1" color="white" align="center">
                            Copyright © {new Date().getFullYear()}{' '}
                            <Link href="https://yourcompanywebsite.com" target="_blank" underline="hover" color="inherit"
                                sx={{
                                    color: '#00bfff', // Light blue
                                    textShadow: '1px 1px 2px rgba(0, 191, 255, 0.5)',
                                    fontWeight: 'bold',
                            }}>
                                Kozaa
                            </Link>. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default FooterBottom;
