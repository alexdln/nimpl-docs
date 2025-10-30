"use client";

import { useUpperLayerData, useUpperLayerStore } from "top-layer/upper-layers";
import { useCallback, useEffect, useMemo } from "react";

import "./toasts-layer.scss";

const TYPES = {
    success: "toast_success",
    error: "toast_error",
    warning: "toast_warning",
    info: "toast_info",
    neutral: "toast_neutral",
};

export type Toast = { message: string; type: keyof typeof TYPES };

export const ToastsLayer: React.FC = () => {
    const { update } = useUpperLayerStore();
    const data = useUpperLayerData<Toast[]>();

    const visibleData = useMemo(() => data.slice(-5), [data]);

    const closeHandler = useCallback(
        (item: Toast) => {
            update<Toast[]>({
                data: (prev) => prev.filter((prevItem) => prevItem !== item),
            });
        },
        [update],
    );

    useEffect(() => {
        if (visibleData.length) {
            const timeout = setTimeout(() => {
                closeHandler(visibleData[visibleData.length - 1]);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [visibleData, closeHandler]);

    return (
        <div>
            {visibleData?.map((item, index) => (
                <div
                    key={item.message + data.indexOf(item)}
                    className={`toast ${TYPES[item.type]}`}
                    style={{
                        top: `${10 + index * 10}px`,
                        right: `${16 - (visibleData.length - index - 1) * 2}px`,
                        transform: `scale(${1 - 0.1 * (visibleData.length - index - 1)})`,
                    }}
                >
                    <span>{item.message}</span>
                    <button onClick={() => closeHandler(item)} className="toast__close">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: "rotate(-90deg)" }}
                        >
                            <path
                                d="M17 7L7 17M7 7L17 17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx={12}
                                cy={12}
                                r={10}
                                stroke="currentColor"
                                strokeWidth={1}
                                fill="none"
                                opacity={0.1}
                            />
                            {index === visibleData.length - 1 && (
                                <circle
                                    cx={12}
                                    cy={12}
                                    r={10}
                                    stroke="currentColor"
                                    strokeWidth={1}
                                    fill="none"
                                    strokeDasharray={2 * Math.PI * 10}
                                    strokeDashoffset={0}
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        from="0"
                                        to={2 * Math.PI * 10}
                                        dur={`5s`}
                                        fill="freeze"
                                        repeatCount="1"
                                        begin="indefinite"
                                        ref={(node: SVGAnimateElement) => {
                                            node?.beginElement();
                                        }}
                                    />
                                </circle>
                            )}
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
};
