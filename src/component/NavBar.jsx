import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { styled } from '@mui/system';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Lagoon Tour', path: '/lagoon-tour' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Cooking Class', path: '/cooking' },
    { name: 'Jungle Tour', path: '/jungle' },
    { name: 'Gallery', path: '/gallery1' },
    { name: 'Contact Us', path: '/contact' }
];

const LogoImage = styled('img')(({ theme }) => ({
    height: '50px',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
        height: '70px'
    }
}));

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (path) => {
        setAnchorElNav(null);
        if (path) navigate(path);
    };

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#fff',
                top: { xs: 0, md: 57 },
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                zIndex: 1100
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/">
                        <LogoImage src="/src/assets/image/logo.png" alt="Logo" />
                    </Link>
                </Box>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {pages.map((page) => (
                        <Button
                            key={page.path}
                            component={Link}
                            to={page.path}
                            sx={{
                                color: isActive(page.path) ? '#103785' : '#444',
                                fontWeight: isActive(page.path) ? 'bold' : 'normal',
                                textTransform: 'none',
                                borderBottom: isActive(page.path)
                                    ? '3px solid green'
                                    : '3px solid transparent',
                                borderRadius: 0
                            }}
                        >
                            {page.name}
                        </Button>
                    ))}
                    {/* ❌ Removed Book Now here, only in ContactBar */}
                </Box>

                {/* Mobile Menu Button */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        onClick={handleOpenNavMenu}
                        sx={{ color: '#103785' }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Box>

                {/* Mobile Dropdown Menu */}
                <Menu
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={() => handleCloseNavMenu()}
                    sx={{
                        '& .MuiPaper-root': {
                            width: 240,
                            borderRadius: 2,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                        }
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem
                            key={page.path}
                            component={Link}
                            to={page.path}
                            sx={{
                                color: isActive(page.path) ? '#103785' : '#444',
                                fontWeight: isActive(page.path) ? 'bold' : 'normal',
                                textTransform: 'none',
                                borderBottom: isActive(page.path)
                                    ? '3px solid green'
                                    : '3px solid transparent',
                                borderRadius: 0
                            }}
                        >
                            {page.name}
                        </MenuItem>
                    ))}

                    {/* ✅ Book Now inside hamburger menu */}
                    <Divider sx={{ my: 1 }} />
                    <MenuItem
                        component={Link}
                        to="/contact"
                        onClick={() => handleCloseNavMenu('/contact')}
                        sx={{ color: 'green', fontWeight: 'bold' }}
                    >
                        Book Now
                    </MenuItem>

                    <Divider sx={{ my: 1 }} />
                    <MenuItem
                        onClick={() => window.open('https://wa.me/94760169518', '_blank')}
                    >
                        <WhatsAppIcon sx={{ color: 'green', mr: 1 }} /> WhatsApp
                    </MenuItem>

                </Menu>
            </Toolbar>
        </AppBar>
    );
}
