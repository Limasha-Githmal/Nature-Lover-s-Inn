import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardMedia,
    Container,
    Dialog,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
    { id: 1, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 2, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 3, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 4, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 5, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 6, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 7, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 8, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 9, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 10, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 11, src: 'src/assets/gallery/1.jpg.jpg' },
    { id: 12, src: 'src/assets/gallery/1.jpg.jpg' },
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOpen = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
                >
                    Gallery
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {images.map((image, index) => (
                        <Grid item key={image.id} xs={12} sm={6} md={3}>
                            <Card
                                onClick={() => handleOpen(index)}
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={image.src}
                                    alt={`Gallery ${image.id}`}
                                    sx={{ height: 200, objectFit: 'cover' }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button variant="contained" color="success">
                        More
                    </Button>
                </Box>

                {/* Fullscreen Modal */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullScreen
                    sx={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
                >
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                color: 'white',
                                zIndex: 10,
                            }}
                        >
                            <CloseIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 10,
                                color: 'white',
                                zIndex: 10,
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: 10,
                                color: 'white',
                                zIndex: 10,
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="large" />
                        </IconButton>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <img
                                src={images[currentIndex].src}
                                alt={`Gallery Fullscreen ${images[currentIndex].id}`}
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    objectFit: 'contain',
                                    borderRadius: '12px',
                                }}
                            />
                        </Box>
                    </Box>
                </Dialog>
            </Container>
        </Box>
    );
}
