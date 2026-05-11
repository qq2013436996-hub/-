import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended length: 50-60 characters.',
      validation: (rule) =>
        rule.required().max(60).warning('Keep Meta Title within 60 characters.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended length: 150-160 characters.',
      validation: (rule) =>
        rule.required().max(160).warning('Keep Meta Description within 160 characters.'),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      validation: (rule) => rule.max(60).warning('Keep OG title within 60 characters.'),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(160).warning('Keep OG description within 160 characters.'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Image used when sharing this page on social platforms.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'schemaType',
      title: 'Schema Type',
      type: 'string',
      options: {
        list: [
          {title: 'Product', value: 'product'},
          {title: 'Article', value: 'article'},
          {title: 'Organization', value: 'organization'},
          {title: 'FAQ Page', value: 'faq'},
        ],
      },
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'robots',
      title: 'Robots Tag',
      type: 'string',
      initialValue: 'index, follow',
      options: {
        list: [
          {title: 'Index, Follow', value: 'index, follow'},
          {title: 'Noindex, Follow', value: 'noindex, follow'},
          {title: 'Noindex, Nofollow', value: 'noindex, nofollow'},
        ],
      },
    }),
  ],
})
