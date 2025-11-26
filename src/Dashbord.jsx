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
                <title>Nature Lover's Inn | Kalamatiya Bird Sanctuary Tours & Eco Stay</title>

                <meta
                    name="description"
                    content="Stay at Nature Lover's Inn and explore the Kalamatiya Bird Sanctuary, boat tours, bird watching, eco accommodation and adventures in Kalametiya, Sri Lanka."
                />

                <meta
                    name="keywords"
                    content="Kalametiya Bird Sanctuary, Kalamatiya Sanctuary, Kalamatiya Eco Tours, Bird Watching Sri Lanka, Nature Lover's Inn, Kalametiya Hotel"
                />

                <meta property="og:title" content="Kalamatiya Bird Sanctuary Tours | Nature Lover's Inn" />
                <meta property="og:description" content="Experience the Kalametiya Bird Sanctuary with boat tours, bird watching and eco stay at Nature Lover's Inn." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.natureloversinn.com" />
                <meta property="og:image" content="https://www.natureloversinn.com/images/og-image.jpg" />
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
