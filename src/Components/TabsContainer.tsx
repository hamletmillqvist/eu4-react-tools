import React from "react";
import {Box} from "@mui/material";

interface IProps {
    children: React.ReactNode;
}

const TabsContainer = (props: IProps) => {
    return <Box className="tabs-container">
        {props.children}
    </Box>
}

export default TabsContainer;
