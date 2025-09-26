import React from 'react';
import { Box } from "@mui/material"
import SanctuaryDashboard from "./service/home/SanctuaryDashboard.jsx"
import AboutUs from "./service/home/AboutUs.jsx"
import Offers from "./service/home/Offers.jsx"
import Gallery from "./service/home/Gallery.jsx"
import Services from "./service/home/Services.jsx"
import ContactForm from "./service/home/FormEmail.jsx"
import { Helmet } from "react-helmet";

function Dashboard() {
    return (
        <>
        <Helmet>
                <title>Nature Lover's Inn | Eco-Tourism & Accommodation in Kalametiya</title>
                <meta name="description" content="Explore bird watching, jungle walking, cooking classes, and eco-friendly stays at Nature Lover's Inn in Kalametiya, Sri Lanka." />
                <meta name="keywords" content="Nature Lover's Inn, Kalametiya, Sri Lanka, Bird Watching Tours, Jungle Walking, Cooking Class, Accommodation, Eco-Tourism" />
                <meta property="og:title" content="Nature Lover's Inn | Eco-Tourism in Kalametiya" />
                <meta property="og:description" content="Experience eco-tourism with bird sanctuaries, jungle walks, and cooking classes in Kalametiya, Sri Lanka." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />
            </Helmet>

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
