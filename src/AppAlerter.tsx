import {useEffect, useState} from "react";
import {Alert, AlertColor, AlertTitle, IconButton, Slide, Snackbar} from "@mui/material";
import Alerter, {IAlerterCallbackProps} from "Utils/Alerter.ts";
import {Close} from "@mui/icons-material";

let timeoutHook: number | null = null;

const defaultTimer = 5_000;

const AppAlerter = () => {

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>();

    const clearTimeoutHook = () => {
        if (!timeoutHook) {
            return;
        }

        clearTimeout(timeoutHook);
        timeoutHook = null;
    }

    const onTimeout = () => {
        setVisible(false);
    };

    const calculateTimeout = (timeout: number | undefined | null) => {
        switch (timeout) {
            case null:
                return null;

            case undefined:
                return defaultTimer;

            default:
                return timeout;
        }
    }

    const onShowAlert = (props: IAlerterCallbackProps) => {
        clearTimeoutHook();

        setVisible(true);
        setSeverity(props.severity);
        setMessage(props.message);

        const timeout = calculateTimeout(props.timeout);
        if (timeout) {
            setTimeout(onTimeout, timeout);
        }
    }

    useEffect(() => {
        Alerter.subscribe(onShowAlert);
    }, []);

    return (
        <Slide direction="right" in={visible}>
            <Snackbar open={true}
                      sx={{width: "100%"}}
                      anchorOrigin={{horizontal: "left", vertical: "bottom"}}>
                <Alert severity={severity}
                       variant="standard"
                       className="alerterBase"
                       action={
                           <IconButton onClick={() => setVisible(false)}>
                               <Close/>
                           </IconButton>
                       }
                       sx={{width: "100%", marginRight: 6}}>
                    <AlertTitle>{message}</AlertTitle>
                </Alert>
            </Snackbar>
        </Slide>
    );
}

export default AppAlerter;