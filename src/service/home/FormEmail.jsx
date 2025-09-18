import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Snackbar,
    Alert,
    CircularProgress,
    Fade,
    Paper,
    useTheme,
    useMediaQuery,
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KingBedIcon from '@mui/icons-material/KingBed';
import SailingIcon from '@mui/icons-material/Sailing';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HikingIcon from '@mui/icons-material/Hiking'; // ✅ New icon for jungle walking
import { keyframes } from '@mui/system';

const floatAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        serviceType: 'room' // Default service type
    });
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleServiceChange = (event, newService) => {
        if (newService !== null) {
            setFormData(prev => ({
                ...prev,
                serviceType: newService
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/xeoknzvk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: `Inquiry about ${formData.serviceType}`
                }),
            });

            if (response.ok) {
                setSnackbar({
                    open: true,
                    message: 'Message sent successfully! We will contact you soon.',
                    severity: 'success'
                });
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    serviceType: 'room'
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again later.',
                severity: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    return (
        <Box sx={{
            py: 8,
            background: 'linear-gradient(135deg, #f9f9f9 0%, #e3f2fd 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Container maxWidth="md">
                <Fade in timeout={800}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <ContactMailIcon
                            sx={{
                                fontSize: 60,
                                color: '#103785',
                                animation: `${floatAnimation} 3s ease-in-out infinite`,
                                mb: 2
                            }}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                background: `linear-gradient(45deg, #103785 30%, ${theme.palette.secondary.main} 90%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: 'auto' }}
                        >
                            Have questions or want to book a service? Fill out the form below.
                        </Typography>
                    </Box>
                </Fade>

                <Fade in timeout={1000}>
                    <Paper
                        elevation={6}
                        sx={{
                            backgroundColor: 'white',
                            p: isMobile ? 3 : 6,
                            borderRadius: 4,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                            }
                        }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ mt: 2 }}
                        >
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <ToggleButtonGroup
                                        value={formData.serviceType}
                                        onChange={handleServiceChange}
                                        exclusive
                                        fullWidth
                                        color="primary"
                                        sx={{
                                            '& .MuiToggleButtonGroup-grouped': {
                                                borderRadius: 2,
                                                border: '1px solid',
                                                borderColor: theme.palette.divider,
                                                textTransform: 'capitalize',
                                                fontWeight: 'medium'
                                            }
                                        }}
                                    >
                                        <ToggleButton value="room">
                                            <KingBedIcon sx={{ mr: 1 }} />
                                            Room Booking
                                        </ToggleButton>
                                        <ToggleButton value="lagoon-tour">
                                            <SailingIcon sx={{ mr: 1 }} />
                                            Lagoon Tour
                                        </ToggleButton>
                                        <ToggleButton value="cooking-class">
                                            <RestaurantIcon sx={{ mr: 1 }} />
                                            Cooking Class
                                        </ToggleButton>
                                        <ToggleButton value="jungle-walk">
                                            <HikingIcon sx={{ mr: 1 }} />
                                            Jungle Walking Tour
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label={`Your Message about ${formData.serviceType.replace('-', ' ')}`}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        multiline
                                        rows={6}
                                        variant="outlined"
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        endIcon={loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                                        disabled={loading}
                                        sx={{
                                            px: 6,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                            fontWeight: 'bold',
                                            borderRadius: 2,
                                            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                                            '&:hover': {
                                                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                                                transform: 'translateY(-2px)'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {loading ? 'Sending...' : 'Send Inquiry'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Fade>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionComponent={Fade}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{
                        width: '100%',
                        boxShadow: theme.shadows[6],
                        alignItems: 'center'
                    }}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactForm;
