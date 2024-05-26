import "./App.css"

import {View, ViewMapper, ViewRouter} from "./View.tsx";
import {AppBar, Box, Breadcrumbs, Button, Container, Divider, Toolbar, Typography} from "@mui/material";
import {UrlUtil} from "./UrlUtil.ts";

// todo: Would prefer if this was auto-registered instead of having to remember to add all items here...
ViewMapper.add(View.Home);
ViewMapper.add(View.SaveEditor);
ViewMapper.add(View.ModEditor);

export const App = () => {

    const MainMenuButton = ({item, disabled}: { item: View, disabled?: boolean }) => {
        const isActive = UrlUtil.getPath().includes(item.path);
        return (<>
            <Button color="inherit"
                    aria-selected={isActive}
                    href={item.path}
                    onClick={() => {
                    }}
                    disabled={disabled}>
                {item.name}
            </Button>
        </>)
    }

    const path = UrlUtil.getPathParts();

    return (
        <div className="app">
            <AppBar className="mainMenuAppBar" position="static">
                <Toolbar>
                    <a href="/">
                        <Typography noWrap
                                    fontSize="large"
                                    fontWeight="800">
                            Eu4 React Tools
                        </Typography>
                    </a>

                    <Divider variant="middle"></Divider>
                    <Box className="mainMenuButtonContainer">
                        <MainMenuButton item={View.Home}/>
                        <MainMenuButton item={View.SaveEditor}/>
                        <MainMenuButton item={View.ModEditor}/>
                    </Box>
                </Toolbar>
            </AppBar>
            
            {path.length > 1 &&
                <Container>
                    <Breadcrumbs className="navBarBreadCrumb">
                        {path.map((x, i) => <p key={i}>{x}</p>)}
                    </Breadcrumbs>
                </Container>
            }

            <ViewRouter/>
        </div>
    );
};
