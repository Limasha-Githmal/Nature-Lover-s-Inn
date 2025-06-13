
import {Container} from "@mui/material";
import Dashbord from "./Dashbord.jsx";

function App() {


  return (
    <Container sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }}>


        <Dashbord/>
    </Container>
  )
}

export default App
