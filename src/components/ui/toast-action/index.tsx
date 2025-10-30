"use client";

import { useUpperLayerStore } from "top-layer/upper-layers";

import { type Toast } from "../toasts-layer";

import "./toast-action.scss";

export interface ToastActionProps {
    type: Toast["type"];
    message: string;
    title: string;
}

export const ToastAction: React.FC<ToastActionProps> = ({ type, message, title }) => {
    const { update } = useUpperLayerStore({ id: "toasts" });

    return (
        <button
            className="toast-action"
            onClick={() => update({ data: (prev: Toast[]) => [...prev, { type, message }] })}
        >
            {title}
        </button>
    );
};
