import type { Metadata } from "next";
import { BlogContainer } from "robindoc";

export const metadata: Metadata = {
    title: {
        template: "%s | Nimpl Solutions",
        default: "Nimpl Solutions Documentation",
    },
    description: "Nimpl Solutions Documentation",
};

export default function RootLayout({ children }: Readonly<{ children?: React.ReactNode }>) {
    return <BlogContainer>{children}</BlogContainer>;
}
