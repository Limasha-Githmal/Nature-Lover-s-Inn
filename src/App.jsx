
import {Container} from "@mui/material";
import Dashbord from "./Dashbord.jsx";

function App() {


  return (
    <Container
        maxWidth={false}
        disableGutters
        sx={{
        width: '100vw',
        height: '100vh',
        padding:'0',
        margin:'0',
        border:'0',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',

    }}>


        <Dashbord/>
    </Container>
  )
}

export default App
