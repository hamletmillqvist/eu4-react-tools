import "./App.css"

import {View, ViewMapper, ViewRouter} from "./View.tsx";
import {AppBar, Box, Breadcrumbs, Button, Container, Divider, Toolbar, Tooltip, Typography} from "@mui/material";
import {UrlUtil} from "./UrlUtil.ts";

// todo: Would prefer if this was auto-registered instead of having to remember to add all items here...
ViewMapper.add(View.Home);
ViewMapper.add(View.SaveEditor);
ViewMapper.add(View.ModEditor);
ViewMapper.add(View.Testing);

export const App = () => {

    const MainMenuButton = ({item, disabled}: { item: View, disabled?: boolean }) => {
        const isActive = UrlUtil.getPath().includes(item.path);
        return (
            <Button color="inherit"
                    aria-selected={isActive}
                    href={item.path}
                    disabled={disabled}>
                {item.name}
            </Button>
        );
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
                        <Tooltip title="Coming at a later time" arrow>
                            <span>
                            <MainMenuButton item={View.ModEditor} disabled/>    
                            </span>
                        </Tooltip>
                        <MainMenuButton item={View.Testing}/>
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
