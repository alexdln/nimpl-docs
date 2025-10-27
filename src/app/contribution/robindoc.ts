import { initializeRobindoc } from "robindoc";

export const { Page, Sidebar, getStaticParams, getMetadata } = initializeRobindoc({
    configuration: {
        sourceRoot: "./docs/contribution.mdx",
        basePath: "/contribution",
        gitToken: process.env.GIT_TOKEN,
        fetcher: (url, init) => fetch(url, { ...init, cache: "force-cache", next: { tags: ["contribution"] } }),
    },
    items: [
        {
            title: "Introduction",
            href: "/",
        },
    ],
});
