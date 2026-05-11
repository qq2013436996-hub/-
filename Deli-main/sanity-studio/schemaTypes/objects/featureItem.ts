import {defineField, defineType} from 'sanity'

export const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({name: 'icon', title: 'Icon', type: 'image', options: {hotspot: true}}),
  ],
})
