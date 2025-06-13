import React from 'react';
import {Container} from "@mui/material";
import ResponsiveAppBar from "./component/NavBar.jsx";

function Dashbord() {
    return (
        <Container  sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>

            <ResponsiveAppBar/>
        </Container>
    );
}

export default Dashbord;