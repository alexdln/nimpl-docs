import { type MetadataRoute } from "next";
import { getStaticParams as getDocsStaticParams } from "./docs/robindoc";
import { getStaticParams as getBlogStaticParams } from "./blog/robindoc";
import { getStaticParams as getContributionStaticParams } from "./contribution/robindoc";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesLists = await Promise.all([
        getDocsStaticParams().then((params) => params.map((param) => `/${param.segments.join("/")}`)),
        getBlogStaticParams().then((params) => params.map((param) => `/${param.segments.join("/")}`)),
        getContributionStaticParams().then((params) => params.map((param) => `/${param.segments.join("/")}`)),
    ]);
    const pages = ["", pagesLists].flat(2);

    return pages.map((page) => ({
        url: `https://nimpl.dev${page}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
    }));
}
