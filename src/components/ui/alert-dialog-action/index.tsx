"use client";

import { useDialogAction } from "top-layer/dialogs";

import "./alert-dialog-action.scss";

export interface AlertDialogActionProps {
    title: string;
}

export const AlertDialogAction: React.FC<AlertDialogActionProps> = ({ title }) => {
    const { open } = useDialogAction({ id: "alert" });

    return (
        <button className="alert-dialog-action" onClick={() => open({ data: "Base Alert Dialog" })}>
            {title}
        </button>
    );
};
