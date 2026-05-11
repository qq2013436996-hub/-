import {defineField, defineType} from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
    defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
    defineField({name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string'}),
    defineField({name: 'secondaryButtonLink', title: 'Secondary Button Link', type: 'string'}),
  ],
})
