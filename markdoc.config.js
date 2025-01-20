import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
// import starlightMarkdoc from '@astrojs/starlight-markdoc';

// @tingeber open issue
// I manually imported content from @astrojs/starlight-markdoc and WellKnownElementAttributes
// because of some nesting bug where my editor wouldn't recognize the tags
// to be put back once we figure out whats happening

/**
 * A list of well-known HTML element global attributes that can be used on any HTML element.
 *
 * @satisfies {HTMLElementTagAttributes<'span'>}
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
export const WellKnownElementAttributes = {
  class: { type: String },
  dir: { type: String, matches: ['ltr', 'rtl', 'auto'] },
  hidden: { type: String, matches: ['', 'hidden', 'until-found'] },
  id: { type: String },
  lang: { type: String },
  role: { type: String },
  style: { type: String },
  title: { type: String },
};

/**
 * A list of well-known HTML attributes that can be used on an `<a>` element.
 *
 * @satisfies {HTMLElementTagAttributes<'a'>}
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
export const WellKnownAnchorAttributes = {
  ...WellKnownElementAttributes,
  download: { type: String },
  href: { type: String },
  hreflang: { type: String },
  media: { type: String },
  ping: { type: String },
  rel: { type: String },
  target: { type: String, matches: ['_self', '_blank', '_parent', '_top'] },
};

/**
 * The configuration of a tag attribute.
 * @typedef {NonNullable<NonNullable<import('@astrojs/markdoc/config').AstroMarkdocConfig['tags']>[string]['attributes']>[string]} TagAttributeConfig
 */

/**
 * A map of HTML attributes for a specific HTML element with their associated attribute configuration.
 * @typedef {Partial<Record<keyof import('astro/types').HTMLAttributes<T>, TagAttributeConfig>>} HTMLElementTagAttributes
 * @template {import('astro/types').HTMLTag} T
 */

export const StarlightMarkdocPreset = {};

/** @return {import('@astrojs/markdoc/config').AstroMarkdocConfig} */
export function starlightMarkdoc() {
  return StarlightMarkdocPreset;
}

export default defineMarkdocConfig({
  nodes: {
    fence: {
      render: component('@astrojs/starlight-markdoc/components', 'Code'),
      attributes: {
        content: {
          type: String,
          required: true,
          render: 'code',
        },
        language: {
          type: String,
          required: false,
          render: 'lang',
        },
        /**
         * Markdoc ignores meta attributes (markers) after a fence block (e.g.
         * ```js title="example.js" del={2} ins={3-4} {6} ).
         * This means that Expressive Code markers defined after the fence block are ignored and
         * users would need to use the `code` tag instead.
         *
         * @see https://github.com/withastro/astro/blob/9f943c1344671b569a0d1ddba683b3cca0068adc/packages/integrations/markdoc/src/extensions/shiki.ts#L15-L17
         */
      },
    },
  },
  tags: {
    aside: {
      render: component('@astrojs/starlight/components', 'Aside'),
      attributes: {
        title: {
          type: String,
          required: false,
        },
        type: {
          type: String,
          required: false,
          default: 'note',
          matches: ['note', 'danger', 'caution', 'tip'],
        },
      },
    },
    badge: {
      render: component('@astrojs/starlight/components', 'Badge'),
      attributes: {
        ...WellKnownElementAttributes,
        text: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: false,
          default: 'small',
          matches: ['small', 'medium', 'large'],
        },
        variant: {
          type: String,
          required: false,
          matches: ['note', 'tip', 'danger', 'caution', 'success'],
        },
      },
    },
    card: {
      render: component('@astrojs/starlight/components', 'Card'),
      attributes: {
        icon: {
          type: String,
          required: false,
        },
        title: {
          type: String,
          required: true,
        },
      },
    },
    cardgrid: {
      render: component('@astrojs/starlight/components', 'CardGrid'),
      attributes: {
        stagger: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
    },
    code: {
      render: component('@astrojs/starlight/components', 'Code'),
      attributes: {
        class: {
          type: String,
          required: false,
        },
        code: {
          type: String,
          required: true,
        },
        lang: {
          type: String,
          required: false,
        },
        meta: {
          type: String,
          required: false,
        },
        locale: {
          type: String,
          required: false,
        },
        frame: {
          type: String,
          required: false,
          default: 'auto',
          matches: ['auto', 'code', 'terminal', 'none'],
        },
        preserveIndent: {
          type: Boolean,
          required: false,
          default: true,
        },
        title: {
          type: String,
          required: false,
        },
        useDiffSyntax: {
          type: Boolean,
          required: false,
          default: false,
        },
        wrap: {
          type: Boolean,
          required: false,
          default: false,
        },
        /**
         * `mark`, `ins`, and `del` are not supported as the Markdoc attribute validation syntax
         * does not allow to describe properly all the possible values.
         * Users should use the `meta` attribute instead.
         *
         * @see https://expressive-code.com/key-features/code-component/#mark--ins--del
         */
      },
    },
    filetree: {
      render: component('@astrojs/starlight/components', 'FileTree'),
      attributes: {},
    },
    icon: {
      render: component('@astrojs/starlight/components', 'Icon'),
      attributes: {
        class: {
          type: String,
          required: false,
        },
        color: {
          type: String,
          required: false,
        },
        label: {
          type: String,
          required: false,
        },
        name: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: false,
        },
      },
    },
    linkbutton: {
      render: component('@astrojs/starlight/components', 'LinkButton'),
      attributes: {
        ...WellKnownAnchorAttributes,
        href: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: false,
        },
        iconPlacement: {
          type: String,
          required: false,
          default: 'end',
          matches: ['start', 'end'],
        },
        variant: {
          type: String,
          required: false,
          default: 'primary',
          matches: ['primary', 'secondary', 'minimal'],
        },
      },
    },
    linkcard: {
      render: component('@astrojs/starlight/components', 'LinkCard'),
      attributes: {
        ...WellKnownAnchorAttributes,
        description: {
          type: String,
          required: false,
        },
        href: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
      },
    },
    steps: {
      render: component('@astrojs/starlight/components', 'Steps'),
      attributes: {},
    },
    tabitem: {
      render: component('@astrojs/starlight/components', 'TabItem'),
      attributes: {
        icon: {
          type: String,
          required: false,
        },
        label: {
          type: String,
          required: true,
        },
      },
    },
    tabs: {
      render: component('@astrojs/starlight/components', 'Tabs'),
      attributes: {
        syncKey: {
          type: String,
          required: false,
        },
      },
    },
  },
});
