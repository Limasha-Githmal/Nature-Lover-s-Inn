import { Box } from "@mui/material";
import Dashbord from "./Dashbord.jsx";


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
     <Dashbord/>
        </Box>
    );
}

export default App;