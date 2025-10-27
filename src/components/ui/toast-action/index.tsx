"use client";

import { useToastAction } from "top-layer/toaster";

import "./toast-action.scss";

export interface ToastActionProps {
    type: string;
    message: string;
    title: string;
    layers?: string[];
}

export const ToastAction: React.FC<ToastActionProps> = ({ type, message, layers = ["root"], title }) => {
    const { showToast } = useToastAction("nimpl-toast");

    return (
        <button className="toast-action" onClick={() => showToast({ type, message }, layers)}>
            {title}
        </button>
    );
};
