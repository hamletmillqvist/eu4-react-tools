import {Box} from "@mui/material";

interface IProps {
    children: React.ReactNode;
}

export const TabsContainer = (props: IProps) => {
    return <Box className="tabs-container">
        {props.children}
    </Box>
}