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
                <Route path="/offers" element={<Offers />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </Box>
    )
}

export default App