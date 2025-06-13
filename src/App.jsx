import { Container } from "@mui/material";
import Dashbord from "./Dashbord.jsx";
import Box from "@mui/material/Box";


function App() {
    return (
        <Box

            sx={{
                width: '98.2vw',
                height: '100vh',
                overflowX:'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems:'center'

            }}
        >
         <Dashbord/>
        </Box>
    );
}

export default App;