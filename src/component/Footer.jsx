// Footer.js
import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box

            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 4,
                px: { xs: 2, sm: 8 }, // Horizontal padding responsive
                width: '100%',
                mt: 'auto',
            }}
        >
            <Grid container spacing={4}>
                {/* Column 1 */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Your Company Name
                    </Typography>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} All rights reserved.
                    </Typography>
                </Grid>

                {/* Column 2 */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Links
                    </Typography>
                    <Link href="#" color="inherit" underline="hover" display="block">
                        Privacy Policy
                    </Link>
                    <Link href="#" color="inherit" underline="hover" display="block">
                        Terms of Service
                    </Link>
                    <Link href="#" color="inherit" underline="hover" display="block">
                        Contact
                    </Link>
                </Grid>

                {/* Column 3 */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body2">info@yourcompany.com</Typography>
                    <Typography variant="body2">+94 77 123 4567</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
