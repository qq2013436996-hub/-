import {defineField, defineType} from 'sanity'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'displayOrder', title: 'Display Order', type: 'number', initialValue: 100}),
  ],
  preview: {
    select: {title: 'title', media: 'image.image'},
  },
})
