import {AlertColor} from "@mui/material";

export interface IAlerterCallbackProps {
    message: string;
    timeout?: number | null;
    severity: AlertColor;
}

export default class Alerter {
    private static callback: (props: IAlerterCallbackProps) => void;

    private static validate() {
        if (!this.callback) {
            throw new Error("Alerter not instantiated");
        }
    }

    public static subscribe = (callback: (props: IAlerterCallbackProps) => void) => {
        this.callback = callback;
    }

    public static showInfo = (message: string, timeout?: number | null) => {
        this.validate();
        this.callback({severity: "info", message, timeout});
    }

    public static showSuccess = (message: string, timeout?: number | null) => {
        this.validate();
        this.callback({severity: "success", message, timeout});
    }

    public static showWarning = (message: string, timeout?: number | null) => {
        this.validate();
        this.callback({severity: "warning", message, timeout});
    }

    public static showError = (message: string, timeout?: number | null) => {
        this.validate();
        this.callback({severity: "error", message, timeout});
    }
}