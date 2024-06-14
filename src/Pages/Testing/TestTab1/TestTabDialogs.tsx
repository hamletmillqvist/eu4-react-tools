import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup,
    TextField
} from "@mui/material";
import {OpenInBrowser} from "@mui/icons-material";
import {useState} from "react";
import Alerter from "Utils/Alerter.ts";
import Island from "Components/Island.tsx";

export const TestTabDialogs = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [timedAlert, setTimedAlert] = useState(false);
    const [alertString, setAlertString] = useState("This is the alert text");

    const timeout = timedAlert ? undefined : null;
    
    const missingText = !alertString;
    const anyError = missingText;

    return (<>
        <Island title="Dialogs">
            <Button variant="contained"
                    startIcon={<OpenInBrowser/>}
                    onClick={() => setDialogOpen(true)}>
                Simple dialog
            </Button>
        </Island>

        <Island title="Alerter">
            <FormGroup>
                <TextField value={alertString}
                           label="Alert text"
                           required
                           error={!alertString}
                           onChange={e => setAlertString(e.target.value)}/>

                <FormControlLabel
                    control={<Checkbox/>}
                    checked={timedAlert}
                    onChange={(_, value) => setTimedAlert(value)}
                    label="Use notification timer"
                />
            </FormGroup>

            <Box sx={{display: "flex", gap: 1}}>
                <Button color="info"
                        variant="contained"
                        disabled={anyError}
                        onClick={() => Alerter.showInfo(alertString, timeout)}>Info</Button>
                <Button color="success"
                        variant="contained"
                        disabled={anyError}
                        onClick={() => Alerter.showSuccess(alertString, timeout)}>Success</Button>
                <Button color="warning"
                        variant="contained"
                        disabled={anyError}
                        onClick={() => Alerter.showWarning(alertString, timeout)}>Warning</Button>
                <Button color="error"
                        variant="contained"
                        disabled={anyError}
                        onClick={() => Alerter.showError(alertString, timeout)}>Error</Button>
            </Box>
        </Island>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
                Dialog content stuff
            </DialogContent>
        </Dialog>
    </>);
}