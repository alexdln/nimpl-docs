import type { Metadata } from "next";
import { Fragment } from "react";
import { Inter } from "next/font/google";
import { Header, Footer, RobinProvider, KeylinkToContent } from "robindoc";
import { Analytics } from "@vercel/analytics/react";

import { Logo } from "../components/ui/logo";
import { theme } from "./theme";

import "robindoc/lib/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://nimpl.dev"),
    title: "Solutions for next.js | Nimpl",
    description: "Nimpl documentation. Solutions for your Next.js project",
    openGraph: {
        images: ["/preview.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="r-root">
            <body className={inter.className}>
                <RobinProvider theme={theme} component={Fragment}>
                    <KeylinkToContent />
                    <Header
                        links={[
                            { href: "/docs", title: "Docs" },
                            { href: "/blog", title: "Blog" },
                            { href: "/contribution", title: "Contribution" },
                        ]}
                        logo={<Logo />}
                        git="https://github.com/alexdln/nimpl-docs"
                        searcher="/api/search"
                    />
                    {children}
                    <Footer copyright="© 2024 All rights reserved" />
                </RobinProvider>
                <Analytics />
            </body>
        </html>
    );
}
