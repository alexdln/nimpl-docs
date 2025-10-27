"use client";

import { useState } from "react";
import { useDialogAction } from "top-layer/dialog/hooks";
import { Dialog } from "top-layer/dialog";
import { ToastAction } from "../toast-action";

import "./alert-dialog.scss";

export const AlertDialog: React.FC = () => {
    const [state, setState] = useState<string | null>(null);
    const { closeDialog } = useDialogAction("alert");

    return (
        <Dialog className="alert-dialog" id="alert" blockOverflow onOpen={setState} onClose={() => setState(null)}>
            <div className="alert-dialog-backdrop" onClick={closeDialog} />
            <div className="alert-dialog-content">
                <p>{state}</p>
                <ToastAction type="neutral" message="Root Toast" title="Show Toast in Root" />
                <ToastAction type="neutral" message="Dialog Toast" layers={["alert"]} title="Show Toast in Dialog" />
                <ToastAction
                    type="neutral"
                    message="Both Toast"
                    layers={["root", "alert"]}
                    title="Show Toast in Both"
                />
            </div>
        </Dialog>
    );
};
