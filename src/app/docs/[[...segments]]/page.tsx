import { AlertDialogAction } from "@/components/ui/alert-dialog-action";
import { Hint } from "@/components/ui/hint";
import { PackageLinks } from "@/components/ui/package-links";
import { ToastAction } from "@/components/ui/toast-action";

import { Page, getMetadata, getStaticParams } from "../robindoc";

const DocsPage = async ({ params }: { params: Promise<{ segments?: string[] }> }) => {
    const { segments = [] } = await params;
    const pathname = "/docs/" + segments.join("/");

    return (
        <Page
            pathname={pathname}
            components={{
                Hint,
                PackageLinks,
                ToastAction,
                AlertDialogAction,
            }}
            config={{
                publicDirs: ["public"],
            }}
        />
    );
};

export const generateMetadata = async ({ params }: { params: Promise<{ segments?: string[] }> }) => {
    const { segments = [] } = await params;
    const pathname = ["/docs", ...segments].join("/");
    const metadata = await getMetadata(pathname);

    return {
        ...metadata,
        alternates: {
            canonical: pathname,
        },
    };
};

export const generateStaticParams = async () => {
    const staticParams = await getStaticParams("/docs");
    return staticParams;
};

export default DocsPage;
