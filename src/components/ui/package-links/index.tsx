import Link from "next/link";

import "./package-links.scss";

type PackageLinksProps = {
    npmName: string;
    githubName: string;
};

export const PackageLinks: React.FC<PackageLinksProps> = ({ npmName, githubName }) => (
    <div className="package-links">
        <Link
            href={`https://www.npmjs.com/package/${npmName}`}
            className="package-links-link package-links-link-npm"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="package-links-link-inner">NPM</span>
        </Link>
        <Link
            href={`https://github.com/alexdln/${githubName}`}
            className="package-links-link package-links-link-github"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="package-links-link-inner">GitHub</span>
        </Link>
    </div>
);
