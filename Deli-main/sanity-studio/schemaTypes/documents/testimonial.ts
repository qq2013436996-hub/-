import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'clientName', title: 'Client Name', type: 'string'}),
    defineField({name: 'clientTitle', title: 'Client Title', type: 'string'}),
    defineField({name: 'companyName', title: 'Company Name', type: 'string'}),
    defineField({name: 'country', title: 'Country', type: 'string'}),
    defineField({name: 'avatar', title: 'Avatar', type: 'image', options: {hotspot: true}}),
    defineField({name: 'relatedProduct', title: 'Related Product', type: 'reference', to: [{type: 'product'}]}),
    defineField({
      name: 'relatedCaseStudy',
      title: 'Related Case Study',
      type: 'reference',
      to: [{type: 'caseStudy'}],
    }),
    defineField({name: 'displayOrder', title: 'Display Order', type: 'number', initialValue: 100}),
  ],
  orderings: [{title: 'Display Order', name: 'displayOrderAsc', by: [{field: 'displayOrder', direction: 'asc'}]}],
  preview: {
    select: {title: 'clientName', subtitle: 'companyName', media: 'avatar', quote: 'quote'},
    prepare(selection) {
      return {
        title: selection.title || 'Testimonial',
        subtitle: selection.subtitle || selection.quote || '',
        media: selection.media,
      }
    },
  },
})
