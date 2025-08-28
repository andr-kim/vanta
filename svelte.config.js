import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// На GitHub Pages правильно использовать 404.html как SPA-fallback
			// (Pages отдаёт именно 404.html для неизвестных путей)
			fallback: '404.html',
			strict: false
		}),
		paths: {
			// в dev режиме базовый путь пустой, в проде — /vanta (имя репозитория)
			base: dev ? '' : '/vanta'
		}
	}
};

export default config;
