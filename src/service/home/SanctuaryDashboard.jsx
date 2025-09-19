import React from 'react';
import {
    Box,
    Typography,
    Button,
    ThemeProvider,
    createTheme
} from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2E7D32', // Natural green
            dark: '#1B5E20', // Darker green
            contrastText: '#ffffff', // White text
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const FullScreenContainer = styled(Box)({
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
    padding: '2rem',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    boxSizing: 'border-box',
});

const VideoBackground = styled('video')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
    zIndex: 0,
});

const Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,30,0,0.4)', // Natural green overlay
    zIndex: 1,
});

const ContentBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    width: '90%',
    margin: '0 auto',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '95%',
        padding: theme.spacing(1),
    },
}));

const SanctuaryDashboard = () => {
    return (
        <ThemeProvider theme={theme}>
            <FullScreenContainer>
                <VideoBackground autoPlay loop muted playsInline>
                    <source src={'src/assets/image/Kalametiya Bird Sanctuary.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </VideoBackground>

                <Overlay />

                <ContentBox>
                    <Typography variant="h1" component="h1" gutterBottom sx={{
                        fontWeight: 700,
                        fontSize: {
                            xs: '2.2rem',
                            sm: '3rem',
                            md: '3.5rem',
                            lg: '4rem'
                        },
                        mb: 3,
                        lineHeight: 1.2,
                        letterSpacing: 'normal',
                    }}>
                        Welcome to Nature Lover's Inn
                    </Typography>

                    <Typography variant="h5" component="h4" sx={{
                        mb: 5,
                        fontSize: {
                            xs: '1rem',
                            sm: '1.2rem',
                            md: '1.4rem'
                        },
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        Experience nature's beauty and coastal charm at the heart of Kalametiya Bird Sanctuary and Fishing Beach.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: { xs: 4, sm: 6, md: 8 },
                            py: 2,
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            fontWeight: 600,
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                            transition: 'all 0.3s ease',
                            borderRadius: '30px',
                            minWidth: { xs: '180px', sm: '220px' },
                            textTransform: 'none',
                            mt: 4,
                        }}
                    >
                        Book Now
                    </Button>
                </ContentBox>
            </FullScreenContainer>
        </ThemeProvider>
    );
};

export default SanctuaryDashboard;
