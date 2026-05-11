import {defineField, defineType} from 'sanity'

export const inquiry = defineType({
  name: 'inquiry',
  title: 'Inquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'phoneWhatsapp',
      title: 'Phone / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'productInterestedIn',
      title: 'Product Interested In',
      type: 'string',
    }),
    defineField({
      name: 'estimatedOrderQuantity',
      title: 'Estimated Order Quantity',
      type: 'string',
    }),
    defineField({
      name: 'buyerType',
      title: 'Buyer Type',
      type: 'string',
      options: {
        list: [
          {title: 'Distributor / Wholesaler', value: 'Distributor / Wholesaler'},
          {title: 'Brand Owner', value: 'Brand Owner'},
          {title: 'OEM / Manufacturer', value: 'OEM / Manufacturer'},
          {title: 'Retailer', value: 'Retailer'},
          {title: 'Personal Buyer', value: 'Personal Buyer'},
          {title: 'Other', value: 'Other'},
        ],
      },
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: '待处理',
      options: {
        list: [
          {title: '待处理', value: '待处理'},
          {title: '已联系', value: '已联系'},
          {title: '已关闭', value: '已关闭'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
    }),
    defineField({
      name: 'firstSource',
      title: 'First Source',
      type: 'string',
    }),
    defineField({
      name: 'firstMedium',
      title: 'First Medium',
      type: 'string',
    }),
    defineField({
      name: 'firstCampaign',
      title: 'First Campaign',
      type: 'string',
    }),
    defineField({
      name: 'firstContent',
      title: 'First Content',
      type: 'string',
    }),
    defineField({
      name: 'firstTerm',
      title: 'First Term',
      type: 'string',
    }),
    defineField({
      name: 'landingPage',
      title: 'Landing Page',
      type: 'string',
    }),
    defineField({
      name: 'currentPage',
      title: 'Current Page',
      type: 'string',
    }),
    defineField({
      name: 'referrer',
      title: 'Referrer',
      type: 'string',
    }),
    defineField({
      name: 'gclid',
      title: 'GCLID',
      type: 'string',
    }),
    defineField({
      name: 'gbraid',
      title: 'GBRAID',
      type: 'string',
    }),
    defineField({
      name: 'wbraid',
      title: 'WBRAID',
      type: 'string',
    }),
    defineField({
      name: 'msclkid',
      title: 'MSCLKID',
      type: 'string',
    }),
    defineField({
      name: 'fbclid',
      title: 'FBCLID',
      type: 'string',
    }),
    defineField({
      name: 'visitorPath',
      title: 'Visitor Path',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'createdAtDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Inquiry',
        subtitle: [selection.subtitle, selection.status].filter(Boolean).join(' · '),
      }
    },
  },
})
