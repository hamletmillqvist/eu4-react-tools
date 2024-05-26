import {Button} from "@mui/material";

export const NotFoundView = ({}: {}) => {
    return (
        <>
            <p>The view you tried to access does not exist or has been removed.</p>
            <br/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button variant="contained" href="/">To homepage</Button>
            </div>
        </>
    );
}