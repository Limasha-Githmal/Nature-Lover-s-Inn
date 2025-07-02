import { Box } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./Dashbord.jsx"
import ContactForm from "./service/home/FormEmail.jsx"
import Gallery from "./service/home/Gallery.jsx"
import AboutUs from "./service/home/AboutUs.jsx"
import Offers from "./service/home/Offers.jsx"
import Services from "./service/home/Services.jsx"
import ContactBar from "./component/InContactBar.jsx";
import ResponsiveAppBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";
import FooterBottom from "./component/FooterBottom.jsx";
import Lagoon from "./service/lagoon_Tour/Lagoon.jsx";
import Rooms from "./service/rooms/Rooms.jsx";
import Restaurants from "./service/resturant/Resturant.jsx";

function App() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f5f5f5' // Light background for the app
            }}
        >
            <ContactBar />
            <ResponsiveAppBar />

            {/* Main content area with proper spacing for fixed headers */}
            <Box
                component="main"
                sx={{
                    flex: 1,
                    width: '100%',
                    maxWidth: 'lg',
                    mx: 'auto',
                    px: { xs: 2, sm: 3, md: 4 },
                    pt: 3, // Reduced top padding
                    pb: 4, // Bottom padding
                    mt: { xs: '97px', md: '57px' }, // Matches combined height of ContactBar and NavBar
                    mb: 2 // Space before footer
                }}
            >
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/lagoon-tour" element={<Lagoon />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/restaurant" element={<Restaurants />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </Box>

            <Footer />
            <FooterBottom />
        </Box>
    )
}

export default App