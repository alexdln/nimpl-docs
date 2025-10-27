import { type Theme } from "robindoc/lib/core/types/theme";

export const theme: Theme = {
    colors: {
        primary: {
            "50": "#eff6ff",
            "100": "#dbeafe",
            "200": "#bfdbfe",
            "300": "#93c5fd",
            "400": "#60a5fa",
            "500": "#3b82f6",
            "600": "#2563eb",
            "700": "#1d4ed8",
            "800": "#1e40af",
            "900": "#1e3a8a",
            "950": "#172554",
        },
        neutral: {
            "50": "var(--base-neutral-50)",
            "100": "var(--base-neutral-100)",
            "200": "var(--base-neutral-200)",
            "300": "var(--base-neutral-300)",
            "400": "var(--base-neutral-400)",
            "500": "var(--base-neutral-500)",
            "600": "var(--base-neutral-600)",
            "700": "var(--base-neutral-700)",
            "800": "var(--base-neutral-800)",
            "900": "var(--base-neutral-900)",
            "950": "var(--base-neutral-950)",
        },
        body: {
            "50": "var(--base-body-50)",
            "950": "var(--base-body-950)",
        },
    },
};
