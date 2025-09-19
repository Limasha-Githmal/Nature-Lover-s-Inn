import { Box } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./Dashbord.jsx"
import ContactForm from "./service/home/FormEmail.jsx"
import Gallery from "./service/home/Gallery.jsx"
import AboutUs from "./service/home/AboutUs.jsx"
import Offers from "./service/home/Offers.jsx"
import CookingClass from "./service/cooking_class/CookingClass.jsx"
import ContactBar from "./component/InContactBar.jsx";
import ResponsiveAppBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";
import FooterBottom from "./component/FooterBottom.jsx";
import Lagoon from "./service/lagoon_Tour/Lagoon.jsx";
import Rooms from "./service/rooms/Rooms.jsx";
import JungleTour from "./service/jungle_tour/JungleTour.jsx"
import Restaurants from "./service/resturant/Resturant.jsx";
import Galaery1 from "./service/gallery/galaery1.jsx";

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
                    pt: { xs: '154px', md: '114px' }, // Adjust top padding to account for fixed headers
                    pb: 4, // Bottom padding
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
                    <Route path="/galaery1" element={<Galaery1 />} />
                    <Route path="/cooking" element={<CookingClass />} />
                    <Route path="/jungle" element={<JungleTour />} />
                    <Route path="/contact" element={<ContactForm />} />

                </Routes>
            </Box>

            <Footer />
            <FooterBottom />
        </Box>
    )
}

export default App
