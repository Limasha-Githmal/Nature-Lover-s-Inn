import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

// Import images properly
import gallery1 from '../../assets/image/gallery1.png';
import gallery2 from '../../assets/image/gallery_3.jpeg';
import gallery3 from '../../assets/image/gallery_18.jpeg';

const images = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 3, src: gallery3 },
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [loadedImages, setLoadedImages] = useState({});

    const handleOpen = (index) => {
        setCurrentIndex(index);
        setOpen(true);
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleClose = () => setOpen(false);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
    const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));
    const handleZoomReset = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseMove = (e) => {
        if (zoom > 1) {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            setPosition({ x: x * 100, y: y * 100 });
        }
    };

    const handleTouchMove = (e) => {
        if (zoom > 1 && e.touches.length === 1) {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = (e.touches[0].clientX - left) / width;
            const y = (e.touches[0].clientY - top) / height;
            setPosition({ x: x * 100, y: y * 100 });
        }
    };

    const handleKeyDown = (e) => {
        if (open) {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'Escape') handleClose();
            if (e.key === '+') handleZoomIn();
            if (e.key === '-') handleZoomOut();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, currentIndex]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    Gallery
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {images.map((image, index) => (
                        <Grid item key={image.id} xs={12} sm={6} md={4}>
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
                                    onLoad={() => setLoadedImages(prev => ({ ...prev, [image.id]: true }))}
                                    sx={{
                                        height: 200,
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                        opacity: loadedImages[image.id] ? 1 : 0.7,
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        }
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button variant="contained" color="success" component={Link} to="/gallery1">
                        More
                    </Button>
                </Box>

                {/* Fullscreen Modal */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullScreen
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        '& .MuiDialog-container': { overflow: 'hidden' },
                    }}
                >
                    <Box sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Image Counter */}
                        <Typography
                            variant="h6"
                            sx={{
                                position: 'absolute',
                                top: 20,
                                left: 20,
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                padding: 1,
                                borderRadius: 1,
                                zIndex: 10,
                            }}
                        >
                            {currentIndex + 1} / {images.length}
                        </Typography>

                        {/* Close Button */}
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                color: 'white',
                                zIndex: 10,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                }
                            }}
                        >
                            <CloseIcon fontSize="large" />
                        </IconButton>

                        {/* Navigation Arrows */}
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 20,
                                color: 'white',
                                zIndex: 10,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                }
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: 20,
                                color: 'white',
                                zIndex: 10,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                }
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="large" />
                        </IconButton>

                        {/* Zoom Controls */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: 1,
                            zIndex: 10,
                        }}>
                            <IconButton
                                onClick={handleZoomOut}
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                    }
                                }}
                            >
                                <ZoomOutIcon />
                            </IconButton>

                            <IconButton
                                onClick={handleZoomReset}
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                    }
                                }}
                            >
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    {Math.round(zoom * 100)}%
                                </Typography>
                            </IconButton>

                            <IconButton
                                onClick={handleZoomIn}
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                    }
                                }}
                            >
                                <ZoomInIcon />
                            </IconButton>
                        </Box>

                        {/* Keyboard Shortcuts Help */}
                        <Typography
                            variant="body2"
                            sx={{
                                position: 'absolute',
                                bottom: 20,
                                right: 20,
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                padding: 1,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                zIndex: 10,
                            }}
                        >
                            ← → Navigate • ESC Close • +/- Zoom
                        </Typography>

                        {/* Image with Zoom and Pan */}
                        <Box
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                                cursor: zoom > 1 ? 'move' : 'default',
                            }}
                        >
                            <img
                                src={images[currentIndex].src}
                                alt={`Gallery Fullscreen ${images[currentIndex].id}`}
                                style={{
                                    transform: `scale(${zoom})`,
                                    transformOrigin: `${position.x}% ${position.y}%`,
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    objectFit: 'contain',
                                    transition: 'transform 0.2s ease-out',
                                }}
                            />
                        </Box>
                    </Box>
                </Dialog>
            </Container>
        </Box>
    );
}