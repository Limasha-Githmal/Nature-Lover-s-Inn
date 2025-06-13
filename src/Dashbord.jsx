import React from 'react';
import {Container} from "@mui/material";
import ResponsiveAppBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";
import ContactBar from "./component/InContactBar.jsx";
import Box from "@mui/material/Box";

function Dashbord() {
    return (
        <Box

            sx={{

            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
                justifyContent:'center',
                alignItems:'center'


        }}>

<ContactBar/>
<ResponsiveAppBar/>
             <Footer/>

        </Box>
    );
}

export default Dashbord;