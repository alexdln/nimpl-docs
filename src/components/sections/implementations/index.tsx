import Link from "next/link";
import { Container } from "robindoc/lib/components/ui/container";

import "./implementations.scss";

export const Implementations = () => (
    <section className="implementations" id="implementations">
        <Container>
            <div>
                <h2>UI/UX Implementations</h2>
                <div className="implementations-list">
                    <Link href="/docs/server-getters" className="implementations-card">
                        <h3>@nimpl/getters</h3>
                        <p>Server getters and Server contexts for RSC without switching to SSR</p>
                    </Link>
                    <Link href="/docs/i18n" className="implementations-card">
                        <h3>@nimpl/i18n</h3>
                        <p>Internationalization library for React.js with an enabled server component</p>
                    </Link>
                    <Link href="/docs/context" className="implementations-card">
                        <h3>@nimpl/context</h3>
                        <p>Server contexts for RSC without switching to SSR</p>
                    </Link>
                    <Link href="/docs/contection" className="implementations-card">
                        <h3>contection</h3>
                        <p>
                            A state management library that extends React Context API with fine-grained subscriptions
                            and computed values.
                        </p>
                    </Link>
                    <Link href="/docs/top-layer" className="implementations-card">
                        <h3>top-layer</h3>
                        <p>
                            Top Layer is a library for working with dialogs and toasts in a separate isolated layer
                            without application rerenders
                        </p>
                    </Link>
                    <Link href="/docs/path-parser" className="implementations-card">
                        <h3>@nimpl/path-parser</h3>
                        <p>Helper for next.js-styled pathname parsing to get dynamic params</p>
                    </Link>
                </div>
            </div>
            <div className="implementations-section">
                <h2>Configuration Implementations</h2>
                <div className="implementations-list">
                    <Link href="/docs/classnames-minifier" className="implementations-card">
                        <h3>@nimpl/classnames-minifier</h3>
                        <p>Configuring style (css/scss/sass) modules to generate compressed classes</p>
                    </Link>
                    <Link href="/docs/proxy-chain" className="implementations-card">
                        <h3>@nimpl/proxy-chain</h3>
                        <p>Create a chain of native next.js proxies without any modifications</p>
                    </Link>
                    <Link href="/docs/router" className="implementations-card">
                        <h3>@nimpl/router</h3>
                        <p>Edge router for next.js apps (i18n, basePath, rewrites, redirects)</p>
                    </Link>
                    <Link href="/docs/config" className="implementations-card">
                        <h3>@nimpl/config</h3>
                        <p>Convenient management of application configuration in different environments</p>
                    </Link>
                    <Link href="/docs/ab-tests" className="implementations-card">
                        <h3>@nimpl/ab-tests</h3>
                        <p>A package for conducting A/B tests on a website using middleware/proxy</p>
                    </Link>
                </div>
            </div>
            <div className="implementations-section">
                <h2>Cache Implementations</h2>
                <div className="implementations-list">
                    <Link href="/docs/cache-adapter" className="implementations-card">
                        <h3>@nimpl/cache-adapter</h3>
                        <p>
                            An adapter that allows to use any cache handler on the client and server side and switch
                            between them
                        </p>
                    </Link>
                    <Link href="/docs/cache-in-memory" className="implementations-card">
                        <h3>@nimpl/cache-in-memory</h3>
                        <p>Base cacheHandler for next.js, which cache data in-memory</p>
                    </Link>
                </div>
            </div>
            <div className="implementations-section">
                <h2>Tools</h2>
                <div className="implementations-list">
                    <a
                        href="https://inio.nimpl.dev/"
                        className="implementations-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>@nimpl/inio</h3>
                        <p>Utility for editing a group of JSON files. Plug-and-Play solution - just Run and Edit!</p>
                    </a>
                    <a
                        href="https://www.npmjs.com/package/@nimpl/versioner"
                        className="implementations-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>@nimpl/versioner</h3>
                        <p>A package for versioning your next.js application (experiment)</p>
                    </a>
                </div>
            </div>
        </Container>
    </section>
);
