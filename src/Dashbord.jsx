import React from 'react';
import { Box } from "@mui/material"
import SanctuaryDashboard from "./service/home/SanctuaryDashboard.jsx"
import AboutUs from "./service/home/AboutUs.jsx"
import Offers from "./service/home/Offers.jsx"
import Gallery from "./service/home/Gallery.jsx"
import Services from "./service/home/Services.jsx"
import ContactForm from "./service/home/FormEmail.jsx"

function Dashboard() {
    return (
        <>
            <SanctuaryDashboard/>

            <Box id="about">
                <AboutUs/>
            </Box>

            <Box id="offers">
                <Offers/>
            </Box>

            <Box id="gallery">
                <Gallery/>
            </Box>

            <Box id="services">
                <Services/>
            </Box>

            <Box id="contact">
                <ContactForm/>
            </Box>
        </>
    )
}

export default Dashboard
