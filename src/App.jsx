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
                flexDirection: 'column'
            }}

        >
            <ContactBar />
            <ResponsiveAppBar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/lagoon-tour" element={<Lagoon />} />
                <Route path="/rooms" element={<Rooms/>} />
                <Route path="/restaurant" element={<Restaurants/>} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
            <Footer />
            <FooterBottom />
        </Box>
    )
}

export default App