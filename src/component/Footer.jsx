import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0b233b',
                color: 'white',
                py: 4,
                px: { xs: 2, sm: 8 },
                width: '100%',
                mt: 'auto',
                display:'flex'

            }}
        >
            <Grid container spacing={5}>
                {/* Left Column - Google Map */}
                <Grid item xs={12} md={6}>
                    <Box sx={{width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden'}}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.170592903695!2d79.93348265463015!3d6.819048074194564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247bbdb73d83f%3A0xa9760ac35f65e17c!2sArtistic%20Insights%20Studios!5e1!3m2!1sen!2slk!4v1749824099519!5m2!1sen!2slk"

                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        ></iframe>
        </Box>
</Grid>

{/* Right Column - Content */
}
    <Grid item xs={12} md={6}>
        <Grid container spacing={3} sx={{justifyContent: 'center',alignItems:'center'}}>





                        {/* Column 3 */}
                        <Grid item xs={12} sm={4} sx={{ textAlign: 'left' }}>
                            <Typography variant="h5" gutterBottom>
                               <b> Contact Us</b>
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h" sx={{mb: 1}}>
                                    <b>Nature-Lover's-Inn</b> <br/>
                                    No 95/1 Bataatha South <br/>
                                    Hungama,Sri Lanka <br/>
                                    82120 <br/>
                                    <br/>

                                </Typography>
                                <Typography variant="body2">
                                    Phone/WhatsApp : +94 77 123 4567<br/>
                                    Email : info@example.com

                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;