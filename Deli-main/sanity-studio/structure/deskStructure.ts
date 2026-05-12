import type {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('siteSettings').title('Site Settings'),
      S.documentTypeListItem('homePage').title('Home Page'),
      S.listItem()
        .title('Products')
        .child(
          S.list()
            .title('Products')
            .items([
              S.documentTypeListItem('productCategory').title('Product Categories'),
              S.documentTypeListItem('product').title('All Products'),
            ]),
        ),
      S.documentTypeListItem('application').title('Applications'),
      S.documentTypeListItem('caseStudy').title('Shows & Events'),
      S.documentTypeListItem('blogPost').title('Blog'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.listItem()
        .title('Trust Assets')
        .child(
          S.list()
            .title('Trust Assets')
            .items([
              S.documentTypeListItem('certification').title('Certifications'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('galleryItem').title('Gallery'),
            ]),
        ),
      S.listItem()
        .title('SEO & Settings')
        .child(
          S.list()
            .title('SEO & Settings')
            .items([
              S.documentTypeListItem('page').title('Generic Pages'),
              S.documentTypeListItem('author').title('Authors'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('inquiry').title('Inquiries'),
    ])
