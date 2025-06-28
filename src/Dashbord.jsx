// Dashboard.jsx
import React from "react";
import { Box } from "@mui/material";
import FooterBottom from "./component/FooterBottom.jsx";
import Footer from "./component/Footer.jsx";
import SanctuaryDashboard from "./service/home/SanctuaryDashboard.jsx";
import ResponsiveAppBar from "./component/NavBar.jsx";
import ContactBar from "./component/InContactBar.jsx";


const Dashboard = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
                overflowX: "hidden",
            }}
        >
            <ContactBar />
            <ResponsiveAppBar />
            <SanctuaryDashboard />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    overflowX: "hidden",
                    px: { xs: 1, sm: 2 },
                    boxSizing: "border-box",
                }}
            >

            </Box>

            <Footer />
            <FooterBottom />
        </Box>
    );
};

export default Dashboard;
