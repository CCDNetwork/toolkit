// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CCD Toolkit',
      components: {
        Hero: './src/components/Hero.astro',
      },
      social: {
        github: 'https://github.com/withastro/starlight',
        blueSky: 'https://bsky.app/profile/tin.fyi',
      },

      // sidebar: [
      // 	{
      // 		label: 'Guides',
      // 		items: [
      // 			// Each item here is one entry in the navigation menu.
      // 			{ label: 'Example Guide', slug: 'guides/example' },
      // 		],
      // 	},
      // 	{
      // 		label: 'Reference',
      // 		autogenerate: { directory: 'reference' },
      // 	},
      // ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  site: 'https://ccdnetwork.github.io/',
});
