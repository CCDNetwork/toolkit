// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CCD Toolkit',
      logo: {
        light: './src/assets/ccd_logo.png',
        dark: './src/assets/ccd_logo.png',
        replacesTitle: true,
      },
      components: {
        Hero: './src/components/Hero.astro',
        Header: './src/components/Header.astro',
        SiteTitle: './src/components/SiteTitle.astro',
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
      sidebar: [
        {
          label: 'Background',
          // Autogenerate a group of links for the 'constellations' directory.
          slug: 'background',
        },
        {
          label: 'Training',
          // Autogenerate a group of links for the 'constellations' directory.
          autogenerate: { directory: 'training' },
        },
        {
          label: 'The Toolkit',
          // Autogenerate a group of links for the 'constellations' directory.
          autogenerate: { directory: 'toolkit' },
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  site: 'https://ccdnetwork.github.io/',
  base: 'toolkit',
});
