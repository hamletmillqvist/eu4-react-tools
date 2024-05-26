import * as Material from "@mui/material"
import * as Icon from "@mui/icons-material"
import {useState} from "react";

const App = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)

    const onClick = () => {
        setDialogOpen(true);
    }

    return (
        <div className="app">
            <Material.Button variant="contained" onClick={onClick}>
                Click me!
            </Material.Button>
            <Material.Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <Material.DialogTitle> You clicked me! <Icon.EmojiEmotions/></Material.DialogTitle>
                <Material.DialogContent> This is some more content inside the dialog.</Material.DialogContent>
            </Material.Dialog>
        </div>
    )
};

export default App
