import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {OpenInBrowser} from "@mui/icons-material";
import {useState} from "react";

export const TestTabDialogs = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    
    return (<>
            <Button variant="contained" startIcon={<OpenInBrowser/>} onClick={() => setDialogOpen(true)}>
                Open dialog
            </Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogContent>
                    Dialog content stuff
                </DialogContent>
            </Dialog>
    </>);
}