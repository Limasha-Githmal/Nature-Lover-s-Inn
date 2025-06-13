import React from 'react';
import {Container} from "@mui/material";
import ResponsiveAppBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";

function Dashbord() {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{

            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',

        }}>


<ResponsiveAppBar/>
             <Footer/>

        </Container>
    );
}

export default Dashbord;