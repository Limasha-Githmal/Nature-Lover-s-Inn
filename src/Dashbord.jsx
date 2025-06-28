import { Box } from "@mui/material";
import ResponsiveAppBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";
import FooterBottom from "./component/FooterBottom.jsx";
import ContactBar from "./component/InContactBar.jsx";
import SanctuaryDashboard from "./service/home/SanctuaryDashboard.jsx";
import AboutUs from "./service/home/AboutUs.jsx";
import Offers from "./service/home/Offers.jsx";
import Gallery from "./service/home/Gallery.jsx";

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
            <ContactBar />
            <ResponsiveAppBar />
            <SanctuaryDashboard/>
            <AboutUs/>
            <Offers/>
            <Gallery/>


            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    overflowX: 'hidden',
                    px: { xs: 1, sm: 2 },
                    boxSizing: 'border-box'
                }}
            >
                {/* Your main content goes here */}
            </Box>

            <Footer />
            <FooterBottom />
        </Box>
    );
}

export default Dashboard;