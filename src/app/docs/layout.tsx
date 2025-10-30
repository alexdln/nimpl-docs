import type { Metadata } from "next";
import { DocsContainer, KeylinkToNavigation } from "robindoc";
import { TopLayerProvider } from "top-layer";

import { ToastsLayer } from "@/components/ui/toasts-layer";
import { Sidebar } from "./robindoc";
import { AlertDialog } from "@/components/ui/alert-dialog";

export const metadata: Metadata = {
    title: {
        template: "%s | Nimpl Solutions",
        default: "Nimpl Solutions Documentation",
    },
    description: "Nimpl Solutions Documentation",
};

export default function RootLayout({ children }: Readonly<{ children?: React.ReactNode }>) {
    return (
        <TopLayerProvider
            upperLayers={[{ layer: ToastsLayer, id: "toasts", defaultData: [] }]}
            dialogs={[{ dialog: AlertDialog, id: "alert" }]}
        >
            <DocsContainer>
                <Sidebar />
                {children}
                <KeylinkToNavigation />
            </DocsContainer>
        </TopLayerProvider>
    );
}
