import {defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Product', value: 'product'},
          {title: 'Customization', value: 'customization'},
          {title: 'MOQ', value: 'moq'},
          {title: 'Lead Time', value: 'lead_time'},
          {title: 'Shipping', value: 'shipping'},
          {title: 'Warranty', value: 'warranty'},
          {title: 'Samples', value: 'samples'},
        ],
      },
    }),
    defineField({
      name: 'relatedProduct',
      title: 'Related Product',
      type: 'reference',
      to: [{type: 'product'}],
    }),
    defineField({
      name: 'relatedApplication',
      title: 'Related Application',
      type: 'reference',
      to: [{type: 'application'}],
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 100,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {title: 'question', subtitle: 'answer'},
    prepare(selection) {
      return {
        title: selection.title || 'FAQ',
        subtitle: selection.subtitle || '',
      }
    },
  },
})
