import {Alert} from "@mui/material";
import {Construction} from "@mui/icons-material";

const ModEditorView = () => {
    return (<>
        <Alert icon={<Construction/>} severity="warning">
            Page is still under construction
        </Alert>
    </>);
}

export default ModEditorView;