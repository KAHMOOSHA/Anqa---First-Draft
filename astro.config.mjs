import { defineConfig } from 'astro/config';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
    site: 'https://KAHMOOSHA.github.io',
    base: '/Anqa---First-Draft/',
    integrations: [githubPages()],
});