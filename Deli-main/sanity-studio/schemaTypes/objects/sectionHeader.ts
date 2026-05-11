import {defineField, defineType} from 'sanity'

export const sectionHeader = defineType({
  name: 'sectionHeader',
  title: 'Section Header',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
    defineField({name: 'sectionDescription', title: 'Section Description', type: 'text', rows: 3}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
    defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
  ],
})
