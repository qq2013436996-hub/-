import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'sections', title: 'Sections', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'sectionHeader', group: 'sections'}),
    defineField({name: 'productSection', title: 'Product Section', type: 'sectionHeader', group: 'sections'}),
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      group: 'sections',
    }),
    defineField({
      name: 'applicationSection',
      title: 'Application Section',
      type: 'sectionHeader',
      group: 'sections',
    }),
    defineField({
      name: 'featuredApplications',
      title: 'Featured Applications',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'application'}]}],
      group: 'sections',
    }),
    defineField({
      name: 'whyChooseUsSection',
      title: 'Why Choose Us Section',
      type: 'sectionHeader',
      group: 'sections',
    }),
    defineField({
      name: 'whyChooseUsItems',
      title: 'Why Choose Us Items',
      type: 'array',
      of: [{type: 'featureItem'}],
      group: 'sections',
    }),
    defineField({
      name: 'factorySection',
      title: 'Factory Section',
      type: 'sectionHeader',
      group: 'sections',
    }),
    defineField({
      name: 'factoryGallery',
      title: 'Factory Gallery',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'galleryItem'}]}],
      group: 'sections',
    }),
    defineField({
      name: 'caseStudySection',
      title: 'Case Study Section',
      type: 'sectionHeader',
      group: 'sections',
    }),
    defineField({
      name: 'featuredCaseStudies',
      title: 'Featured Case Studies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
      group: 'sections',
    }),
    defineField({
      name: 'certificationSection',
      title: 'Certification Section',
      type: 'sectionHeader',
      group: 'sections',
    }),
    defineField({
      name: 'featuredCertifications',
      title: 'Featured Certifications',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'certification'}]}],
      group: 'sections',
    }),
    defineField({
      name: 'testimonialSection',
      title: 'Testimonial Section',
      type: 'sectionHeader',
      group: 'sections',
    }),
    defineField({
      name: 'featuredTestimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
      group: 'sections',
    }),
    defineField({name: 'faqSection', title: 'FAQ Section', type: 'sectionHeader', group: 'sections'}),
    defineField({
      name: 'featuredFaqs',
      title: 'Featured FAQs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
      group: 'sections',
    }),
    defineField({name: 'finalCta', title: 'Final CTA', type: 'cta', group: 'sections'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    select: {title: 'hero.sectionTitle'},
    prepare(selection) {
      return {
        title: selection.title || 'Home Page',
        subtitle: 'Landing page configuration',
      }
    },
  },
})
