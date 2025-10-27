import { initializeRobindoc } from "robindoc";

export const { Page, getStaticParams, getMetadata } = initializeRobindoc({
    configuration: {
        sourceRoot: "./blog",
        basePath: "/blog",
        gitToken: process.env.GIT_TOKEN,
        fetcher: (url, init) => fetch(url, { ...init, cache: "force-cache", next: { tags: ["blog"] } }),
    },
    items: "auto",
});
