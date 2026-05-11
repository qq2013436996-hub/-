import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'issuingBody', title: 'Issuing Body', type: 'string'}),
    defineField({name: 'validUntil', title: 'Valid Until', type: 'date'}),
    defineField({name: 'displayOrder', title: 'Display Order', type: 'number', initialValue: 100}),
  ],
  orderings: [{title: 'Display Order', name: 'displayOrderAsc', by: [{field: 'displayOrder', direction: 'asc'}]}],
  preview: {
    select: {title: 'title', subtitle: 'issuingBody', media: 'image'},
  },
})
