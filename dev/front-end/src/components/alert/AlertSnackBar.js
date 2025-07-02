"use client";
import React from "react";
import {Alert, AlertTitle, Slide, Snackbar} from "@mui/material";

// Slide transition for the Snackbar
function SlideTransition(props) {
    return <Slide {...props} direction="up"/>;
}

export function AlertSnackBar({open, message = "message", severity = "success", onClose, autoHideDuration = 3000}) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={{vertical: "bottom", horizontal: "right"}} // Position the Snackbar
            TransitionComponent={SlideTransition} // Add slide animation
        >
            <Alert severity={severity}   variant="filled" sx={{minWidth:"150px"}}>
                <AlertTitle>{severity}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
}