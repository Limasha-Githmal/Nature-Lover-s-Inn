import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from "@mui/icons-material/Search";

const pages = ['Home', 'Lagoon Tour', 'Rooms', 'Offers','Gallery','Contact Us'];

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [activePage, setActivePage] = React.useState('Home');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        setActivePage(page);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    zIndex: theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img
                            src="/src/assets/image/logo.png"
                            alt="Logo"
                            style={{ height: '25%', width: '25%', cursor: 'pointer' }}
                            onClick={() => setActivePage('Home')}
                        />
                    </Box>

                    {/* Mobile Menu */}
                    {isMobile ? (
                        <>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: '#103785' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(anchorElNav)}
                                onClose={() => handleCloseNavMenu(activePage)}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={() => handleCloseNavMenu(page)}
                                        sx={{
                                            color: '#103785',
                                            fontWeight: 'bold',
                                            backgroundColor:
                                                activePage === page ? '#f0f4ff' : 'transparent',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        <Typography textAlign="center" sx={{ whiteSpace: 'nowrap' }}>
                                            {page}
                                        </Typography>

                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        // Desktop Menu
                        <Box sx={{ display: 'flex', gap: 4 }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => setActivePage(page)}
                                    sx={{
                                        color: '#103785',
                                        fontWeight: 'bold',
                                        position: 'relative',
                                        padding: '8px 16px',
                                        whiteSpace: 'nowrap',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: activePage === page ? '100%' : '0',
                                            height: '2px',
                                            left: 0,
                                            bottom: 0,
                                            backgroundColor: '#103785',
                                            transition: 'width 0.3s ease-in-out',

                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },

                                        '&:hover': {
                                            animation: 'bubble 2s infinite',
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>


            <Toolbar />

            {/* Bubble Animation CSS */}
            <style jsx global>{`
                @keyframes bubble {
                    0%, 100% {
                        transform: translateY(0px);
                        
                    }
                    50% {
                        transform: translateY(-10px);
                  
                    }
                }
            `}</style>
        </>
    );
}
