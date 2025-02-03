import { initializeRobindoc } from "robindoc";

export const { Page, Sidebar, getStaticParams, getMetadata, getPageData } = initializeRobindoc({
    configuration: {
        sourceRoot: './docs',
        basePath: '/docs',
        gitToken: process.env.GIT_TOKEN,
        fetcher: (url, init) => fetch(url, {...init, cache: 'force-cache', next: { tags: ['docs'] }}),
    },
    items: [
        {
            title: 'Introduction',
            href: '/',
            configuration: {
                sourceRoot: './README.md',
            }
        },
        {
            title: 'UI/UX Implementations',
            type: 'heading',
        },
        {
            title: 'Server Getters',
            href: '/server-getters',
        },
        {
            title: 'Internationalization',
            href: '/i18n',
        },
        {
            title: 'Server Context',
            href: '/context',
        },
        {
            title: 'Path Parser',
            href: '/path-parser',
        },
        {
            title: 'Configuration Implementations',
            type: 'heading',
        },
        {
            title: 'Classnames Minifier',
            href: '/classnames-minifier',
        },
        {
            title: 'Middleware Chain',
            href: '/middleware-chain',
        },
        {
            title: 'Edge Router',
            href: '/router',
        },
        {
            title: 'Advanced Config',
            href: '/config',
        },
        {
            title: 'Edge A/B Tests',
            href: '/ab-tests',
        },
        {
            title: 'Cache Implementations',
            type: 'heading',
        },
        {
            title: 'Cache Adapter',
            href: '/cache-adapter',
        },
        {
            title: 'Cache In Memory',
            href: '/cache-in-memory',
        },
    ],
});
