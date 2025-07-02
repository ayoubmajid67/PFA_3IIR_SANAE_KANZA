import {useState} from "react";
import {wait} from "@/utils/utile";

export function useSnackbar() {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success"); // "success", "error", "warning", "info"

    const handleSnackbarOpen = async (message, severity = "success",delay=0) => {

      if(delay>0 )
          await wait(delay)

        setMessage(message);
        setSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);

    return {
        snackbarOpen,
        message,
        severity,
        handleSnackbarOpen,
        handleSnackbarClose,
    };
}