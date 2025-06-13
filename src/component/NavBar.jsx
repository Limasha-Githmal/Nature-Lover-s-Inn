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
import { keyframes } from '@mui/system';

const pages = ['Home', 'Lagoon Tour', 'Rooms', 'Offers', 'Gallery', 'Contact Us'];

// Bubble animation keyframes
const bubble = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

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
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '100%'
            }}
        >
            <Toolbar sx={{ maxWidth: '100%', margin: '0 auto', width: '100%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <img
                        src="/src/assets/image/logo.png"
                        alt="Logo"
                        style={{ height: '25%', width: '25%', cursor: 'pointer' }}
                        onClick={() => setActivePage('Home')}
                    />
                </Box>

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
                                        backgroundColor: activePage === page ? '#f0f4ff' : 'transparent',
                                        whiteSpace: 'nowrap',
                                        '&:hover': {
                                            animation: `${bubble} 0.5s ease`
                                        }
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
                    <Box sx={{ display: 'flex', gap: 3, paddingX: '20px' }}>
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
                                    '&:hover': {
                                        animation: `${bubble} 0.5s ease`
                                    },
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
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}