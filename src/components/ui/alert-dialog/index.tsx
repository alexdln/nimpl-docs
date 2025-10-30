"use client";

import { useDialogAction, useDialogData } from "top-layer/dialogs";

import { ToastAction } from "../toast-action";

import "./alert-dialog.scss";

export const AlertDialog: React.FC = () => {
    const data = useDialogData<string>();
    const { close } = useDialogAction();

    return (
        <div className="alert-dialog" id="alert">
            <div className="alert-dialog-backdrop" onClick={() => close()} />
            <div className="alert-dialog-content">
                <p>{data}</p>
                <ToastAction type="success" message="Success Toast" title="Show Success Toast" />
                <ToastAction type="error" message="Error Toast" title="Show Error Toast" />
                <ToastAction type="warning" message="Warning Toast" title="Show Warning Toast" />
            </div>
        </div>
    );
};
