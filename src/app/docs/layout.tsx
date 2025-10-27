import type { Metadata } from "next";
import { DocsContainer, KeylinkToNavigation } from "robindoc";
import { TopLayerProvider } from "top-layer";

import { Toast } from "@/components/ui/toast";
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
        <TopLayerProvider toast={Toast} dialogs={[{ dialog: AlertDialog, id: "alert" }]}>
            <DocsContainer>
                <Sidebar />
                {children}
                <KeylinkToNavigation />
            </DocsContainer>
        </TopLayerProvider>
    );
}
