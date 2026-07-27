import Link from "next/link";
import { Container } from "robindoc/lib/components/ui/container";

import "./implementations.scss";

export const Implementations = () => (
    <section className="implementations" id="implementations">
        <Container>
            <div className="implementations-group">
                <h2 className="implementations-heading">UI/UX Implementations</h2>
                <div className="implementations-list">
                    <Link href="/docs/server-getters" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/getters</h3>
                        <p className="implementations-card-desc">
                            Server getters and Server contexts for RSC without switching to SSR
                        </p>
                    </Link>
                    <Link href="/docs/i18n" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/i18n</h3>
                        <p className="implementations-card-desc">
                            Internationalization library for React.js with an enabled server component
                        </p>
                    </Link>
                    <Link href="/docs/context" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/context</h3>
                        <p className="implementations-card-desc">Server contexts for RSC without switching to SSR</p>
                    </Link>
                    <Link href="/docs/path-parser" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/path-parser</h3>
                        <p className="implementations-card-desc">
                            Helper for next.js-styled pathname parsing to get dynamic params
                        </p>
                    </Link>
                </div>
            </div>
            <div className="implementations-group">
                <h2 className="implementations-heading">Additional Implementations</h2>
                <div className="implementations-list">
                    <Link href="/docs/classnames-minifier" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/classnames-minifier</h3>
                        <p className="implementations-card-desc">
                            Configuring style (css/scss/sass) modules to generate compressed classes
                        </p>
                    </Link>
                    <Link href="/docs/proxy-chain" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/proxy-chain</h3>
                        <p className="implementations-card-desc">
                            Create a chain of native next.js proxies without any modifications
                        </p>
                    </Link>
                    <Link href="/docs/router" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/router</h3>
                        <p className="implementations-card-desc">
                            Edge router for next.js apps (i18n, basePath, rewrites, redirects)
                        </p>
                    </Link>
                    <Link href="/docs/config" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/config</h3>
                        <p className="implementations-card-desc">
                            Convenient management of application configuration in different environments
                        </p>
                    </Link>
                    <Link href="/docs/ab-tests" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/ab-tests</h3>
                        <p className="implementations-card-desc">
                            A package for conducting A/B tests on a website using middleware/proxy
                        </p>
                    </Link>
                </div>
            </div>
            <div className="implementations-group">
                <h2 className="implementations-heading">Cache Implementations</h2>
                <div className="implementations-list">
                    <Link href="/docs/cache-adapter" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/cache-adapter</h3>
                        <p className="implementations-card-desc">
                            An adapter that allows to use any cache handler on the client and server side and switch
                            between them
                        </p>
                    </Link>
                    <Link href="/docs/cache-in-memory" className="implementations-card">
                        <h3 className="implementations-card-title">@nimpl/cache-in-memory</h3>
                        <p className="implementations-card-desc">
                            Base cacheHandler for next.js, which cache data in-memory
                        </p>
                    </Link>
                </div>
            </div>
            <div className="implementations-group">
                <h2 className="implementations-heading">See also</h2>
                <div className="implementations-list">
                    <a
                        href="https://contection.dev/"
                        className="implementations-card implementations-card_external"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="implementations-card-title">contection</h3>
                        <p className="implementations-card-desc">
                            A state management library that extends React Context API with fine-grained subscriptions
                            and computed values.
                        </p>
                    </a>
                    <a
                        href="https://robindoc.dev/"
                        className="implementations-card implementations-card_external"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="implementations-card-title">robindoc</h3>
                        <p className="implementations-card-desc">
                            Robindoc is a framework for automatically creating documentation websites based on markdown
                            files, built on React Server Components.
                        </p>
                    </a>
                </div>
            </div>
        </Container>
    </section>
);
