import React from "react";
import {
    Box,
    Container,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Button,
    keyframes,
    styled
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Facebook from "@mui/icons-material/Facebook";
import Email from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import { SiTripadvisor } from "react-icons/si";
import { FaAirbnb } from "react-icons/fa"; // Alternative for Booking.com since there's no direct Booking icon

// Pure jumping animation (no shadows/ripples)
const jump = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
`;

// Styled button with jumping animation
const JumpingButton = styled(Button)({
    animation: `${jump} 1.5s infinite cubic-bezier(0.25, 0.12, 0.25, 1)`,
});

const ContactBar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                zIndex: 1200,
                width: "100%",
                backgroundColor: "#f4f4f4",
                borderBottom: "1px solid #ddd",
                py: 1,
                px: 2,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: isSmallScreen ? 2 : 4,
                    textAlign: "left",
                }}
            >
                {/* Contact Details */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 1,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <WhatsAppIcon color="success" />
                        <Typography variant="body2">+94 77 706 0920</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.1 }}>
                        <Email color="primary" />
                        <Typography variant="body2">kalametiyasafari@gmail.com</Typography>
                    </Box>
                </Box>

                {/* Social Icons and Booking Button */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        ml: isSmallScreen ? 0 : "auto",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Social Media Icons */}
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                        <IconButton aria-label="Facebook" size="small">
                            <Facebook sx={{ color: "#1877F2" }} />
                        </IconButton>
                        <IconButton aria-label="Instagram" size="small">
                            <Instagram sx={{ color: "#E1306C" }} />
                        </IconButton>
                        <IconButton aria-label="TripAdvisor" size="small">
                            <SiTripadvisor style={{ color: "#34E0A1", fontSize: "1.25rem" }} />
                        </IconButton>
                        <IconButton aria-label="Airbnb" size="small">
                            <FaAirbnb style={{ color: "#FF5A5F", fontSize: "1.25rem" }} />
                        </IconButton>
                        <IconButton aria-label="Email" size="small">
                            <Email sx={{ color: "#EA4335" }} />
                        </IconButton>
                    </Box>

                    {/* Book Now Button */}
                    <JumpingButton
                        variant="contained"
                        color="success"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            padding: '8px 20px',
                            ml: isSmallScreen ? 0 : 1
                        }}
                    >
                        Book Now
                    </JumpingButton>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactBar;