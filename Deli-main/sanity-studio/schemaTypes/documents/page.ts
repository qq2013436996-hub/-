import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3, group: 'content'}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'imageWithAlt', group: 'content'}),
    defineField({name: 'content', title: 'Content', type: 'portableText', group: 'content'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current', media: 'heroImage.image'},
  },
})
