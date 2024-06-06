import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <svg width={66} height={24} viewBox="0 0 88 33" aria-label="Nimpl">
            <path d="M27.6782 6.52874C27.6782 5.91932 28.1722 5.42529 28.7816 5.42529H30.9885C31.5979 5.42529 32.092 5.91932 32.092 6.52874V31.0805C32.092 31.6899 31.5979 32.1839 30.9885 32.1839H28.7816C28.1722 32.1839 27.6782 31.6899 27.6782 31.0805V6.52874Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M35.0345 20.046C35.0345 19.4366 35.5285 18.9425 36.1379 18.9425H38.3448C38.9542 18.9425 39.4483 19.4366 39.4483 20.046V31.0805C39.4483 31.6899 38.9542 32.1839 38.3448 32.1839H36.1379C35.5285 32.1839 35.0345 31.6899 35.0345 31.0805V20.046Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M42.3908 6.52874C42.3908 5.91932 42.8848 5.42529 43.4943 5.42529H45.7011C46.3106 5.42529 46.8046 5.91932 46.8046 6.52874V31.0805C46.8046 31.6899 46.3106 32.1839 45.7011 32.1839H43.4943C42.8848 32.1839 42.3908 31.6899 42.3908 31.0805V6.52874Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M59.3103 6.52874C59.3103 5.91932 59.8044 5.42529 60.4138 5.42529H62.6207C63.2301 5.42529 63.7241 5.91932 63.7241 6.52874V17.5632C63.7241 18.1726 63.2301 18.6667 62.6207 18.6667H60.4138C59.8044 18.6667 59.3103 18.1726 59.3103 17.5632V6.52874Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M51.954 6.52874C51.954 5.91932 52.4481 5.42529 53.0575 5.42529H55.2644C55.8738 5.42529 56.3678 5.91932 56.3678 6.52874V31.0805C56.3678 31.6899 55.8738 32.1839 55.2644 32.1839H53.0575C52.4481 32.1839 51.954 31.6899 51.954 31.0805V6.52874Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M83.5862 20.046C83.5862 19.4366 84.0802 18.9425 84.6897 18.9425H86.8966C87.506 18.9425 88 19.4366 88 20.046V31.0805C88 31.6899 87.506 32.1839 86.8966 32.1839H84.6897C84.0802 32.1839 83.5862 31.6899 83.5862 31.0805V20.046Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M76.2299 28.8736C76.2299 28.2641 76.7239 27.7701 77.3333 27.7701H79.5402C80.1496 27.7701 80.6437 28.2641 80.6437 28.8736V31.0805C80.6437 31.6899 80.1496 32.1839 79.5402 32.1839H77.3333C76.7239 32.1839 76.2299 31.6899 76.2299 31.0805V28.8736Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M68.8736 6.52874C68.8736 5.91932 69.3676 5.42529 69.977 5.42529H72.1839C72.7933 5.42529 73.2874 5.91932 73.2874 6.52874V31.0805C73.2874 31.6899 72.7933 32.1839 72.1839 32.1839H69.977C69.3676 32.1839 68.8736 31.6899 68.8736 31.0805V6.52874Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M18.1149 1.10345C18.1149 0.494031 18.609 0 19.2184 0H21.4253C22.0347 0 22.5287 0.494031 22.5287 1.10345V3.31034C22.5287 3.91976 22.0347 4.41379 21.4253 4.41379H19.2184C18.609 4.41379 18.1149 3.91976 18.1149 3.31034V1.10345Z" fill="rgb(var(--color-dye-blue))"/>
            <path d="M3.31034 0H1.10345C0.494031 0 0 0.494031 0 1.10345V31.0805C0 31.6899 0.494031 32.1839 1.10345 32.1839H3.31034C3.91976 32.1839 4.41379 31.6899 4.41379 31.0805V9.13703L18.2271 31.6619L18.1149 23.0575L4.26617 0.551724C4.07538 0.221904 3.71878 0 3.31034 0Z" fill="rgb(var(--color-dye-pink))"/>
            <path d="M21.4253 5.42529H19.2184C18.609 5.42529 18.1149 5.91932 18.1149 6.52874V23.0575L18.2271 31.6619C18.436 32.0026 18.8002 32.19 19.1727 32.1887C19.7823 32.1887 21.4253 32.1839 21.4253 32.1839C22.0347 32.1839 22.5287 31.6899 22.5287 31.0805V6.52874C22.5287 5.91932 22.0347 5.42529 21.4253 5.42529Z" fill="rgb(var(--color-dye-blue))"/>
        </svg>
    ),
    project: {
        link: 'https://github.com/vordgi'
    },
    footer: {
        content: function useText() {
            return (
                <p className='text-neutral-900 footer-content'>
                    © 2024 nimpl. Powered by <a href="https://x.com/vordgi" target="_blank" rel="noopener noreferrer" className='text-neutral-950 hover:opacity-80'>vordgi</a>
                </p>
            )
        }
    },
    docsRepositoryBase: 'https://github.com/vordgi/nimpl-docs/tree/main',
    head: function useHead() {
        const { frontMatter: config } = useConfig<{ description?: string; previewName?: string; title: string }>();
        const description = config.description || 'Documentation for solutions for your Next.js project | @nimpl';
        const image = config.previewName ? `https://nimpl.tech/preview/${config.previewName}.png` : "https://nimpl.tech/preview.png";

        return (
            <>
                <title>{config.title}</title>
                <meta httpEquiv="Content-Language" content="en" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <meta property="og:title" content={config.title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content={image}
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site:domain" content="nimpl.tech" />
                <meta name="twitter:url" content="https://nimpl.tech" />
            </>
        )
    },
    banner: {
      key: 'news-06-2024',
      content: (
        <a href="/blog/news-06-2024" className="py-3">
          🎉 middleware-chain, JSONs editing tool and nimpl.tech improvements. Nimpl news for May
        </a>
      ),
    }
}

export default config;
