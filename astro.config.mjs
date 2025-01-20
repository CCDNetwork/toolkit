// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    markdoc({ ignoreIndentation: true }),
    starlight({
      title: 'Data Stew',
      logo: {
        light: '/public/ccd_logo.png',
        dark: '/public/ccd_logo.png',
        replacesTitle: true,
      },
      components: {
        Hero: '@components/Hero.astro',
        Header: '@components/Header.astro',
        SiteTitle: '@components/SiteTitle.astro',
      },
      social: {
        github:
          'https://github.com/ccdnethttps://github.com/CCDNetwork/toolkit',
        blueSky: 'https://bsky.app/profile/tin.fyi',
      },
      lastUpdated: true,
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
    react(),
  ],
  site: 'https://datastew.org/',
});
