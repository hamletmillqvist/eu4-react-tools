import {ReactNode} from "react";
import {Box, Paper} from "@mui/material";

interface IProps {
    children: ReactNode;
    title?: string;
}

const Island = (props: IProps) => {
    return (
        <Paper className="island" elevation={4} sx={{borderRadius: 0}}>
            {props.title &&
                <Box className="islandHeading">
                    <h2>{props.title}</h2>
                </Box>
            }
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1}}>
                {props.children}
            </Box>
        </Paper>
    )
}

export default Island;