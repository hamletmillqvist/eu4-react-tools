import {AppBar, Box, Container, Divider, Toolbar, Typography} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Box>
            <AppBar className="mainMenuAppBar" position="static">
                <Toolbar>
                    <Link to="">
                        <Typography noWrap
                                    fontSize="large"
                                    fontWeight="800">
                            Eu4 React Tools
                        </Typography>
                    </Link>

                    <Divider variant="middle"/>
                    
                    <Box className="mainMenu">
                        <Link to="">Home</Link>
                        <Link to="saveEditor">Save editor</Link>
                        <Link to="modEditor">Mod editor</Link>
                        <Link to="testing">Testing</Link>
                    </Box>
                </Toolbar>
            </AppBar>
            
            <Container sx={{paddingTop: 1}}>
                <Outlet/>
            </Container>
        </Box>
    );
}

export default Layout;