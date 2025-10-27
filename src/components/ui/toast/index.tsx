"use client";

import { useEffect } from "react";

import "./toast.scss";

export interface ToastProps {
    message: string;
    type: keyof typeof TYPES;
    closeHandler: () => void;
}

const TYPES = {
    success: "toast_success",
    warning: "toast_warning",
    error: "toast_error",
    neutral: "toast_neutral",
};

export const Toast: React.FC<ToastProps> = ({ message, type = "neutral", closeHandler }) => {
    useEffect(() => {
        const timer = setTimeout(closeHandler, 3000);

        return () => clearTimeout(timer);
    }, [closeHandler]);

    return (
        <div className={`toast ${TYPES[type]}`} onClick={closeHandler}>
            {message}
        </div>
    );
};
