import { Box } from "@mui/material"
import ResponsiveAppBar from "./component/NavBar.jsx"
import Footer from "./component/Footer.jsx"
import FooterBottom from "./component/FooterBottom.jsx"
import ContactBar from "./component/InContactBar.jsx"
import SanctuaryDashboard from "./service/home/SanctuaryDashboard.jsx"
import AboutUs from "./service/home/AboutUs.jsx"
import Offers from "./service/home/Offers.jsx"
import Gallery from "./service/home/Gallery.jsx"
import Services from "./service/home/Services.jsx"
import ContactForm from "./service/home/FormEmail.jsx"
import Lagoon from "./service/lagoon_Tour/Lagoon.jsx";
import Rooms from "./service/rooms/Rooms.jsx";
import Restaurants from "./service/resturant/Resturant.jsx";



function Dashboard() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
                overflowX: 'hidden'
            }}
        >

            <Box id="home">
                <SanctuaryDashboard/>
            </Box>

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

            <Footer />
            <FooterBottom />
        </Box>
    )
}

export default Dashboard