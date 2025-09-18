import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { keyframes, styled } from '@mui/system';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Lagoon Tour', path: '/lagoon-tour' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Cooking Class', path: '/cooking' },
    { name: 'JungleTour', path: '/jungle' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
];

const bubble = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`;

const flyIn = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const LogoImage = styled('img')(({ theme }) => ({
    height: '80px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    animation: `${flyIn} 0.8s ease-out forwards`,
    '&:hover': {
        transform: 'scale(1.05)',
        filter: 'drop-shadow(0 0 8px rgba(16, 55, 133, 0.3))'
    },
    [theme.breakpoints.down('sm')]: {
        height: '60px'
    }
}));

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (path) => {
        setAnchorElNav(null);
        if (path.startsWith('/#')) {
            if (location.pathname === '/') {
                const element = document.getElementById(path.substring(2));
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(path.substring(2));
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            navigate(path);
        }
    };

    const isActive = (path) => {
        return location.pathname === path ||
            (path === '/' && location.pathname === '/') ||
            (path !== '/' && location.pathname.startsWith(path));
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                top: { xs: '97px', md: '57px' },
                zIndex: 1100,
            }}
        >
            <Toolbar sx={{
                justifyContent: 'space-between',
                maxWidth: 'lg',
                mx: 'auto',
                width: '100%',
                px: { xs: 2, sm: 4 }
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                        '& img': {
                            transform: 'scale(1.02)'
                        }
                    }
                }}>
                    <Link to="/">
                        <LogoImage
                            src="/src/assets/image/logo.png"
                            alt="Nature Lover's Inn Logo"
                        />
                    </Link>
                </Box>

                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            sx={{
                                color: '#103785',
                                '&:hover': {
                                    backgroundColor: 'rgba(16, 55, 133, 0.1)'
                                },
                                marginLeft: '4px',
                                padding: '14px',
                            }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={() => handleCloseNavMenu()}
                            sx={{
                                '& .MuiPaper-root': {
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                                    minWidth: '200px'
                                }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.path}
                                    onClick={() => handleCloseNavMenu(page.path)}
                                    sx={{
                                        color: '#103785',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        py: 1.5,
                                        backgroundColor: isActive(page.path) ? '#f0f4ff' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(16, 55, 133, 0.05)',
                                            animation: `${bubble} 0.5s ease`
                                        },
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {page.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{
                        display: 'flex',
                        gap: { sm: 1, md: 2 },
                        alignItems: 'center'
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page.path}
                                component={Link}
                                to={page.path}
                                sx={{
                                    color: '#103785',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    letterSpacing: '0.5px',
                                    position: 'relative',
                                    overflow: 'visible',
                                    '&:hover': {
                                        animation: `${bubble} 0.5s ease`,
                                        backgroundColor: 'transparent',
                                        '&::after': {
                                            width: '100%',
                                        },
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: isActive(page.path) ? '100%' : '0',
                                        height: '3px',
                                        bottom: '-4px',
                                        left: 0,
                                        backgroundColor: '#11c24c',
                                        transition: 'width 0.3s ease',
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}