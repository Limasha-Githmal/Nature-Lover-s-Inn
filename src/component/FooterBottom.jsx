import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

function FooterBottom() {
    return (
        <Box
            sx={{
                width: '100%',
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
                        <Typography variant="body2" color="white">
                            © {new Date().getFullYear()} YourCompany. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default FooterBottom;
