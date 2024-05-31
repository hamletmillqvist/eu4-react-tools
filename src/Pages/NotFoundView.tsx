import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export const NotFoundView = ({}: {}) => {
    return (
        <>
            <h1>404 - Page not found</h1>
            <p>The view you tried to access does not exist or has been removed.</p>
            <br/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Link to="/">
                    <Button variant="contained">To homepage</Button>    
                </Link>
            </div>
        </>
    );
}