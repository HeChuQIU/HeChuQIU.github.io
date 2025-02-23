import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://HeChuQIU.github.io',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: "zh-cn",
		locales: ["zh-cn", "en"],
		routing: {
			prefixDefaultLocale: false
		}
	}
});
