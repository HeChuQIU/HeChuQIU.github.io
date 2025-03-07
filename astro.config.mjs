import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import expressiveCode from "astro-expressive-code";
import {pluginLineNumbers} from "@expressive-code/plugin-line-numbers";

import '@fontsource-variable/jetbrains-mono';

// https://astro.build/config
export default defineConfig({
	site: 'https://HeChuQIU.github.io',
	integrations: [
		expressiveCode({
			plugins: [pluginLineNumbers()], // add pluginLineNumbers() plugin
			defaultProps: {
				showLineNumbers: true, // set true to show line number by default
			}
		}),
		mdx(), sitemap(),
	],
	i18n: {
		defaultLocale: "zh-cn",
		locales: ["zh-cn", "en"],
		routing: {
			prefixDefaultLocale: false
		}
	}
});